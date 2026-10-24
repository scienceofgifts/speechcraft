import { Hono } from 'hono';
import { GoogleGenAI, Type } from '@google/genai';
import { resolveApiModelId, DEFAULT_GEMINI_MODEL_ID } from './config/modelConfig';

type Bindings = {
  GEMINI_API_KEY: string;
};

const app = new Hono<{ Bindings: Bindings }>();

// Enable CORS for all routes
app.use('*', async (c, next) => {
  await next();
  c.header('Access-Control-Allow-Origin', '*');
  c.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  c.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
});

// OPTIONS preflight
app.options('*', (c) => {
  return c.body(null, 204);
});

// Helper to extract clean base64 string from data URL or raw string
function extractBase64Data(input: string): string {
  if (!input || typeof input !== 'string') return '';
  const commaIndex = input.indexOf(',');
  if (commaIndex !== -1 && input.substring(0, commaIndex).includes('base64')) {
    return input.substring(commaIndex + 1).trim();
  }
  return input.trim();
}

const FALLBACK_MODELS = [
  'gemini-3.5-flash-lite',
  'gemini-3.8-flash',
  'gemini-3.1-flash-lite',
  'gemini-3.7-flash',
  'gemini-3.5-flash',
  'gemini-3.6-flash',
];

function isRateLimitOrQuotaError(err: any): boolean {
  if (!err) return false;
  const status = err.status || err.code || err.statusCode;
  if (status === 429 || status === 'RESOURCE_EXHAUSTED' || status === 503) return true;
  const msg = typeof err === 'string' ? err : (err.message || JSON.stringify(err));
  return /429|RESOURCE_EXHAUSTED|Quota exceeded|quota|rate limit|too many requests|503|UNAVAILABLE|overloaded|high demand/i.test(msg);
}

async function generateContentWithFallback(
  ai: GoogleGenAI,
  initialModel: string,
  params: { contents: any; config?: any }
) {
  const primaryModel = resolveApiModelId(initialModel);
  const candidateModels = [
    primaryModel,
    ...FALLBACK_MODELS.filter((m) => m !== primaryModel),
  ];

  let lastError: any = null;

  for (const modelToTry of candidateModels) {
    try {
      const response = await ai.models.generateContent({
        model: modelToTry,
        contents: params.contents,
        config: params.config,
      });
      return response;
    } catch (err: any) {
      lastError = err;
      if (isRateLimitOrQuotaError(err)) {
        console.warn(`[WORKER WARN] Gemini model "${modelToTry}" hit quota/rate limit. Trying fallback model...`);
        continue;
      }
      throw err;
    }
  }

  throw lastError;
}

