import { GoogleGenAI, Type } from '@google/genai';
import { resolveApiModelId, DEFAULT_GEMINI_MODEL_ID } from '../src/config/modelConfig';

export interface Env {
  GEMINI_API_KEY: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: any): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (!env.GEMINI_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'GEMINI_API_KEY environment secret is not configured on Cloudflare Worker.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const ai = new GoogleGenAI({ apiKey: env.GEMINI_API_KEY });

    try {
      if (request.method !== 'POST') {
        return new Response(JSON.stringify({ status: 'SpeechCraft Studio Cloudflare Worker API active' }), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      const body: any = await request.json().catch(() => ({}));
      const requestedModel = body.selectedGeminiModel || body.selectedModel || body.model || DEFAULT_GEMINI_MODEL_ID;
      const modelName = resolveApiModelId(requestedModel);

      if (path === '/api/analyze-speech') {
        const { audioBase64, mimeType = 'audio/webm', exerciseType = 'general', targetText = '', context = '', learnerGoals = [], targetAccent = 'General American English' } = body;
        
        if (!audioBase64) {
          return new Response(JSON.stringify({ error: 'Missing audio data' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
        }

        const commaIndex = audioBase64.indexOf(',');
        const cleanBase64 = commaIndex !== -1 ? audioBase64.substring(commaIndex + 1).trim() : audioBase64.trim();
        const cleanMime = (mimeType || 'audio/webm').split(';')[0].trim();

        const prompt = `Analyze this spoken audio.
Exercise Type: ${exerciseType}
Target Accent: ${targetAccent}
${targetText ? `Target Text/Script: "${targetText}"` : ''}
${context ? `Context: ${context}` : ''}
${learnerGoals?.length ? `Goals: ${learnerGoals.join(', ')}` : ''}
Provide verbatim transcript, breakdown of metrics (estimatedWpm, fillerCount, detectedFillers, clarityScore, pronunciationScore, pacingScore, fluencyScore), thought groups, and actionable feedback.`;

        const response = await ai.models.generateContent({
          model: modelName,
          contents: [
            {
              role: 'user',
              parts: [
                { inlineData: { mimeType: cleanMime, data: cleanBase64 } },
                { text: prompt }
              ]
            }
          ],
          config: {
            systemInstruction: 'You are an expert American speech coach and linguist. Return strict structured JSON.',
            responseMimeType: 'application/json',
            responseSchema: {
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
                  required: ['estimatedWpm', 'fillerCount', 'clarityScore', 'pronunciationScore', 'pacingScore', 'fluencyScore']
                },
                thoughtGroups: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      text: { type: Type.STRING },
                      pacing: { type: Type.STRING },
                      stressNotes: { type: Type.STRING }
                    },
                    required: ['text', 'pacing', 'stressNotes']
                  }
                },
                actionableFeedback: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      category: { type: Type.STRING },
                      observation: { type: Type.STRING },
                      remedy: { type: Type.STRING }
                    },
                    required: ['category', 'observation', 'remedy']
                  }
                }
              },
              required: ['transcript', 'summary', 'metrics', 'thoughtGroups', 'actionableFeedback']
            }
          }
        });

        const textOutput = response.text || '{}';
        const parsed = JSON.parse(textOutput);
        return new Response(JSON.stringify(parsed), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      if (path === '/api/tts-reference') {
        return new Response(JSON.stringify({ fallback: true }), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      if (path === '/api/conversation-reply') {
        const { scenarioTitle, scenarioPrompt, conversationHistory = [], latestUserTranscript, mode = 'roleplay', toneStyle, flirtationLevel, partnerGender, practiceObjective } = body;
        
        const prompt = `You are an interactive conversational partner and speaking coach in SpeechCraft Studio.
Scenario: ${scenarioTitle} - ${scenarioPrompt}
Mode: ${mode}
${practiceObjective ? `Objective: ${practiceObjective}` : ''}
${partnerGender ? `Partner Persona Gender: ${partnerGender}` : ''}
${toneStyle ? `Tone/Style: ${toneStyle}` : ''}
${flirtationLevel ? `Flirtation Level: ${flirtationLevel}` : ''}

Conversation History:
${conversationHistory.map((h: any) => `${h.role}: ${h.text}`).join('\n')}
${latestUserTranscript ? `user: ${latestUserTranscript}` : ''}

Respond with coachResponseText (natural conversational reply), learnerTranscript, coachingFeedback (array of strings), and suggestedNextQuestion.`;

        const response = await ai.models.generateContent({
          model: modelName,
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          config: {
            systemInstruction: 'You are an engaging American English conversation partner. Return JSON.',
            responseMimeType: 'application/json',
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                learnerTranscript: { type: Type.STRING },
                coachingFeedback: { type: Type.ARRAY, items: { type: Type.STRING } },
                coachResponseText: { type: Type.STRING },
                suggestedNextQuestion: { type: Type.STRING }
              },
              required: ['learnerTranscript', 'coachingFeedback', 'coachResponseText', 'suggestedNextQuestion']
            }
          }
        });

        const parsed = JSON.parse(response.text || '{}');
        return new Response(JSON.stringify(parsed), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      if (path === '/api/generate-vocab-lesson') {
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
          return new Response(
            JSON.stringify({ error: 'Word parameter is required for lesson generation.' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        const systemInstruction = `You are a world-class lexicographer, etymologist, and speech coach specializing in English vocabulary acquisition for high-impact communication.
Your task is to generate a comprehensive, highly pedagogical vocabulary lesson for the requested word.

Provide:
1. Pronunciation: IPA, syllable breakdown, primary stress, and natural American English pronunciation notes.
2. Meaning: precise primary definition, secondary sense if applicable, and clear examples.
3. Word Origins: verified language of origin, historical root development, original literal meaning, and modern conceptual connection.
4. Synonyms & Antonyms: at least 3-4 synonyms with nuanced distinctions (intensity, formality, or connotation).
5. Nuanced Contrast / Distinction: compare the target word against 1-2 near-synonyms or easily confused terms with preferred contexts and common mistakes.
6. Collocations & Usage: common verbs, modifiers, prepositions, idiomatic frames, and natural vs awkward contrasts.
7. Morphology: base root and 2-4 derived morphological word forms with POS, definition, example, and stress shift note if applicable.
8. Memory Aids: mnemonics or root breakdown.
9. Practical Examples: exactly 5 varied, high-quality example sentences across Professional/Workplace, Academic & Essay, Journalism & Commentary, Everyday Intellectual, Literature & Rhetoric.
10. Self-Check Quiz: 1 multiple-choice question testing precise context usage or distinction, with 4 options, correctIndex (0-3), and explanation.`;

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

        const response = await ai.models.generateContent({
          model: modelName,
          contents: [{ role: 'user', parts: [{ text: promptText }] }],
          config: {
            systemInstruction,
            responseMimeType: 'application/json',
            responseSchema: lessonSchema,
          },
        });

        const parsed = JSON.parse(response.text?.trim() || '{}');
        if (!parsed.id) parsed.id = wordId || `lesson-${word.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
        if (!parsed.word) parsed.word = word;

        return new Response(JSON.stringify(parsed), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      // Generic handler for remaining endpoints
      const response = await ai.models.generateContent({
        model: modelName,
        contents: [{ role: 'user', parts: [{ text: `Generate structured JSON response for endpoint ${path} with body: ${JSON.stringify(body)}` }] }],
        config: {
          systemInstruction: 'You are an AI speech training assistant. Return valid JSON.',
          responseMimeType: 'application/json'
        }
      });

      const parsed = JSON.parse(response.text || '{}');
      return new Response(JSON.stringify(parsed), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });

    } catch (err: any) {
      return new Response(
        JSON.stringify({ error: err.message || 'Worker processing error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  }
};