// Helper to initialize Gemini client
function getAiClient(apiKey: string): GoogleGenAI {
  return new GoogleGenAI({
    apiKey: apiKey || '',
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Health check endpoint
app.get('/', (c) => {
  return c.json({ status: 'SpeechCraft Studio Cloudflare Worker API active' });
});

// -------------------------------------------------------------
// POST /api/analyze-speech
// -------------------------------------------------------------
app.post('/api/analyze-speech', async (c) => {
  try {
    const apiKey = c.env?.GEMINI_API_KEY || '';
    if (!apiKey) {
      return c.json(
        { error: 'GEMINI_API_KEY environment secret is missing or not configured.' },
        500
      );
    }

    const body = await c.req.json().catch(() => ({}));
    const {
      audioBase64,
      mimeType = 'audio/webm',
      durationSeconds = 0,
      exerciseType = 'general',
      targetText = '',
      context = '',
      learnerGoals = [],
      targetAccent = 'General American English',
    } = body;

    if (!audioBase64 || typeof audioBase64 !== 'string') {
      return c.json(
        {
          code: 'INVALID_AUDIO',
          error: 'No audio data was provided. Please record audio before analyzing.',
          stage: 'validation',
        },
        400
      );
    }

    const cleanBase64 = extractBase64Data(audioBase64);
    if (!cleanBase64) {
      return c.json(
        {
          code: 'INVALID_AUDIO',
          error: 'The audio payload appears to be empty or corrupted.',
          stage: 'validation',
        },
        400
      );
    }

    const cleanMimeType = (mimeType || 'audio/webm').split(';')[0].trim().toLowerCase();
    const ai = getAiClient(apiKey);

    const systemInstruction = `You are a world-class speech and dialect coach specializing in General American English (GenAm), articulation, natural rhythm, and executive verbal presence.
Your task is to analyze the learner's actual spoken audio recording.

Guidelines:
1. Provide a STRICT VERBATIM transcription of what was spoken. Include every filler sound ("um", "uh", "er", "ah", "like", "you know", "I mean", "so yeah"), false start, repeated word, and audible pause.
2. Note that natural conversational speech contains occasional brief pauses; distinguish between thoughtful pauses and hesitant filler words.
3. Pronunciation & Accent Analysis: Compare against General American English standards.
4. Fluency & Pacing: Count actual filler occurrences and estimate Words Per Minute (WPM).
5. Return your analysis in the specified JSON schema.`;

    const userPromptText = `Analyze this spoken audio.
Exercise Type: ${exerciseType}
Target Accent: ${targetAccent}
${targetText ? `Target Text/Script: "${targetText}"` : ''}
${context ? `Context: ${context}` : ''}
${learnerGoals?.length ? `Goals: ${learnerGoals.join(', ')}` : ''}
Duration reported: ${durationSeconds ? Math.round(durationSeconds) + ' seconds' : 'not specified'}`;

    const requestedModel = body.selectedGeminiModel || body.selectedModel || body.model || DEFAULT_GEMINI_MODEL_ID;

    const analysisSchema = {
      type: Type.OBJECT,
      properties: {
        transcript: { type: Type.STRING },
        summary: { type: Type.STRING },
        metrics: {
          type: Type.OBJECT,
          properties: {
            estimatedWpm: { type: Type.NUMBER },
            fillerCount: { type: Type.INTEGER },
            detectedFillers: { type: Type.ARRAY, items: { type: Type.STRING } },
            clarityScore: { type: Type.NUMBER },
            pronunciationScore: { type: Type.NUMBER },
            pacingScore: { type: Type.NUMBER },
            fluencyScore: { type: Type.NUMBER },
          },
          required: ['estimatedWpm', 'fillerCount', 'clarityScore', 'pronunciationScore', 'pacingScore', 'fluencyScore'],
        },
        findings: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              category: { type: Type.STRING },
              issue: { type: Type.STRING },
              evidence: { type: Type.STRING },
              explanation: { type: Type.STRING },
              suggestedCorrection: { type: Type.STRING },
              targetedExercise: { type: Type.STRING },
              confidence: { type: Type.STRING },
            },
            required: ['category', 'issue', 'evidence', 'explanation', 'suggestedCorrection', 'targetedExercise'],
          },
        },
        strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
        priorityAreas: { type: Type.ARRAY, items: { type: Type.STRING } },
        nextExercises: { type: Type.ARRAY, items: { type: Type.STRING } },
        limitations: { type: Type.ARRAY, items: { type: Type.STRING } },
      },
      required: ['transcript', 'summary', 'metrics', 'findings', 'strengths', 'priorityAreas', 'nextExercises'],
    };

    const response = await generateContentWithFallback(ai, requestedModel, {
      contents: {
        parts: [
          { inlineData: { mimeType: cleanMimeType, data: cleanBase64 } },
          { text: userPromptText },
        ],
      },
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: analysisSchema,
      },
    });

    const textOutput = response.text?.trim() || '{}';
    const parsed = JSON.parse(textOutput);
    return c.json(parsed);
  } catch (err: any) {
    return c.json(
      {
        code: 'SPEECH_ANALYSIS_ERROR',
        error: err?.message || 'Speech analysis failed.',
      },
      500
    );
  }
});

// -------------------------------------------------------------
// POST /api/tts-reference
// -------------------------------------------------------------
app.post('/api/tts-reference', async (c) => {
  try {
    const apiKey = c.env?.GEMINI_API_KEY || '';
    if (!apiKey) {
      return c.json({ fallback: true, message: 'GEMINI_API_KEY is not configured.' });
    }

    const body = await c.req.json().catch(() => ({}));
    const { text } = body;
    if (!text || typeof text !== 'string') {
      return c.json({ error: 'Text parameter is required.' }, 400);
    }

    const cleanText = text.trim();
    const ai = getAiClient(apiKey);

    let response: any;
    try {
      response = await ai.models.generateContent({
        model: 'gemini-3.8-flash-lite-tts',
        contents: [{ role: 'user', parts: [{ text: cleanText }] }],
      });
    } catch {
      response = await ai.models.generateContent({
        model: 'gemini-3.8-flash-tts',
        contents: [{ role: 'user', parts: [{ text: cleanText }] }],
      });
    }

    let audioData: string | null = null;
    let mimeType = 'audio/wav';

    const candidates = response.candidates || [];
    for (const candidate of candidates) {
      for (const part of candidate.content?.parts || []) {
        if (part.inlineData?.data) {
          audioData = part.inlineData.data;
          mimeType = part.inlineData.mimeType || 'audio/wav';
          break;
        }
      }
      if (audioData) break;
    }

    if (!audioData) {
      return c.json({
        fallback: true,
        message: 'TTS model generated text only; triggering browser speech synthesis fallback.',
      });
    }

    return c.json({
      audioBase64: `data:${mimeType};base64,${audioData}`,
      mimeType,
    });
  } catch (err: any) {
    return c.json({
      fallback: true,
      message: 'Gemini TTS model rate-limited; triggering client browser speech synthesis fallback.',
    });
  }
});

// -------------------------------------------------------------
// POST /api/conversation-reply
// -------------------------------------------------------------
app.post('/api/conversation-reply', async (c) => {
  try {
    const apiKey = c.env?.GEMINI_API_KEY || '';
    if (!apiKey) {
      return c.json({ error: 'GEMINI_API_KEY environment secret is missing.' }, 500);
    }

    const body = await c.req.json().catch(() => ({}));
    const {
      scenarioTitle,
      scenarioPrompt,
      conversationHistory = [],
      latestUserAudioBase64,
      latestUserTranscript,
      mode = 'standard',
      toneStyle = 'Playful & Witty',
      flirtationLevel = 'Confident & Flirty',
      partnerGender = 'Female',
      practiceObjective,
    } = body;

    const ai = getAiClient(apiKey);

    const objectiveInstruction = practiceObjective
      ? `\nUser's Practice Objective for this session: "${practiceObjective}". Keep this objective in mind to create natural opportunities to practice.`
      : '';

    let systemInstruction = '';
    if (mode === 'roleplay') {
      const genderInstruction =
        partnerGender === 'Male'
          ? 'The fictional roleplay partner must be consistently male.'
          : partnerGender === 'Female'
          ? 'The fictional roleplay partner must be consistently female.'
          : 'Maintain character gender consistently throughout the session.';

      systemInstruction = `You are playing the fictional character in an immersive conversational roleplay scenario titled "${scenarioTitle || 'Romantic Scenario'}".
Scenario context: "${scenarioPrompt || 'Engage in natural spontaneous dialogue.'}"
Tone style: "${toneStyle}". Flirtation level: "${flirtationLevel}".
Partner Gender requirement: ${genderInstruction}${objectiveInstruction}

Stay in character as the fictional person. Return natural conversational dialogue. Keep coachingFeedback strictly empty ([]).`;
    } else if (mode === 'coach') {
      systemInstruction = `You are an expert American English communication and dating coach.
The user is practicing a scenario titled: "${scenarioTitle}". Setup: "${scenarioPrompt}".
Provide learnerTranscript, 1-2 sharp coaching notes in coachingFeedback, and coachResponseText.`;
    } else {
      systemInstruction = `You are Alex, an engaging American speech and communication coach.
Scenario setup: "${scenarioPrompt || 'Engage in natural spontaneous dialogue.'}"
Provide verbatim transcription, 1-2 coaching pointers, and respond naturally to keep conversation flowing.`;
    }

    const contents: any[] = [];
    let historyContext = conversationHistory
      .slice(-6)
      .map((t: any) => `${t.role === 'coach' ? 'Coach' : 'Learner'}: ${t.text}`)
      .join('\n');

    const promptText = `Previous context:\n${historyContext}\n\nLatest learner turn:\n${latestUserTranscript ? `Learner Transcript: "${latestUserTranscript}"` : 'Please transcribe the attached audio and respond.'}`;

    if (latestUserAudioBase64) {
      const cleanBase64 = extractBase64Data(latestUserAudioBase64);
      if (cleanBase64) {
        contents.push({
          inlineData: {
            mimeType: 'audio/webm',
            data: cleanBase64,
          },
        });
      }
    }
    contents.push({ text: promptText });

    const conversationSchema = {
      type: Type.OBJECT,
      properties: {
        learnerTranscript: { type: Type.STRING },
        coachingFeedback: { type: Type.ARRAY, items: { type: Type.STRING } },
        coachResponseText: { type: Type.STRING },
        suggestedNextQuestion: { type: Type.STRING },
      },
      required: ['learnerTranscript', 'coachingFeedback', 'coachResponseText', 'suggestedNextQuestion'],
    };

    const requestedModel = body.selectedGeminiModel || body.selectedModel || body.model || DEFAULT_GEMINI_MODEL_ID;

    const response = await generateContentWithFallback(ai, requestedModel, {
      contents: { parts: contents },
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: conversationSchema,
      },
    });

    const parsed = JSON.parse(response.text?.trim() || '{}');
    return c.json(parsed);
  } catch (err: any) {
    return c.json(
      {
        code: 'CONVERSATION_ERROR',
        error: 'Failed to process conversation round.',
        details: err?.message,
      },
      500
    );
  }
});

// -------------------------------------------------------------
// POST /api/generate-vocab-lesson
// -------------------------------------------------------------
app.post('/api/generate-vocab-lesson', async (c) => {
  try {
    const apiKey = c.env?.GEMINI_API_KEY || '';
    if (!apiKey) {
      return c.json({ error: 'GEMINI_API_KEY environment secret is missing.' }, 500);
    }

    const body = await c.req.json().catch(() => ({}));
    const {
      wordId,
      word,
      partOfSpeech = 'noun',
      definition = '',
      difficulty = 'Advanced',
      topicTags = [],
      rootId = '',
    } = body;

    if (!word || typeof word !== 'string') {
      return c.json({ error: 'Word parameter is required.' }, 400);
    }

    const ai = getAiClient(apiKey);

    const systemInstruction = `You are a world-class lexicographer, etymologist, and speech coach specializing in English vocabulary acquisition.
Generate a comprehensive, highly pedagogical vocabulary lesson for the requested word.`;

    const promptText = `Generate a full, structured vocabulary lesson for:
Headword: "${word}"
Part of speech: "${partOfSpeech}"
Catalogue definition: "${definition}"
Target Difficulty: "${difficulty}"
Topic Domains: ${JSON.stringify(topicTags)}
Root ID: "${rootId || 'none'}"
Word ID: "${wordId || 'lesson-' + word.toLowerCase().replace(/[^a-z0-9]+/g, '-')}"`;

    const lessonSchema = {
      type: Type.OBJECT,
      properties: {
        id: { type: Type.STRING },
        word: { type: Type.STRING },
        partOfSpeech: { type: Type.STRING },
        syllables: { type: Type.STRING },
        phoneticIpa: { type: Type.STRING },
        stressPattern: { type: Type.STRING },
        difficulty: { type: Type.STRING },
        register: { type: Type.STRING },
        frequency: { type: Type.STRING },
        shortGloss: { type: Type.STRING },
        definitions: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              definition: { type: Type.STRING },
              isPrimary: { type: Type.BOOLEAN },
              contextNote: { type: Type.STRING },
              example: { type: Type.STRING },
            },
            required: ['definition', 'isPrimary', 'example'],
          },
        },
        etymology: {
          type: Type.OBJECT,
          properties: {
            languageOfOrigin: { type: Type.STRING },
            historicalDevelopment: { type: Type.STRING },
            rootId: { type: Type.STRING },
            rootName: { type: Type.STRING },
            literalOriginalMeaning: { type: Type.STRING },
            modernConnection: { type: Type.STRING },
            disputedOrUncertain: { type: Type.STRING },
          },
          required: [
            'languageOfOrigin',
            'historicalDevelopment',
            'rootId',
            'rootName',
            'literalOriginalMeaning',
            'modernConnection',
          ],
        },
        synonyms: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              word: { type: Type.STRING },
              nuance: { type: Type.STRING },
            },
            required: ['word', 'nuance'],
          },
        },
        antonyms: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
        },
        distinctions: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              alternativeWord: { type: Type.STRING },
              centralDifference: { type: Type.STRING },
              targetPreferredWhen: { type: Type.STRING },
              alternativePreferredWhen: { type: Type.STRING },
              commonMistake: { type: Type.STRING },
              targetExample: { type: Type.STRING },
              alternativeExample: { type: Type.STRING },
            },
            required: [
              'alternativeWord',
              'centralDifference',
              'targetPreferredWhen',
              'alternativePreferredWhen',
              'commonMistake',
              'targetExample',
              'alternativeExample',
            ],
          },
        },
        collocations: {
          type: Type.OBJECT,
          properties: {
            verbs: { type: Type.ARRAY, items: { type: Type.STRING } },
            modifiers: { type: Type.ARRAY, items: { type: Type.STRING } },
            prepositions: { type: Type.ARRAY, items: { type: Type.STRING } },
            idiomaticFrames: { type: Type.ARRAY, items: { type: Type.STRING } },
            contrasts: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  natural: { type: Type.STRING },
                  awkward: { type: Type.STRING },
                },
                required: ['natural', 'awkward'],
              },
            },
          },
          required: ['verbs', 'modifiers', 'prepositions', 'idiomaticFrames', 'contrasts'],
        },
        morphology: {
          type: Type.OBJECT,
          properties: {
            baseRoot: { type: Type.STRING },
            forms: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  form: { type: Type.STRING },
                  partOfSpeech: { type: Type.STRING },
                  definition: { type: Type.STRING },
                  example: { type: Type.STRING },
                  stressShiftNote: { type: Type.STRING },
                },
                required: ['form', 'partOfSpeech', 'definition', 'example'],
              },
            },
          },
          required: ['baseRoot', 'forms'],
        },
        memoryAids: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              technique: { type: Type.STRING },
              explanation: { type: Type.STRING },
              isEtymological: { type: Type.BOOLEAN },
            },
            required: ['technique', 'explanation', 'isEtymological'],
          },
        },
        practicalExamples: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              domain: { type: Type.STRING },
              sentence: { type: Type.STRING },
            },
            required: ['domain', 'sentence'],
          },
        },
        selfCheck: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            prompt: { type: Type.STRING },
            options: { type: Type.ARRAY, items: { type: Type.STRING } },
            correctIndex: { type: Type.INTEGER },
            explanation: { type: Type.STRING },
            type: { type: Type.STRING },
          },
          required: ['id', 'prompt', 'options', 'correctIndex', 'explanation', 'type'],
        },
        cluster: { type: Type.STRING },
        tags: { type: Type.ARRAY, items: { type: Type.STRING } },
      },
      required: [
        'id',
        'word',
        'partOfSpeech',
        'syllables',
        'phoneticIpa',
        'stressPattern',
        'difficulty',
        'register',
        'frequency',
        'shortGloss',
        'definitions',
        'etymology',
        'synonyms',
        'antonyms',
        'distinctions',
        'collocations',
        'morphology',
        'memoryAids',
        'practicalExamples',
        'selfCheck',
        'cluster',
        'tags',
      ],
    };

    const requestedModel = body.selectedGeminiModel || body.selectedModel || DEFAULT_GEMINI_MODEL_ID;

    const response = await generateContentWithFallback(ai, requestedModel, {
      contents: promptText,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: lessonSchema,
      },
    });

    const parsed = JSON.parse(response.text?.trim() || '{}');
    if (!parsed.id) parsed.id = wordId || `lesson-${word.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    if (!parsed.word) parsed.word = word;

    return c.json(parsed);
  } catch (err: any) {
    return c.json(
      {
        code: 'LESSON_GENERATION_ERROR',
        error: 'Failed to generate vocabulary lesson using AI.',
        details: err?.message,
      },
      500
    );
  }
});

// -------------------------------------------------------------
// POST /api/generate-curriculum-lessons
// -------------------------------------------------------------
app.post('/api/generate-curriculum-lessons', async (c) => {
  try {
    const apiKey = c.env?.GEMINI_API_KEY || '';
    if (!apiKey) {
      return c.json({ error: 'GEMINI_API_KEY environment secret is missing.' }, 500);
    }

    const body = await c.req.json().catch(() => ({}));
    const {
      categoryId = 'banter',
      categoryName = 'Playful Banter & Teasing',
      count = 4,
      topic = '',
    } = body;

    const ai = getAiClient(apiKey);

    const curriculumLessonsSchema = {
      type: Type.OBJECT,
      properties: {
        lessons: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              categoryId: { type: Type.STRING },
              categoryName: { type: Type.STRING },
              title: { type: Type.STRING },
              phrase: { type: Type.STRING },
              meaning: { type: Type.STRING },
              context: { type: Type.STRING },
              tone: { type: Type.STRING },
              intimacyLevel: { type: Type.STRING },
              exampleDialogue: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    speaker: { type: Type.STRING },
                    text: { type: Type.STRING },
                  },
                  required: ['speaker', 'text'],
                },
              },
              possibleResponses: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
              commonMistakes: { type: Type.STRING },
              alternativePhrasings: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    style: { type: Type.STRING },
                    phrasing: { type: Type.STRING },
                  },
                  required: ['style', 'phrasing'],
                },
              },
              speakingChallenge: { type: Type.STRING },
            },
            required: [
              'title',
              'phrase',
              'meaning',
              'context',
              'tone',
              'intimacyLevel',
              'exampleDialogue',
              'possibleResponses',
              'commonMistakes',
              'alternativePhrasings',
              'speakingChallenge',
            ],
          },
        },
      },
      required: ['lessons'],
    };

    const systemInstruction = `You are an expert speech coach and curriculum developer specializing in American English social chemistry, romantic nuance, and artful flirting.
Generate a collection of curriculum lessons for category "${categoryName}".
The "categoryId" property MUST strictly be "${categoryId}".
The "categoryName" property MUST strictly be "${categoryName}".`;

    const promptText = topic
      ? `Generate ${count} distinct, high-quality flirting and conversation lesson(s) for category "${categoryName}" specifically focusing on the theme/scenario: "${topic}".`
      : `Generate ${count} distinct, high-quality flirting and conversation lessons for category "${categoryName}".`;

    const requestedModel = body.selectedGeminiModel || body.selectedModel || body.model || DEFAULT_GEMINI_MODEL_ID;

    const response = await generateContentWithFallback(ai, requestedModel, {
      contents: [{ role: 'user', parts: [{ text: promptText }] }],
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: curriculumLessonsSchema,
        temperature: 0.85,
      },
    });

    const text = response.text ? response.text.trim() : '{}';
    let rawLessons: any[] = [];
    try {
      const parsed = JSON.parse(text);
      if (Array.isArray(parsed)) {
        rawLessons = parsed;
      } else if (parsed && Array.isArray(parsed.lessons)) {
        rawLessons = parsed.lessons;
      }
    } catch {
      rawLessons = [];
    }

    const validTones = ['Playful', 'Warm', 'Teasing', 'Direct', 'Romantic', 'Suggestive', 'Bold', 'Seductive', 'Cheeky', 'Dry'];
    const validIntimacy = ['Casual / Acquaintance', 'Dating / Mutual Interest', 'Established Partner / Intimate'];

    const lessons = rawLessons
      .filter((l: any) => l && typeof l === 'object')
      .map((l: any, idx: number) => {
        const title = typeof l.title === 'string' ? l.title.trim() : '';
        const phrase = typeof l.phrase === 'string' ? l.phrase.trim() : '';
        if (!title || !phrase) return null;

        const meaning = typeof l.meaning === 'string' ? l.meaning.trim() : '';
        const context = typeof l.context === 'string' ? l.context.trim() : '';
        const tone = validTones.includes(l.tone) ? l.tone : 'Playful';
        const intimacyLevel = validIntimacy.includes(l.intimacyLevel) ? l.intimacyLevel : 'Casual / Acquaintance';

        const exampleDialogue = Array.isArray(l.exampleDialogue) && l.exampleDialogue.length > 0
          ? l.exampleDialogue.filter((d: any) => d && typeof d.speaker === 'string' && typeof d.text === 'string')
          : [
              { speaker: 'Partner', text: 'You seem to be in great spirits today.' },
              { speaker: 'You', text: phrase },
            ];

        const possibleResponses = Array.isArray(l.possibleResponses) && l.possibleResponses.length > 0
          ? l.possibleResponses.filter((r: any) => typeof r === 'string' && r.trim().length > 0)
          : ['I see what you did there.', 'That depends on who is asking.'];

        const commonMistakes = typeof l.commonMistakes === 'string' ? l.commonMistakes.trim() : '';

        const alternativePhrasings = Array.isArray(l.alternativePhrasings) && l.alternativePhrasings.length > 0
          ? l.alternativePhrasings.filter((a: any) => a && typeof a.style === 'string' && typeof a.phrasing === 'string')
          : [{ style: 'Direct', phrasing: phrase }];

        const speakingChallenge = typeof l.speakingChallenge === 'string' ? l.speakingChallenge.trim() : '';

        return {
          id: `ai-lesson-${Date.now()}-${idx}-${Math.random().toString(36).substring(2, 7)}`,
          categoryId,
          categoryName,
          title,
          phrase,
          meaning,
          context,
          tone,
          intimacyLevel,
          exampleDialogue,
          possibleResponses,
          commonMistakes,
          alternativePhrasings,
          speakingChallenge,
        };
      })
      .filter((l: any) => l !== null);

    return c.json({ lessons });
  } catch (err: any) {
    return c.json(
      {
        code: 'CURRICULUM_GENERATION_ERROR',
        error: 'Failed to generate curriculum lessons.',
        details: err?.message,
      },
      500
    );
  }
});

export default app;
