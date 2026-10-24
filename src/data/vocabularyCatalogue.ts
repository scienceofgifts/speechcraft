// Scalable Vocabulary Catalogue Seed with over 1,000 unique curated English words.
// Preserves all 36 detailed lessons from vocabBuilderData.ts with original IDs.
import { VocabularyCatalogueItem } from '../types/speech';

const RAW_CATALOGUE = [
  {
    "id": "lesson-egocentric",
    "word": "egocentric",
    "partOfSpeech": "adjective",
    "definition": "Viewing the self as the center of all things; unable to consider external viewpoints.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Intellectual & Psychological",
      "Rhetoric & Speech"
    ],
    "rootId": "root-ego",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-altruistic",
    "word": "altruistic",
    "partOfSpeech": "adjective",
    "definition": "Showing a selfless concern for the well-being of others.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Ethical, Academic & General Spoken",
      "Rhetoric & Speech"
    ],
    "rootId": "root-alter",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-introvert",
    "word": "introvert",
    "partOfSpeech": "noun / verb",
    "definition": "A person whose attention and mental energy are primarily directed inward.",
    "difficulty": "Foundational",
    "topicTags": [
      "General & Psychological",
      "Rhetoric & Speech"
    ],
    "rootId": "root-vert",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-extrovert",
    "word": "extrovert",
    "partOfSpeech": "noun / adjective",
    "definition": "An outgoing, expressive person whose energy is turned outward.",
    "difficulty": "Foundational",
    "topicTags": [
      "General & Psychological",
      "Rhetoric & Speech"
    ],
    "rootId": "root-vert",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-ambivert",
    "word": "ambivert",
    "partOfSpeech": "noun",
    "definition": "A person with a balance of extroverted and introverted personality features.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychological & Conversational",
      "Rhetoric & Speech"
    ],
    "rootId": "root-vert",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-misanthrope",
    "word": "misanthrope",
    "partOfSpeech": "noun",
    "definition": "A person who dislikes, distrusts, or avoids humankind.",
    "difficulty": "Advanced",
    "topicTags": [
      "Literary & Intellectual",
      "Rhetoric & Speech"
    ],
    "rootId": "root-misein",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-misogynist",
    "word": "misogynist",
    "partOfSpeech": "noun / adjective",
    "definition": "A person who harbors hatred, prejudice, or contempt against women.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Social Science, Legal & Everyday",
      "Rhetoric & Speech"
    ],
    "rootId": "root-misein",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-misogamist",
    "word": "misogamist",
    "partOfSpeech": "noun",
    "definition": "A person who hates, distrusts, or is opposed to marriage.",
    "difficulty": "Mastery",
    "topicTags": [
      "Literary & Scholarly",
      "Rhetoric & Speech"
    ],
    "rootId": "root-misein",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-loquacious",
    "word": "loquacious",
    "partOfSpeech": "adjective",
    "definition": "Tending to talk a great deal; talkative.",
    "difficulty": "Advanced",
    "topicTags": [
      "Formal / Cultivated",
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-taciturn",
    "word": "taciturn",
    "partOfSpeech": "adjective",
    "definition": "Habitually reserved, quiet, and disinclined to speak.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Literary & Formal",
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-garrulous",
    "word": "garrulous",
    "partOfSpeech": "adjective",
    "definition": "Excessively talkative, especially on trivial or rambling matters.",
    "difficulty": "Advanced",
    "topicTags": [
      "Formal / Critical",
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-equivocate",
    "word": "equivocate",
    "partOfSpeech": "verb",
    "definition": "To use ambiguous language intentionally to conceal the truth or avoid committing oneself.",
    "difficulty": "Advanced",
    "topicTags": [
      "Political, Legal & Critical",
      "Rhetoric & Speech"
    ],
    "rootId": "root-dict",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-magnanimous",
    "word": "magnanimous",
    "partOfSpeech": "adjective",
    "definition": "Generous or forgiving, especially toward a rival or someone less powerful.",
    "difficulty": "Advanced",
    "topicTags": [
      "Noble / Formal Rhetoric",
      "Rhetoric & Speech"
    ],
    "rootId": "root-bene",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-benevolent",
    "word": "benevolent",
    "partOfSpeech": "adjective",
    "definition": "Well-meaning, kindly disposed, and charitable.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Formal & General Intellectual",
      "Rhetoric & Speech"
    ],
    "rootId": "root-bene",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-malevolent",
    "word": "malevolent",
    "partOfSpeech": "adjective",
    "definition": "Wishing evil, ill will, or harm upon others.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Literary & Formal",
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-placate",
    "word": "placate",
    "partOfSpeech": "verb",
    "definition": "To make someone less angry, hostile, or aggrieved.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Executive, Political & Everyday",
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-empathy",
    "word": "empathy",
    "partOfSpeech": "noun",
    "definition": "The psychological ability to understand and share the feelings of another.",
    "difficulty": "Intermediate",
    "topicTags": [
      "General Intellectual & Psychological",
      "Rhetoric & Speech"
    ],
    "rootId": "root-path",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-sympathy",
    "word": "sympathy",
    "partOfSpeech": "noun",
    "definition": "Feelings of pity, sorrow, or care for someone else's misfortune.",
    "difficulty": "Foundational",
    "topicTags": [
      "Everyday & Ethical",
      "Rhetoric & Speech"
    ],
    "rootId": "root-path",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-antipathy",
    "word": "antipathy",
    "partOfSpeech": "noun",
    "definition": "A deep-seated, natural feeling of dislike or aversion.",
    "difficulty": "Advanced",
    "topicTags": [
      "Formal & Literary",
      "Rhetoric & Speech"
    ],
    "rootId": "root-path",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-apathy",
    "word": "apathy",
    "partOfSpeech": "noun",
    "definition": "Lack of interest, enthusiasm, or emotional concern.",
    "difficulty": "Intermediate",
    "topicTags": [
      "General Intellectual & Civic",
      "Rhetoric & Speech"
    ],
    "rootId": "root-path",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-ephemeral",
    "word": "ephemeral",
    "partOfSpeech": "adjective",
    "definition": "Lasting for only a very brief, fleeting time.",
    "difficulty": "Advanced",
    "topicTags": [
      "Poetic, Intellectual & Critical",
      "Rhetoric & Speech"
    ],
    "rootId": "root-chron",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-gregarious",
    "word": "gregarious",
    "partOfSpeech": "adjective",
    "definition": "Fond of company; sociable; living in herds or flocks.",
    "difficulty": "Intermediate",
    "topicTags": [
      "General Intellectual & Biological",
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-pragmatic",
    "word": "pragmatic",
    "partOfSpeech": "adjective",
    "definition": "Dealing with things sensibly and realistically based on practical results.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Executive, Political & Philosophical",
      "Rhetoric & Speech"
    ],
    "rootId": "root-ced",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-meticulous",
    "word": "meticulous",
    "partOfSpeech": "adjective",
    "definition": "Showing great attention to detail; very careful and precise.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Professional, Scientific & General",
      "Rhetoric & Speech"
    ],
    "rootId": "root-sci",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-supercilious",
    "word": "supercilious",
    "partOfSpeech": "adjective",
    "definition": "Behaving or looking as though one thinks one is superior to others; disdainful.",
    "difficulty": "Advanced",
    "topicTags": [
      "Literary & Critical",
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-intractable",
    "word": "intractable",
    "partOfSpeech": "adjective",
    "definition": "Hard to control, manage, resolve, or discipline; stubborn.",
    "difficulty": "Advanced",
    "topicTags": [
      "Medical, Political & Intellectual",
      "Rhetoric & Speech"
    ],
    "rootId": "root-tract",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-perfunctory",
    "word": "perfunctory",
    "partOfSpeech": "adjective",
    "definition": "Carried out with minimal effort, care, or enthusiasm; routine.",
    "difficulty": "Advanced",
    "topicTags": [
      "Formal / Critical Evaluation",
      "Rhetoric & Speech"
    ],
    "rootId": "root-ced",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-delineate",
    "word": "delineate",
    "partOfSpeech": "verb",
    "definition": "To describe, portray, or outline with precision and detail.",
    "difficulty": "Advanced",
    "topicTags": [
      "Academic, Strategic & Legal",
      "Rhetoric & Speech"
    ],
    "rootId": "root-scrib",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-disparage",
    "word": "disparage",
    "partOfSpeech": "verb",
    "definition": "To speak of or treat with disrespect; to belittle.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Formal, Professional & Legal",
      "Rhetoric & Speech"
    ],
    "rootId": "root-alter",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-emulate",
    "word": "emulate",
    "partOfSpeech": "verb",
    "definition": "To match or surpass, typically by imitation.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Professional, Technical & Literary",
      "Rhetoric & Speech"
    ],
    "rootId": "root-vert",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-exonerate",
    "word": "exonerate",
    "partOfSpeech": "verb",
    "definition": "To officially clear from blame or a charge of wrongdoing.",
    "difficulty": "Advanced",
    "topicTags": [
      "Legal, Formal & Public Inquiry",
      "Rhetoric & Speech"
    ],
    "rootId": "root-ced",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-ubiquitous",
    "word": "ubiquitous",
    "partOfSpeech": "adjective",
    "definition": "Present, appearing, or found everywhere.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Academic, Journalism & Tech",
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-fastidious",
    "word": "fastidious",
    "partOfSpeech": "adjective",
    "definition": "Very attentive to and concerned about accuracy and detail; hard to please.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Formal / Descriptive",
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-extrapolate",
    "word": "extrapolate",
    "partOfSpeech": "verb",
    "definition": "To infer or project unknown facts from known data.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Analytical, Scientific & Executive",
      "Rhetoric & Speech"
    ],
    "rootId": "root-ced",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-synthesize",
    "word": "synthesize",
    "partOfSpeech": "verb",
    "definition": "To combine a range of things into a coherent whole.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Intellectual, Scientific & Executive",
      "Rhetoric & Speech"
    ],
    "rootId": "root-path",
    "hasDetailedLesson": true
  },
  {
    "id": "lesson-anomaly",
    "word": "anomaly",
    "partOfSpeech": "noun",
    "definition": "Something that deviates from what is standard, normal, or expected.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Scientific, Statistical & General Intellectual",
      "Rhetoric & Speech"
    ],
    "rootId": "root-chron",
    "hasDetailedLesson": true
  },
  {
    "id": "cat-37",
    "word": "egotist",
    "partOfSpeech": "noun",
    "definition": "A person who talks boastfully about themselves constantly",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-ego",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-38",
    "word": "egoist",
    "partOfSpeech": "noun",
    "definition": "A person whose actions are governed strictly by self-interest",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-ego",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-39",
    "word": "egomania",
    "partOfSpeech": "noun",
    "definition": "Morbid or obsessive self-preoccupation",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-ego",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-40",
    "word": "alter ego",
    "partOfSpeech": "noun",
    "definition": "A second self or trusted other self",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-ego",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-41",
    "word": "alteration",
    "partOfSpeech": "noun",
    "definition": "A change making something other than what it was",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-alter",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-42",
    "word": "altercation",
    "partOfSpeech": "noun",
    "definition": "A noisy heated dispute with another person",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-alter",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-43",
    "word": "alternate",
    "partOfSpeech": "adjective",
    "definition": "To take turns or succeed in turns",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-alter",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-44",
    "word": "alternative",
    "partOfSpeech": "adjective",
    "definition": "A choice between other possibilities",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-alter",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-45",
    "word": "aversion",
    "partOfSpeech": "noun",
    "definition": "A turning away from something with distaste",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-vert",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-46",
    "word": "subversive",
    "partOfSpeech": "adjective",
    "definition": "Seeking to turn under or overthrow established authority",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-vert",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-47",
    "word": "misology",
    "partOfSpeech": "noun",
    "definition": "A hatred of reason, argument, or intellectual debate",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-misein",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-48",
    "word": "misocapnist",
    "partOfSpeech": "noun",
    "definition": "A person who hates tobacco smoke",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-misein",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-49",
    "word": "philanthropy",
    "partOfSpeech": "noun",
    "definition": "Love of humanity demonstrated through benevolent action",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-anthropos",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-50",
    "word": "anthropology",
    "partOfSpeech": "noun",
    "definition": "The scientific study of human origins and societies",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-anthropos",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-51",
    "word": "anthropocentric",
    "partOfSpeech": "adjective",
    "definition": "Regarding humanity as central or paramount",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-anthropos",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-52",
    "word": "anthropomorphic",
    "partOfSpeech": "adjective",
    "definition": "Ascribing human form or traits to non-human things",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-anthropos",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-53",
    "word": "pathological",
    "partOfSpeech": "adjective",
    "definition": "Involving or caused by a physical or mental disease",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-path",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-54",
    "word": "chronic",
    "partOfSpeech": "adjective",
    "definition": "Persisting for a long time or constantly recurring",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-chron",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-55",
    "word": "chronology",
    "partOfSpeech": "noun",
    "definition": "Arrangement of events or dates in order of occurrence",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-chron",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-56",
    "word": "anachronism",
    "partOfSpeech": "noun",
    "definition": "A thing belonging to a period other than that in which it exists",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-chron",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-57",
    "word": "synchronize",
    "partOfSpeech": "verb",
    "definition": "Cause to occur or operate at the same time",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-chron",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-58",
    "word": "chronometer",
    "partOfSpeech": "noun",
    "definition": "An instrument for measuring time with exceptional accuracy",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-chron",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-59",
    "word": "biography",
    "partOfSpeech": "noun",
    "definition": "An account of a person's life written by another",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-graph",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-60",
    "word": "telegraph",
    "partOfSpeech": "verb",
    "definition": "A system for transmitting messages from a distance",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-graph",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-61",
    "word": "autograph",
    "partOfSpeech": "verb",
    "definition": "A signature or manuscript in author's own handwriting",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-graph",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-62",
    "word": "diagram",
    "partOfSpeech": "noun",
    "definition": "A simplified drawing showing appearance or structure",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-graph",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-63",
    "word": "monograph",
    "partOfSpeech": "noun",
    "definition": "A detailed written study of a single specialized subject",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-graph",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-64",
    "word": "contradict",
    "partOfSpeech": "verb",
    "definition": "Assert the opposite of a statement made by someone",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-dict",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-65",
    "word": "predict",
    "partOfSpeech": "verb",
    "definition": "Say or estimate that a specified thing will happen in future",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-dict",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-66",
    "word": "verdict",
    "partOfSpeech": "noun",
    "definition": "A decision or opinion rendered on a disputed issue",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-dict",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-67",
    "word": "diction",
    "partOfSpeech": "noun",
    "definition": "Choice and use of words in speech or writing",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-dict",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-68",
    "word": "indictment",
    "partOfSpeech": "noun",
    "definition": "A formal legal charge or accusation of a serious crime",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-dict",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-69",
    "word": "advocate",
    "partOfSpeech": "verb",
    "definition": "A person who publicly supports or calls for a cause",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-voc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-70",
    "word": "vocation",
    "partOfSpeech": "noun",
    "definition": "A strong feeling of suitability for a career or calling",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-voc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-71",
    "word": "provocative",
    "partOfSpeech": "adjective",
    "definition": "Causing annoyance, anger, or another strong reaction",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-voc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-72",
    "word": "irrevocable",
    "partOfSpeech": "adjective",
    "definition": "Not able to be changed, reversed, or called back",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-voc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-73",
    "word": "introspection",
    "partOfSpeech": "noun",
    "definition": "Examination of one's own conscious thoughts and feelings",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-spect",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-74",
    "word": "circumspect",
    "partOfSpeech": "adjective",
    "definition": "Wary and unwilling to take risks; looking around carefully",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-spect",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-75",
    "word": "perspective",
    "partOfSpeech": "noun",
    "definition": "A particular attitude toward or way of regarding something",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-spect",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-76",
    "word": "conspicuous",
    "partOfSpeech": "adjective",
    "definition": "Standing out so as to be clearly visible",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-spect",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-77",
    "word": "retrospect",
    "partOfSpeech": "verb",
    "definition": "A survey or review of a past course of events",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-spect",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-78",
    "word": "logic",
    "partOfSpeech": "noun",
    "definition": "Reasoning conducted according to strict principles",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-log",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-79",
    "word": "epilogue",
    "partOfSpeech": "noun",
    "definition": "A section at the end of a book or play serving as a conclusion",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-log",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-80",
    "word": "apology",
    "partOfSpeech": "noun",
    "definition": "A expression of regret or formal defense of an action",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-log",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-81",
    "word": "dialogue",
    "partOfSpeech": "noun",
    "definition": "Conversation between two or more people",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-log",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-82",
    "word": "subconscious",
    "partOfSpeech": "adjective",
    "definition": "Operating below the threshold of conscious awareness",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-sub",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-83",
    "word": "subordinate",
    "partOfSpeech": "adjective",
    "definition": "Lower in rank, position, or importance",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-sub",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-84",
    "word": "succumb",
    "partOfSpeech": "verb",
    "definition": "Fail to resist pressure, temptation, or negative force",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-sub",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-85",
    "word": "subtle",
    "partOfSpeech": "adjective",
    "definition": "Delicate, understated, or difficult to analyze or detect",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-sub",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-86",
    "word": "transient",
    "partOfSpeech": "adjective",
    "definition": "Lasting only for a short time; impermanent",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-trans",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-87",
    "word": "transcendent",
    "partOfSpeech": "adjective",
    "definition": "Going beyond ordinary limits or human experience",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-trans",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-88",
    "word": "transgress",
    "partOfSpeech": "verb",
    "definition": "Go beyond the bounds of a moral principle or rule",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-trans",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-89",
    "word": "translucent",
    "partOfSpeech": "adjective",
    "definition": "Allowing light to pass through, but not detailed shapes",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-trans",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-90",
    "word": "transform",
    "partOfSpeech": "verb",
    "definition": "Make a thorough or dramatic change in form or appearance",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-trans",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-91",
    "word": "intervene",
    "partOfSpeech": "verb",
    "definition": "Come between dispute or event in order to prevent or alter result",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "prefix-inter",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-92",
    "word": "intermittent",
    "partOfSpeech": "adjective",
    "definition": "Occurring at irregular intervals; not continuous",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "prefix-inter",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-93",
    "word": "intersect",
    "partOfSpeech": "verb",
    "definition": "Pass through or cross two or more lines or paths",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "prefix-inter",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-94",
    "word": "interpersonal",
    "partOfSpeech": "adjective",
    "definition": "Relating to relationships or communication between people",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "prefix-inter",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-95",
    "word": "interlude",
    "partOfSpeech": "noun",
    "definition": "An intervening period of time or brief musical break",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "prefix-inter",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-96",
    "word": "synergy",
    "partOfSpeech": "noun",
    "definition": "Combined effect greater than the sum of separate parts",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "prefix-syn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-97",
    "word": "symphony",
    "partOfSpeech": "noun",
    "definition": "An elaborate musical composition for full orchestra",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "prefix-syn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-98",
    "word": "symbiosis",
    "partOfSpeech": "noun",
    "definition": "Interaction between two different organisms living together",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "prefix-syn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-99",
    "word": "synonym",
    "partOfSpeech": "noun",
    "definition": "A word having the same or nearly same meaning as another",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "prefix-syn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-100",
    "word": "antidote",
    "partOfSpeech": "noun",
    "definition": "A medicine taken to counteract a particular poison",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "prefix-anti",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-101",
    "word": "antagonist",
    "partOfSpeech": "noun",
    "definition": "A person who actively opposes or competes with another",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "prefix-anti",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-102",
    "word": "antithesis",
    "partOfSpeech": "noun",
    "definition": "A person or thing that is the direct opposite of another",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "prefix-anti",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-103",
    "word": "antibiotic",
    "partOfSpeech": "noun",
    "definition": "A medicine that inhibits or destroys microorganisms",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "prefix-anti",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-104",
    "word": "deference",
    "partOfSpeech": "noun",
    "definition": "Humble submission and respect toward an elder or authority",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-fer",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-105",
    "word": "proliferate",
    "partOfSpeech": "verb",
    "definition": "Increase rapidly in numbers; multiply",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-fer",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-106",
    "word": "fertile",
    "partOfSpeech": "adjective",
    "definition": "Producing or capable of producing abundant vegetation or offspring",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-fer",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-107",
    "word": "inference",
    "partOfSpeech": "noun",
    "definition": "A conclusion reached on the basis of evidence and reasoning",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-fer",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-108",
    "word": "transferable",
    "partOfSpeech": "adjective",
    "definition": "Able to be moved or passed from one place or person to another",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-fer",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-109",
    "word": "perceptive",
    "partOfSpeech": "adjective",
    "definition": "Having or showing keen insight and sensitive understanding",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-cap",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-110",
    "word": "capacity",
    "partOfSpeech": "noun",
    "definition": "The maximum amount that something can contain or produce",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-cap",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-111",
    "word": "incipient",
    "partOfSpeech": "adjective",
    "definition": "In an initial stage; beginning to happen or develop",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-cap",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-112",
    "word": "susceptible",
    "partOfSpeech": "adjective",
    "definition": "Likely or liable to be influenced or harmed by something",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-cap",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-113",
    "word": "captivate",
    "partOfSpeech": "verb",
    "definition": "Attract and hold the interest and attention of; charm",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-cap",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-114",
    "word": "abstract",
    "partOfSpeech": "adjective",
    "definition": "Existing in thought or as an idea but not having a physical existence",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-tract",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-115",
    "word": "detract",
    "partOfSpeech": "verb",
    "definition": "Diminish the worth or value of a quality or achievement",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-tract",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-116",
    "word": "protracted",
    "partOfSpeech": "adjective",
    "definition": "Lasting for a long time or longer than expected; drawn out",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-tract",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-117",
    "word": "retract",
    "partOfSpeech": "verb",
    "definition": "Draw back or back in; withdraw a statement or promise",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-tract",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-118",
    "word": "juxtapose",
    "partOfSpeech": "verb",
    "definition": "Place or deal with close together for contrasting effect",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-pos",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-119",
    "word": "component",
    "partOfSpeech": "noun",
    "definition": "A constituent part or element of a larger whole",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-pos",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-120",
    "word": "postpone",
    "partOfSpeech": "verb",
    "definition": "Cause or arrange for something to take place at a time later than scheduled",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-pos",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-121",
    "word": "disposition",
    "partOfSpeech": "noun",
    "definition": "A person's inherent qualities of mind and character",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-pos",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-122",
    "word": "imposition",
    "partOfSpeech": "noun",
    "definition": "An unfair or unwelcome demand or burden put upon someone",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-pos",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-123",
    "word": "congenial",
    "partOfSpeech": "adjective",
    "definition": "Pleasant or agreeable because of suited tastes or inclinations",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-gen",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-124",
    "word": "genealogy",
    "partOfSpeech": "noun",
    "definition": "A line of descent traced continuously from an ancestor",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-gen",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-125",
    "word": "homogenous",
    "partOfSpeech": "adjective",
    "definition": "Of the same kind; alike in structure or composition",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-gen",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-126",
    "word": "generate",
    "partOfSpeech": "verb",
    "definition": "Cause something to arise or come into being",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-gen",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-127",
    "word": "endigenous",
    "partOfSpeech": "adjective",
    "definition": "Originating or occurring naturally in a particular place; native",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-gen",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-128",
    "word": "recapitulate",
    "partOfSpeech": "verb",
    "definition": "Summarize and state again the main points of",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-capit",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-129",
    "word": "decapitate",
    "partOfSpeech": "verb",
    "definition": "Cut off the head of a person or animal",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-capit",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-130",
    "word": "capitalism",
    "partOfSpeech": "noun",
    "definition": "Economic system based on private ownership of capital assets",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-capit",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-131",
    "word": "precipitous",
    "partOfSpeech": "adjective",
    "definition": "Dangerously high or steep; headlong and hasty",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-capit",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-132",
    "word": "capitulate",
    "partOfSpeech": "verb",
    "definition": "Surrender or cease resisting an opponent under agreed terms",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-capit",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-133",
    "word": "unremitting",
    "partOfSpeech": "adjective",
    "definition": "Never relaxing or slackening; incessant and unrelenting",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-mit",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-134",
    "word": "remittance",
    "partOfSpeech": "noun",
    "definition": "A sum of money sent in payment or as a gift",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-mit",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-135",
    "word": "missile",
    "partOfSpeech": "noun",
    "definition": "An object which is forcibly propelled at a target",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-mit",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-136",
    "word": "premise",
    "partOfSpeech": "noun",
    "definition": "A previous statement from which another is inferred",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-mit",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-137",
    "word": "delineation",
    "partOfSpeech": "noun",
    "definition": "The action of describing or portraying something precisely",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "suffix-tion",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-138",
    "word": "exoneration",
    "partOfSpeech": "noun",
    "definition": "The action of official clearing from blame or guilt",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "suffix-tion",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-139",
    "word": "extrapolation",
    "partOfSpeech": "noun",
    "definition": "The act of estimating unknown values by projecting trends",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "suffix-tion",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-140",
    "word": "isolation",
    "partOfSpeech": "noun",
    "definition": "The state of being separated from others",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "suffix-tion",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-141",
    "word": "precision",
    "partOfSpeech": "noun",
    "definition": "The quality or state of being exact and accurate",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "suffix-tion",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-142",
    "word": "plausible",
    "partOfSpeech": "adjective",
    "definition": "Seeming reasonable or probable; deserving applause",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "suffix-able",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-143",
    "word": "palpable",
    "partOfSpeech": "adjective",
    "definition": "Able to be touched or felt; intense and plain to see",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "suffix-able",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-144",
    "word": "malleable",
    "partOfSpeech": "adjective",
    "definition": "Capable of being shaped or influenced easily",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "suffix-able",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-145",
    "word": "resilient",
    "partOfSpeech": "adjective",
    "definition": "Able to withstand or recover quickly from difficult conditions",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-re",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-146",
    "word": "recidivism",
    "partOfSpeech": "noun",
    "definition": "The tendency of a convicted criminal to reoffend",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-re",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-147",
    "word": "rebuttal",
    "partOfSpeech": "noun",
    "definition": "A refutation or counterargument in a debate",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-re",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-148",
    "word": "reiterate",
    "partOfSpeech": "verb",
    "definition": "Say something again or a number of times for emphasis",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-re",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-149",
    "word": "audible",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to hear, listen",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-aud",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-150",
    "word": "auditorium",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to hear, listen",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-aud",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-151",
    "word": "audition",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from aud / audit",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-aud",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-152",
    "word": "auditory",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of aud / audit",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-aud",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-153",
    "word": "inaudible",
    "partOfSpeech": "verb",
    "definition": "Extended application of aud / audit",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-aud",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-154",
    "word": "autonomy",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying self, same, one's own",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-auto",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-155",
    "word": "autobiography",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing self, same, one's own",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-auto",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-156",
    "word": "autocrat",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from auto-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-auto",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-157",
    "word": "automaton",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of auto-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-auto",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-158",
    "word": "authentic",
    "partOfSpeech": "verb",
    "definition": "Extended application of auto-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-auto",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-159",
    "word": "biology",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing life, living organisms",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-bio",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-160",
    "word": "biome",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of bio-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-bio",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-161",
    "word": "biodegradable",
    "partOfSpeech": "verb",
    "definition": "Extended application of bio-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-bio",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-162",
    "word": "precede",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to go, yield, surrender",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-ced",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-163",
    "word": "recede",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to go, yield, surrender",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-ced",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-164",
    "word": "concede",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from ced / cess",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-ced",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-165",
    "word": "unprecedented",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of ced / cess",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-ced",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-166",
    "word": "cessation",
    "partOfSpeech": "verb",
    "definition": "Extended application of ced / cess",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-ced",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-167",
    "word": "chronological",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying relating to time or duration",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-chron-2",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-168",
    "word": "anachronistic",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from chrono-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-chron-2",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-169",
    "word": "chronicle",
    "partOfSpeech": "verb",
    "definition": "Extended application of chrono-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-chron-2",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-170",
    "word": "concise",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to cut, kill, slay",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-cid",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-171",
    "word": "incision",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to cut, kill, slay",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-cid",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-172",
    "word": "decisive",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from cid / cis",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-cid",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-173",
    "word": "fratricide",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of cid / cis",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-cid",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-174",
    "word": "pesticide",
    "partOfSpeech": "verb",
    "definition": "Extended application of cid / cis",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-cid",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-175",
    "word": "acclaim",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to shout, call out, declare",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-claim",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-176",
    "word": "declaim",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to shout, call out, declare",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-claim",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-177",
    "word": "exclamation",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from claim / clam",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-claim",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-178",
    "word": "clamor",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of claim / clam",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-claim",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-179",
    "word": "reclaim",
    "partOfSpeech": "verb",
    "definition": "Extended application of claim / clam",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-claim",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-180",
    "word": "cognitive",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to know, recognize, learn",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-cogn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-181",
    "word": "incognito",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to know, recognize, learn",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-cogn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-182",
    "word": "prognosis",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from cogn / gnos",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-cogn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-183",
    "word": "cognizant",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of cogn / gnos",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-cogn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-184",
    "word": "diagnosis",
    "partOfSpeech": "verb",
    "definition": "Extended application of cogn / gnos",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-cogn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-185",
    "word": "corporeal",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying body, substance",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-corp",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-186",
    "word": "corporation",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing body, substance",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-corp",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-187",
    "word": "corpse",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from corp",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-corp",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-188",
    "word": "corpulent",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of corp",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-corp",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-189",
    "word": "incorporate",
    "partOfSpeech": "verb",
    "definition": "Extended application of corp",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-corp",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-190",
    "word": "credible",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to believe, trust, rely",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-cred",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-191",
    "word": "credulous",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to believe, trust, rely",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-cred",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-192",
    "word": "incredulous",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from cred",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-cred",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-193",
    "word": "creed",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of cred",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-cred",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-194",
    "word": "credenza",
    "partOfSpeech": "verb",
    "definition": "Extended application of cred",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-cred",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-195",
    "word": "cursory",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to run, flow, course",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-cur",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-196",
    "word": "precursor",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to run, flow, course",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-cur",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-197",
    "word": "concur",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from cur / curs",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-cur",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-198",
    "word": "recurrence",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of cur / curs",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-cur",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-199",
    "word": "discursive",
    "partOfSpeech": "verb",
    "definition": "Extended application of cur / curs",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-cur",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-200",
    "word": "democracy",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying people, populace",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-dem",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-201",
    "word": "demographic",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing people, populace",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-dem",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-202",
    "word": "demagogue",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from dem / demo",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-dem",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-203",
    "word": "epidemic",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of dem / demo",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-dem",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-204",
    "word": "endemic",
    "partOfSpeech": "verb",
    "definition": "Extended application of dem / demo",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-dem",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-205",
    "word": "docile",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to teach, show, guide",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-doc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-206",
    "word": "indoctrinate",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to teach, show, guide",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-doc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-207",
    "word": "doctrine",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from doc / doct",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-doc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-208",
    "word": "documentary",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of doc / doct",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-doc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-209",
    "word": "doctorate",
    "partOfSpeech": "verb",
    "definition": "Extended application of doc / doct",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-doc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-210",
    "word": "conducive",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to lead, guide, bring forward",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-duc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-211",
    "word": "deduce",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to lead, guide, bring forward",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-duc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-212",
    "word": "seduce",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from duc / duct",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-duc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-213",
    "word": "induce",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of duc / duct",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-duc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-214",
    "word": "traduce",
    "partOfSpeech": "verb",
    "definition": "Extended application of duc / duct",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-duc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-215",
    "word": "facilitate",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to make, do, cause",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-fac",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-216",
    "word": "factotum",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to make, do, cause",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-fac",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-217",
    "word": "beneficent",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from fac / fec / fic",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-fac",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-218",
    "word": "efficacious",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of fac / fec / fic",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-fac",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-219",
    "word": "factitious",
    "partOfSpeech": "verb",
    "definition": "Extended application of fac / fec / fic",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-fac",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-220",
    "word": "fluid",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to flow, stream",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-flu",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-221",
    "word": "affluent",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to flow, stream",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-flu",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-222",
    "word": "superfluous",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from flu / flux",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-flu",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-223",
    "word": "flux",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of flu / flux",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-flu",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-224",
    "word": "influx",
    "partOfSpeech": "verb",
    "definition": "Extended application of flu / flux",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-flu",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-225",
    "word": "conform",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying shape, structure, appearance",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-form",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-226",
    "word": "deformity",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing shape, structure, appearance",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-form",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-227",
    "word": "formative",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from form",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-form",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-228",
    "word": "reform",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of form",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-form",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-229",
    "word": "formulaic",
    "partOfSpeech": "verb",
    "definition": "Extended application of form",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-form",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-230",
    "word": "fortitude",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying strong, brave, power",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-fort",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-231",
    "word": "fortify",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing strong, brave, power",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-fort",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-232",
    "word": "forceful",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from fort / forc",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-fort",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-233",
    "word": "comfort",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of fort / forc",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-fort",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-234",
    "word": "fortuitous",
    "partOfSpeech": "verb",
    "definition": "Extended application of fort / forc",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-fort",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-235",
    "word": "diffuse",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to pour, melt, spread",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-fus",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-236",
    "word": "profuse",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to pour, melt, spread",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-fus",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-237",
    "word": "effusive",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from fus / fund",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-fus",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-238",
    "word": "confound",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of fus / fund",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-fus",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-239",
    "word": "fusion",
    "partOfSpeech": "verb",
    "definition": "Extended application of fus / fund",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-fus",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-240",
    "word": "geology",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying earth, land, soil",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-geo",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-241",
    "word": "geopolitics",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing earth, land, soil",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-geo",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-242",
    "word": "geocentric",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from geo-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-geo",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-243",
    "word": "geometry",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of geo-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-geo",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-244",
    "word": "geothermal",
    "partOfSpeech": "verb",
    "definition": "Extended application of geo-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-geo",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-245",
    "word": "digress",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to step, walk, go forward",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-grad",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-246",
    "word": "gradual",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to step, walk, go forward",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-grad",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-247",
    "word": "retrogression",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of grad / gress",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-grad",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-248",
    "word": "eclipsed",
    "partOfSpeech": "verb",
    "definition": "Extended application of grad / gress",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-grad",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-249",
    "word": "gratitude",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying pleasing, thankful, favor",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-grat",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-250",
    "word": "ingratiate",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing pleasing, thankful, favor",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-grat",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-251",
    "word": "gratuitous",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from grat",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-grat",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-252",
    "word": "congratulate",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of grat",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-grat",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-253",
    "word": "gratis",
    "partOfSpeech": "verb",
    "definition": "Extended application of grat",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-grat",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-254",
    "word": "habitat",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to have, hold, dwell",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-hab",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-255",
    "word": "inhibit",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to have, hold, dwell",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-hab",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-256",
    "word": "prohibit",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from hab / hib",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-hab",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-257",
    "word": "habitation",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of hab / hib",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-hab",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-258",
    "word": "rehabilitate",
    "partOfSpeech": "verb",
    "definition": "Extended application of hab / hib",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-hab",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-259",
    "word": "homogeneous",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying same, equal, uniform",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-homo",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-260",
    "word": "homonym",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing same, equal, uniform",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-homo",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-261",
    "word": "homogenize",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of homo-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-homo",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-262",
    "word": "homocentric",
    "partOfSpeech": "verb",
    "definition": "Extended application of homo-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-homo",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-263",
    "word": "heterogeneous",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying different, other, diverse",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-hetero",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-264",
    "word": "heterodox",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing different, other, diverse",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-hetero",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-265",
    "word": "heterogeneity",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from hetero-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-hetero",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-266",
    "word": "heteromorphic",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of hetero-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-hetero",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-267",
    "word": "heteronym",
    "partOfSpeech": "verb",
    "definition": "Extended application of hetero-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-hetero",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-268",
    "word": "hydrate",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying water, liquid",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-hydro",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-269",
    "word": "hydrodynamic",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing water, liquid",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-hydro",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-270",
    "word": "hydrophobic",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from hydro-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-hydro",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-271",
    "word": "hydroelectric",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of hydro-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-hydro",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-272",
    "word": "hydroponics",
    "partOfSpeech": "verb",
    "definition": "Extended application of hydro-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-hydro",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-273",
    "word": "hyperbole",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying over, above, excessive",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-hyper",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-274",
    "word": "hyperactive",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing over, above, excessive",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-hyper",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-275",
    "word": "hypersensitive",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from hyper-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-hyper",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-276",
    "word": "hypertension",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of hyper-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-hyper",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-277",
    "word": "hypercritical",
    "partOfSpeech": "verb",
    "definition": "Extended application of hyper-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-hyper",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-278",
    "word": "hypothesis",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying under, below, deficient",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-hypo",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-279",
    "word": "hypothermia",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing under, below, deficient",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-hypo",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-280",
    "word": "hypochondria",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from hypo-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-hypo",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-281",
    "word": "hypocrisy",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of hypo-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-hypo",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-282",
    "word": "hypothetical",
    "partOfSpeech": "verb",
    "definition": "Extended application of hypo-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-hypo",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-283",
    "word": "conjecture",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to throw, cast, hurl",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-jac",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-284",
    "word": "interject",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to throw, cast, hurl",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-jac",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-285",
    "word": "abject",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from jac / ject",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-jac",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-286",
    "word": "eject",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of jac / ject",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-jac",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-287",
    "word": "trajectory",
    "partOfSpeech": "verb",
    "definition": "Extended application of jac / ject",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-jac",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-288",
    "word": "judicious",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying law, right, judgment",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-jud",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-289",
    "word": "jurisdiction",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing law, right, judgment",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-jud",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-290",
    "word": "perjury",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from jud / jur / jus",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-jud",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-291",
    "word": "adjudicate",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of jud / jur / jus",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-jud",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-292",
    "word": "justify",
    "partOfSpeech": "verb",
    "definition": "Extended application of jud / jur / jus",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-jud",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-293",
    "word": "collaborate",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to work, toil, exertion",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-lab",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-294",
    "word": "laborious",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to work, toil, exertion",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-lab",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-295",
    "word": "elaborate",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from lab / labor",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-lab",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-296",
    "word": "laboratory",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of lab / labor",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-lab",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-297",
    "word": "belabor",
    "partOfSpeech": "verb",
    "definition": "Extended application of lab / labor",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-lab",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-298",
    "word": "legible",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to read, choose, gather",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-leg",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-299",
    "word": "eclectic",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to read, choose, gather",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-leg",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-300",
    "word": "intellectual",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from leg / lect",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-leg",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-301",
    "word": "eligible",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of leg / lect",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-leg",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-302",
    "word": "lecture",
    "partOfSpeech": "verb",
    "definition": "Extended application of leg / lect",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-leg",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-303",
    "word": "levity",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying light in weight, to raise",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-lev",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-304",
    "word": "alleviate",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing light in weight, to raise",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-lev",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-305",
    "word": "elevator",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from lev",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-lev",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-306",
    "word": "leverage",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of lev",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-lev",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-307",
    "word": "levitate",
    "partOfSpeech": "verb",
    "definition": "Extended application of lev",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-lev",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-308",
    "word": "liberal",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying free, open",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-liber",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-309",
    "word": "liberate",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing free, open",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-liber",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-310",
    "word": "libertine",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from liber",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-liber",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-311",
    "word": "deliberate",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of liber",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-liber",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-312",
    "word": "liberty",
    "partOfSpeech": "verb",
    "definition": "Extended application of liber",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-liber",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-313",
    "word": "lucid",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying light, shine, clear",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-luc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-314",
    "word": "elucidate",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing light, shine, clear",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-luc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-315",
    "word": "luminous",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from luc / lum",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-luc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-316",
    "word": "illuminate",
    "partOfSpeech": "verb",
    "definition": "Extended application of luc / lum",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-luc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-317",
    "word": "magnificent",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing great, large, grand",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-magn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-318",
    "word": "magnitude",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from magn / maj",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-magn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-319",
    "word": "magnate",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of magn / maj",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-magn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-320",
    "word": "majestic",
    "partOfSpeech": "verb",
    "definition": "Extended application of magn / maj",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-magn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-321",
    "word": "malicious",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing bad, evil, ill, wrong",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-mal",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-322",
    "word": "malignant",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from mal-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-mal",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-323",
    "word": "malfeasance",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of mal-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-mal",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-324",
    "word": "malediction",
    "partOfSpeech": "verb",
    "definition": "Extended application of mal-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-mal",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-325",
    "word": "beneficiary",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from bene-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-bene",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-326",
    "word": "benign",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of bene-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-bene",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-327",
    "word": "benediction",
    "partOfSpeech": "verb",
    "definition": "Extended application of bene-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-bene",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-328",
    "word": "manipulate",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying hand",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-man",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-329",
    "word": "manuscript",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing hand",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-man",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-330",
    "word": "emancipate",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from man / manu",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-man",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-331",
    "word": "manifest",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of man / manu",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-man",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-332",
    "word": "mandatory",
    "partOfSpeech": "verb",
    "definition": "Extended application of man / manu",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-man",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-333",
    "word": "marine",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying sea, ocean, pool",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-mar",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-334",
    "word": "maritime",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing sea, ocean, pool",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-mar",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-335",
    "word": "submarine",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from mar / mer",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-mar",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-336",
    "word": "marina",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of mar / mer",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-mar",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-337",
    "word": "aquamarine",
    "partOfSpeech": "verb",
    "definition": "Extended application of mar / mer",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-mar",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-338",
    "word": "maternal",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying mother, maternal origin",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-matr",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-339",
    "word": "matriarch",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing mother, maternal origin",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-matr",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-340",
    "word": "matriculate",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from matr / matern",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-matr",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-341",
    "word": "matron",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of matr / matern",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-matr",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-342",
    "word": "matrimony",
    "partOfSpeech": "verb",
    "definition": "Extended application of matr / matern",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-matr",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-343",
    "word": "paternal",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying father, paternal origin",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-patr",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-344",
    "word": "patriarch",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing father, paternal origin",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-patr",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-345",
    "word": "patriot",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from patr / patern",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-patr",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-346",
    "word": "expatriate",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of patr / patern",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-patr",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-347",
    "word": "patronize",
    "partOfSpeech": "verb",
    "definition": "Extended application of patr / patern",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-patr",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-348",
    "word": "mediocre",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying middle, central",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-medi",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-349",
    "word": "mediate",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing middle, central",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-medi",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-350",
    "word": "medium",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from medi",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-medi",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-351",
    "word": "medieval",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of medi",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-medi",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-352",
    "word": "intermediate",
    "partOfSpeech": "verb",
    "definition": "Extended application of medi",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-medi",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-353",
    "word": "reminisce",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying mindful, to remember",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-mem",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-354",
    "word": "memorandum",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing mindful, to remember",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-mem",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-355",
    "word": "commemorate",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from mem / reminis",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-mem",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-356",
    "word": "memoir",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of mem / reminis",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-mem",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-357",
    "word": "immemorial",
    "partOfSpeech": "verb",
    "definition": "Extended application of mem / reminis",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-mem",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-358",
    "word": "barometer",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying measure, instrument",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-meter",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-359",
    "word": "asymmetry",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing measure, instrument",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-meter",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-360",
    "word": "parameter",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from meter / metr",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-meter",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-361",
    "word": "metric",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of meter / metr",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-meter",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-362",
    "word": "microcosm",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying small, minute, detailed",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-micro",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-363",
    "word": "microscopic",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing small, minute, detailed",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-micro",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-364",
    "word": "microbiology",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from micro-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-micro",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-365",
    "word": "microbe",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of micro-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-micro",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-366",
    "word": "microchip",
    "partOfSpeech": "verb",
    "definition": "Extended application of micro-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-micro",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-367",
    "word": "macrocosm",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying large, long, broad",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-macro",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-368",
    "word": "macroeconomics",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing large, long, broad",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-macro",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-369",
    "word": "macroscopic",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from macro-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-macro",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-370",
    "word": "macromodule",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of macro-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-macro",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-371",
    "word": "macrobiotic",
    "partOfSpeech": "verb",
    "definition": "Extended application of macro-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-macro",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-372",
    "word": "migrate",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to wander, move places",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-migr",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-373",
    "word": "emigrate",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to wander, move places",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-migr",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-374",
    "word": "immigrant",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from migr",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-migr",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-375",
    "word": "migratory",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of migr",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-migr",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-376",
    "word": "transmigration",
    "partOfSpeech": "verb",
    "definition": "Extended application of migr",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-migr",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-377",
    "word": "amorphous",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying form, shape, structure",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-morph",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-378",
    "word": "morphology",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing form, shape, structure",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-morph",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-379",
    "word": "metamorphosis",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from morph",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-morph",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-380",
    "word": "polymorphic",
    "partOfSpeech": "verb",
    "definition": "Extended application of morph",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-morph",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-381",
    "word": "mortality",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying death, mortal",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-mort",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-382",
    "word": "immortal",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing death, mortal",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-mort",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-383",
    "word": "mortify",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from mort / mor",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-mort",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-384",
    "word": "morbid",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of mort / mor",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-mort",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-385",
    "word": "postmortem",
    "partOfSpeech": "verb",
    "definition": "Extended application of mort / mor",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-mort",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-386",
    "word": "immutable",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to change, alter, exchange",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-mut",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-387",
    "word": "mutation",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to change, alter, exchange",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-mut",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-388",
    "word": "permutation",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from mut",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-mut",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-389",
    "word": "transmute",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of mut",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-mut",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-390",
    "word": "mutual",
    "partOfSpeech": "verb",
    "definition": "Extended application of mut",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-mut",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-391",
    "word": "nascent",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying born, birth, nature",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-nat",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-392",
    "word": "innate",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing born, birth, nature",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-nat",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-393",
    "word": "native",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from nat / nasc",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-nat",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-394",
    "word": "cognate",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of nat / nasc",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-nat",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-395",
    "word": "renaissance",
    "partOfSpeech": "verb",
    "definition": "Extended application of nat / nasc",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-nat",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-396",
    "word": "anonymous",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing name, word, law, order",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-nom",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-397",
    "word": "pseudonym",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from nom / nym",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-nom",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-398",
    "word": "nominal",
    "partOfSpeech": "verb",
    "definition": "Extended application of nom / nym",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-nom",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-399",
    "word": "novel",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying new, fresh, recent",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-nov",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-400",
    "word": "innovate",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing new, fresh, recent",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-nov",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-401",
    "word": "novice",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from nov",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-nov",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-402",
    "word": "renovate",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of nov",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-nov",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-403",
    "word": "novelty",
    "partOfSpeech": "verb",
    "definition": "Extended application of nov",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-nov",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-404",
    "word": "omniscient",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying all, every, total",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-omni",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-405",
    "word": "omnipotent",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing all, every, total",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-omni",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-406",
    "word": "omnipresent",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from omni-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-omni",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-407",
    "word": "omnivore",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of omni-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-omni",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-408",
    "word": "omnibus",
    "partOfSpeech": "verb",
    "definition": "Extended application of omni-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-omni",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-409",
    "word": "panacea",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying all, whole, entire",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-pan",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-410",
    "word": "pandemonium",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing all, whole, entire",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-pan",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-411",
    "word": "panoramic",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from pan-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-pan",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-412",
    "word": "pantheon",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of pan-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-pan",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-413",
    "word": "pandemic",
    "partOfSpeech": "verb",
    "definition": "Extended application of pan-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-pan",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-414",
    "word": "compassion",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to suffer, endure, bear",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-pater",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-415",
    "word": "patient",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to suffer, endure, bear",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-pater",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-416",
    "word": "passive",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from pass / pati",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-pater",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-417",
    "word": "impassioned",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of pass / pati",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-pater",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-418",
    "word": "dispassionate",
    "partOfSpeech": "verb",
    "definition": "Extended application of pass / pati",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-pater",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-419",
    "word": "pedagogy",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying child, instruction, foot",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-ped",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-420",
    "word": "pediatric",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing child, instruction, foot",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-ped",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-421",
    "word": "pedestrian",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from ped / pod",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-ped",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-422",
    "word": "tripod",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of ped / pod",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-ped",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-423",
    "word": "expedite",
    "partOfSpeech": "verb",
    "definition": "Extended application of ped / pod",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-ped",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-424",
    "word": "compel",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to drive, push, impel",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-pel",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-425",
    "word": "repulsion",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to drive, push, impel",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-pel",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-426",
    "word": "impulse",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from pel / puls",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-pel",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-427",
    "word": "expel",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of pel / puls",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-pel",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-428",
    "word": "propulsion",
    "partOfSpeech": "verb",
    "definition": "Extended application of pel / puls",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-pel",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-429",
    "word": "impending",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to hang, weigh, pay",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-pend",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-430",
    "word": "pensive",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to hang, weigh, pay",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-pend",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-431",
    "word": "appendage",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from pend / pens",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-pend",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-432",
    "word": "dispense",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of pend / pens",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-pend",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-433",
    "word": "compense",
    "partOfSpeech": "verb",
    "definition": "Extended application of pend / pens",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-pend",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-434",
    "word": "philosophy",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying love, affinity, fondness",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-phil",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-435",
    "word": "bibliophile",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from phil / philo",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-phil",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-436",
    "word": "philharmonic",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of phil / philo",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-phil",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-437",
    "word": "philology",
    "partOfSpeech": "verb",
    "definition": "Extended application of phil / philo",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-phil",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-438",
    "word": "cacophony",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying sound, voice, tone",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-phon",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-439",
    "word": "euphony",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing sound, voice, tone",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-phon",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-440",
    "word": "phonetics",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from phon",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-phon",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-441",
    "word": "phonograph",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of phon",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-phon",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-442",
    "word": "polyglot",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying many, several, much",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-poly",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-443",
    "word": "polygon",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing many, several, much",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-poly",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-444",
    "word": "polygamy",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from poly-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-poly",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-445",
    "word": "polymath",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of poly-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-poly",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-446",
    "word": "polymer",
    "partOfSpeech": "verb",
    "definition": "Extended application of poly-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-poly",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-447",
    "word": "monologue",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying one, single, alone",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-mono",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-448",
    "word": "monopoly",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing one, single, alone",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-mono",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-449",
    "word": "monotonous",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from mono-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-mono",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-450",
    "word": "monolithic",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of mono-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-mono",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-451",
    "word": "monotheism",
    "partOfSpeech": "verb",
    "definition": "Extended application of mono-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-mono",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-452",
    "word": "deportment",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to carry, gate, portal",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-port",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-453",
    "word": "import",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to carry, gate, portal",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-port",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-454",
    "word": "portable",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from port",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-port",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-455",
    "word": "opportune",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of port",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-port",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-456",
    "word": "portfolio",
    "partOfSpeech": "verb",
    "definition": "Extended application of port",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-port",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-457",
    "word": "potentate",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing power, able, master",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-pot",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-458",
    "word": "possibility",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from pot / poss",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-pot",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-459",
    "word": "impotent",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of pot / poss",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-pot",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-460",
    "word": "potential",
    "partOfSpeech": "verb",
    "definition": "Extended application of pot / poss",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-pot",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-461",
    "word": "psychology",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying mind, soul, spirit",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-psych",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-462",
    "word": "psyche",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing mind, soul, spirit",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-psych",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-463",
    "word": "psychosomatic",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from psych / psycho",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-psych",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-464",
    "word": "psychic",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of psych / psycho",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-psych",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-465",
    "word": "psychopathology",
    "partOfSpeech": "verb",
    "definition": "Extended application of psych / psycho",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-psych",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-466",
    "word": "pugnacious",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to fight, fist, combat",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-pugn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-467",
    "word": "repugnant",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to fight, fist, combat",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-pugn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-468",
    "word": "impugn",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from pugn",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-pugn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-469",
    "word": "pugilist",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of pugn",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-pugn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-470",
    "word": "repugnance",
    "partOfSpeech": "verb",
    "definition": "Extended application of pugn",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-pugn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-471",
    "word": "inquisitive",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to seek, ask, inquire",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-quer",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-472",
    "word": "query",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to seek, ask, inquire",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-quer",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-473",
    "word": "requisite",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from quer / quis / quir",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-quer",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-474",
    "word": "acquisitive",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of quer / quis / quir",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-quer",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-475",
    "word": "perquisite",
    "partOfSpeech": "verb",
    "definition": "Extended application of quer / quis / quir",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-quer",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-476",
    "word": "rectitude",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying straight, right, rule",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-rect",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-477",
    "word": "rectify",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing straight, right, rule",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-rect",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-478",
    "word": "direct",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from rect",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-rect",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-479",
    "word": "correct",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of rect",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-rect",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-480",
    "word": "rectangle",
    "partOfSpeech": "verb",
    "definition": "Extended application of rect",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-rect",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-481",
    "word": "disrupt",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to break, burst, tear",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-rupt",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-482",
    "word": "bankrupt",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to break, burst, tear",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-rupt",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-483",
    "word": "interrupt",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from rupt",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-rupt",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-484",
    "word": "eruption",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of rupt",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-rupt",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-485",
    "word": "incorruptible",
    "partOfSpeech": "verb",
    "definition": "Extended application of rupt",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-rupt",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-486",
    "word": "conscientious",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to know, knowledge",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-sci",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-487",
    "word": "prescient",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to know, knowledge",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-sci",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-488",
    "word": "science",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of sci",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-sci",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-489",
    "word": "nescient",
    "partOfSpeech": "verb",
    "definition": "Extended application of sci",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-sci",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-490",
    "word": "proscribe",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to write, etch, record",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-scrib",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-491",
    "word": "inscribe",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to write, etch, record",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-scrib",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-492",
    "word": "transcript",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from scrib / script",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-scrib",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-493",
    "word": "subscibe",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of scrib / script",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-scrib",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-494",
    "word": "circumscribe",
    "partOfSpeech": "verb",
    "definition": "Extended application of scrib / script",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-scrib",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-495",
    "word": "dissect",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to cut, divide, slice",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-sec",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-496",
    "word": "section",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to cut, divide, slice",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-sec",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-497",
    "word": "sector",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of sec / sect",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-sec",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-498",
    "word": "transect",
    "partOfSpeech": "verb",
    "definition": "Extended application of sec / sect",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-sec",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-499",
    "word": "sedentary",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to sit, settle, stay",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-sed",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-500",
    "word": "subside",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to sit, settle, stay",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-sed",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-501",
    "word": "preside",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from sed / sid / sess",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-sed",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-502",
    "word": "assiduous",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of sed / sid / sess",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-sed",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-503",
    "word": "session",
    "partOfSpeech": "verb",
    "definition": "Extended application of sed / sid / sess",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-sed",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-504",
    "word": "sentient",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to feel, perceive, think",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-sens",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-505",
    "word": "consensus",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to feel, perceive, think",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-sens",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-506",
    "word": "dissuit",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from sens / sent",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-sens",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-507",
    "word": "sensation",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of sens / sent",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-sens",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-508",
    "word": "dissent",
    "partOfSpeech": "verb",
    "definition": "Extended application of sens / sent",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-sens",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-509",
    "word": "subsequent",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to follow, succeed, pursue",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-sequ",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-510",
    "word": "consecutive",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to follow, succeed, pursue",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-sequ",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-511",
    "word": "prosecute",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from sequ / secut",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-sequ",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-512",
    "word": "obsequious",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of sequ / secut",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-sequ",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-513",
    "word": "sequence",
    "partOfSpeech": "verb",
    "definition": "Extended application of sequ / secut",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-sequ",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-514",
    "word": "solitary",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying alone, lonely, sun",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-sol",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-515",
    "word": "solitude",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing alone, lonely, sun",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-sol",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-516",
    "word": "soliloquy",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from sol",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-sol",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-517",
    "word": "desolate",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of sol",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-sol",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-518",
    "word": "solo",
    "partOfSpeech": "verb",
    "definition": "Extended application of sol",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-sol",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-519",
    "word": "sophisticated",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying wise, wisdom, clever",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-soph",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-520",
    "word": "sophistry",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from soph",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-soph",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-521",
    "word": "sophomore",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of soph",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-soph",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-522",
    "word": "unsophisticated",
    "partOfSpeech": "verb",
    "definition": "Extended application of soph",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-soph",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-523",
    "word": "perspicacious",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying look, view, aspect",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-spec-2",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-524",
    "word": "despicable",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from spic / spec",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-spec-2",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-525",
    "word": "aspect",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of spic / spec",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-spec-2",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-526",
    "word": "inspect",
    "partOfSpeech": "verb",
    "definition": "Extended application of spic / spec",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-spec-2",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-527",
    "word": "statuesque",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to stand, set up, stop",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-stat",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-528",
    "word": "constitute",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to stand, set up, stop",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-stat",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-529",
    "word": "persist",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from stat / stit / sist",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-stat",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-530",
    "word": "destitute",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of stat / stit / sist",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-stat",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-531",
    "word": "static",
    "partOfSpeech": "verb",
    "definition": "Extended application of stat / stit / sist",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-stat",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-532",
    "word": "constructive",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to build, pile up, frame",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-strut",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-533",
    "word": "destroy",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to build, pile up, frame",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-strut",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-534",
    "word": "substructure",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from struct",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-strut",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-535",
    "word": "instructive",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of struct",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-strut",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-536",
    "word": "obstruct",
    "partOfSpeech": "verb",
    "definition": "Extended application of struct",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-strut",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-537",
    "word": "tactile",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to touch, reach, contact",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-tact",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-538",
    "word": "intangible",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to touch, reach, contact",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-tact",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-539",
    "word": "contiguous",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from tact / tang / tig",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-tact",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-540",
    "word": "tactful",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of tact / tang / tig",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-tact",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-541",
    "word": "contingent",
    "partOfSpeech": "verb",
    "definition": "Extended application of tact / tang / tig",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-tact",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-542",
    "word": "tenacious",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to hold, keep, retain",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-tain",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-543",
    "word": "pertain",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to hold, keep, retain",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-tain",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-544",
    "word": "retention",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from tain / ten / tin",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-tain",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-545",
    "word": "pertinacious",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of tain / ten / tin",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-tain",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-546",
    "word": "abstain",
    "partOfSpeech": "verb",
    "definition": "Extended application of tain / ten / tin",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-tain",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-547",
    "word": "tangible",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying touch, feel, reach",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-tang",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-548",
    "word": "tangent",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing touch, feel, reach",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-tang",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-549",
    "word": "intact",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from tang / tact",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-tang",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-550",
    "word": "contingency",
    "partOfSpeech": "verb",
    "definition": "Extended application of tang / tact",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-tang",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-551",
    "word": "technical",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying art, skill, craft, method",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-techn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-552",
    "word": "technique",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing art, skill, craft, method",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-techn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-553",
    "word": "technocracy",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from techn",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-techn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-554",
    "word": "technological",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of techn",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-techn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-555",
    "word": "pyrotechnics",
    "partOfSpeech": "verb",
    "definition": "Extended application of techn",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-techn",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-556",
    "word": "telepathy",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying far, distant, remote",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-tele",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-557",
    "word": "telescope",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing far, distant, remote",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-tele",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-558",
    "word": "television",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from tele-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-tele",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-559",
    "word": "telecommunications",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of tele-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-tele",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-560",
    "word": "telephonic",
    "partOfSpeech": "verb",
    "definition": "Extended application of tele-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-tele",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-561",
    "word": "contemporary",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying time, season, moderate",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-temp",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-562",
    "word": "extemporaneous",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing time, season, moderate",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-temp",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-563",
    "word": "temporal",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from temp / tempor",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-temp",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-564",
    "word": "temperance",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of temp / tempor",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-temp",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-565",
    "word": "tempest",
    "partOfSpeech": "verb",
    "definition": "Extended application of temp / tempor",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-temp",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-566",
    "word": "contend",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to stretch, strain, hold",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-ten",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-567",
    "word": "ostentatious",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to stretch, strain, hold",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-ten",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-568",
    "word": "tenuous",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from ten / tend / tens",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-ten",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-569",
    "word": "extension",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of ten / tend / tens",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-ten",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-570",
    "word": "intense",
    "partOfSpeech": "verb",
    "definition": "Extended application of ten / tend / tens",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-ten",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-571",
    "word": "terminal",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying boundary, end, limit",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-term",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-572",
    "word": "exterminate",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing boundary, end, limit",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-term",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-573",
    "word": "determinant",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from term / termin",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-term",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-574",
    "word": "terminate",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of term / termin",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-term",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-575",
    "word": "interminable",
    "partOfSpeech": "verb",
    "definition": "Extended application of term / termin",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-term",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-576",
    "word": "subterranean",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying earth, land, ground",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-terr",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-577",
    "word": "terrestrial",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing earth, land, ground",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-terr",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-578",
    "word": "territory",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from terr",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-terr",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-579",
    "word": "parterre",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of terr",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-terr",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-580",
    "word": "terrain",
    "partOfSpeech": "verb",
    "definition": "Extended application of terr",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-terr",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-581",
    "word": "testify",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying witness, evidence, affirm",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-test",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-582",
    "word": "attest",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing witness, evidence, affirm",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-test",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-583",
    "word": "detest",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from test",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-test",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-584",
    "word": "testament",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of test",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-test",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-585",
    "word": "protestation",
    "partOfSpeech": "verb",
    "definition": "Extended application of test",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-test",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-586",
    "word": "theology",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying god, deity, divine",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-the",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-587",
    "word": "atheist",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing god, deity, divine",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-the",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-588",
    "word": "theocracy",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of the / theo",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-the",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-589",
    "word": "apotheosis",
    "partOfSpeech": "verb",
    "definition": "Extended application of the / theo",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-the",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-590",
    "word": "thermal",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying heat, warmth",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-therm",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-591",
    "word": "thermodynamics",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing heat, warmth",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-therm",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-592",
    "word": "thermostat",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from therm / thermo",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-therm",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-593",
    "word": "isotherm",
    "partOfSpeech": "verb",
    "definition": "Extended application of therm / thermo",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-therm",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-594",
    "word": "extort",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to twist, bend, turn",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-tort",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-595",
    "word": "tortuous",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to twist, bend, turn",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-tort",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-596",
    "word": "contort",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from tort / torq",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-tort",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-597",
    "word": "retort",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of tort / torq",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-tort",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-598",
    "word": "distortion",
    "partOfSpeech": "verb",
    "definition": "Extended application of tort / torq",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-tort",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-599",
    "word": "toxic",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying poison, bow, arrow",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-tox",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-600",
    "word": "intoxicate",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing poison, bow, arrow",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-tox",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-601",
    "word": "toxin",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from tox",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-tox",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-602",
    "word": "detoxify",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of tox",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-tox",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-603",
    "word": "toxicology",
    "partOfSpeech": "verb",
    "definition": "Extended application of tox",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-tox",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-604",
    "word": "tribute",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to pay, give, assign",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-trib",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-605",
    "word": "attribute",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to pay, give, assign",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-trib",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-606",
    "word": "distribute",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from trib",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-trib",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-607",
    "word": "retribution",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of trib",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-trib",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-608",
    "word": "contribute",
    "partOfSpeech": "verb",
    "definition": "Extended application of trib",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-trib",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-609",
    "word": "obtrusive",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to push, thrust, force",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-trud",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-610",
    "word": "intrusive",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to push, thrust, force",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-trud",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-611",
    "word": "extrude",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from trud / trus",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-trud",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-612",
    "word": "abstruse",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of trud / trus",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-trud",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-613",
    "word": "protrude",
    "partOfSpeech": "verb",
    "definition": "Extended application of trud / trus",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-trud",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-614",
    "word": "urban",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying city, town, urban area",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-urb",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-615",
    "word": "urbane",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing city, town, urban area",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-urb",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-616",
    "word": "suburb",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from urb",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-urb",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-617",
    "word": "exurb",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of urb",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-urb",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-618",
    "word": "urbanization",
    "partOfSpeech": "verb",
    "definition": "Extended application of urb",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-urb",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-619",
    "word": "vacuous",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying empty, free, open",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-vac",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-620",
    "word": "evacuate",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing empty, free, open",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-vac",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-621",
    "word": "vacant",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from vac",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-vac",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-622",
    "word": "vacuity",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of vac",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-vac",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-623",
    "word": "vacation",
    "partOfSpeech": "verb",
    "definition": "Extended application of vac",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-vac",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-624",
    "word": "evade",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to go, walk, advance",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-vad",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-625",
    "word": "pervasive",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to go, walk, advance",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-vad",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-626",
    "word": "invade",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from vad / vas",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-vad",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-627",
    "word": "evasion",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of vad / vas",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-vad",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-628",
    "word": "pervade",
    "partOfSpeech": "verb",
    "definition": "Extended application of vad / vas",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-vad",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-629",
    "word": "valiant",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying strong, worthy, health",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-val",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-630",
    "word": "ambivalent",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing strong, worthy, health",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-val",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-631",
    "word": "prevail",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from val / vail",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-val",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-632",
    "word": "convalesce",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of val / vail",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-val",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-633",
    "word": "validity",
    "partOfSpeech": "verb",
    "definition": "Extended application of val / vail",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "The Human Personality"
    ],
    "rootId": "root-val",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-634",
    "word": "convene",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to come, arrive, happen",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-ven",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-635",
    "word": "circumvent",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to come, arrive, happen",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-ven",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-636",
    "word": "advent",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from ven / vent",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-ven",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-637",
    "word": "venue",
    "partOfSpeech": "verb",
    "definition": "Extended application of ven / vent",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-ven",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-638",
    "word": "veracity",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying true, real, truth",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-ver",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-639",
    "word": "veritable",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing true, real, truth",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-ver",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-640",
    "word": "verisimilitude",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of ver",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-ver",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-641",
    "word": "verify",
    "partOfSpeech": "verb",
    "definition": "Extended application of ver",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-ver",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-642",
    "word": "verbose",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying word",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-verb",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-643",
    "word": "verbatim",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing word",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-verb",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-644",
    "word": "verbal",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from verb",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-verb",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-645",
    "word": "proverb",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of verb",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-verb",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-646",
    "word": "reverberate",
    "partOfSpeech": "verb",
    "definition": "Extended application of verb",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "root-verb",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-647",
    "word": "deviate",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying way, road, path",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-via",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-648",
    "word": "impervious",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing way, road, path",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-via",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-649",
    "word": "obviate",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from via / voy",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-via",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-650",
    "word": "voyage",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of via / voy",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-via",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-651",
    "word": "viaduct",
    "partOfSpeech": "verb",
    "definition": "Extended application of via / voy",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-via",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-652",
    "word": "evident",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to see, perceive, look",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-vid",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-653",
    "word": "improvise",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to see, perceive, look",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-vid",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-654",
    "word": "supervise",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from vid / vis",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-vid",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-655",
    "word": "visionary",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of vid / vis",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-vid",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-656",
    "word": "invisible",
    "partOfSpeech": "verb",
    "definition": "Extended application of vid / vis",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "root-vid",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-657",
    "word": "invincible",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to conquer, overcome",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-vinc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-658",
    "word": "convict",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to conquer, overcome",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-vinc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-659",
    "word": "vanquish",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from vinc / vict",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-vinc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-660",
    "word": "evict",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of vinc / vict",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-vinc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-661",
    "word": "victorious",
    "partOfSpeech": "verb",
    "definition": "Extended application of vinc / vict",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "root-vinc",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-662",
    "word": "vital",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying life, alive, living",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-vit",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-663",
    "word": "vivacious",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing life, alive, living",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-vit",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-664",
    "word": "revitalize",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from vit / viv",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-vit",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-665",
    "word": "convivial",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of vit / viv",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-vit",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-666",
    "word": "vivid",
    "partOfSpeech": "verb",
    "definition": "Extended application of vit / viv",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-vit",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-667",
    "word": "voluntary",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from vol",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-vol",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-668",
    "word": "volition",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of vol",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-vol",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-669",
    "word": "involuntary",
    "partOfSpeech": "verb",
    "definition": "Extended application of vol",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "root-vol",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-670",
    "word": "convoluted",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to roll, turn, wind",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-volu",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-671",
    "word": "evolve",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to roll, turn, wind",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-volu",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-672",
    "word": "devolve",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from volu / volv",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-volu",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-673",
    "word": "revolution",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of volu / volv",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-volu",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-674",
    "word": "voluminous",
    "partOfSpeech": "verb",
    "definition": "Extended application of volu / volv",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "root-volu",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-675",
    "word": "voracious",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to eat, devour, swallow",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-vor",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-676",
    "word": "herbivore",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to eat, devour, swallow",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-vor",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-677",
    "word": "carnivorous",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from vor",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-vor",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-678",
    "word": "omnivorous",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of vor",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-vor",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-679",
    "word": "devour",
    "partOfSpeech": "verb",
    "definition": "Extended application of vor",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-vor",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-680",
    "word": "zoology",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying animal, living creature",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-zo",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-681",
    "word": "protozoa",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing animal, living creature",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-zo",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-682",
    "word": "zooplankton",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from zo / zoo",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-zo",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-683",
    "word": "zoo",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of zo / zoo",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-zo",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-684",
    "word": "epizootic",
    "partOfSpeech": "verb",
    "definition": "Extended application of zo / zoo",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "root-zo",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-685",
    "word": "amoral",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying not, without, lacking",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "prefix-a",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-686",
    "word": "atypical",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing not, without, lacking",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "prefix-a",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-687",
    "word": "anarchy",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from a- / an-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "prefix-a",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-688",
    "word": "anemia",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of a- / an-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "prefix-a",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-689",
    "word": "adhere",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying to, toward, near, addition",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-ad",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-690",
    "word": "adjacent",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing to, toward, near, addition",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-ad",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-691",
    "word": "adjoin",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of ad-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-ad",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-692",
    "word": "assimilate",
    "partOfSpeech": "verb",
    "definition": "Extended application of ad-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-ad",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-693",
    "word": "ambidextrous",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing both, around, on both sides",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "prefix-ambi",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-694",
    "word": "amphibian",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from ambi- / amphi-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "prefix-ambi",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-695",
    "word": "ambiguity",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of ambi- / amphi-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "prefix-ambi",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-696",
    "word": "ambient",
    "partOfSpeech": "verb",
    "definition": "Extended application of ambi- / amphi-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "prefix-ambi",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-697",
    "word": "antecedent",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying before, preceding in time",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "prefix-ante",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-698",
    "word": "antedate",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing before, preceding in time",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "prefix-ante",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-699",
    "word": "anteroom",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from ante-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "prefix-ante",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-700",
    "word": "antebellum",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of ante-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "prefix-ante",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-701",
    "word": "antediluvian",
    "partOfSpeech": "verb",
    "definition": "Extended application of ante-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "prefix-ante",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-702",
    "word": "circumlocution",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of circum-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "prefix-circum",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-703",
    "word": "navigate",
    "partOfSpeech": "verb",
    "definition": "Extended application of circum-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "prefix-circum",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-704",
    "word": "comprehensive",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from com- / con-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "prefix-com",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-705",
    "word": "degrade",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying down, away from, undo",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-de",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-706",
    "word": "deflect",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from de-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-de",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-707",
    "word": "demote",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of de-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-de",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-708",
    "word": "deprecate",
    "partOfSpeech": "verb",
    "definition": "Extended application of de-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-de",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-709",
    "word": "disseminate",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of dis-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "prefix-dis",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-710",
    "word": "disarticulate",
    "partOfSpeech": "verb",
    "definition": "Extended application of dis-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "prefix-dis",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-711",
    "word": "exile",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing out of, away from, former",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-ex",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-712",
    "word": "exuberant",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of ex-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-ex",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-713",
    "word": "ineffable",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing not, non-, un- (or into)",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "prefix-in",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-714",
    "word": "implacable",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from in- / im-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "prefix-in",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-715",
    "word": "incessant",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of in- / im-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "prefix-in",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-716",
    "word": "inscrutable",
    "partOfSpeech": "verb",
    "definition": "Extended application of in- / im-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "prefix-in",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-717",
    "word": "obdurate",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying against, in front of, toward",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-ob",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-718",
    "word": "obfuscate",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from ob-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-ob",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-719",
    "word": "oblivious",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of ob-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-ob",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-720",
    "word": "obnoxious",
    "partOfSpeech": "verb",
    "definition": "Extended application of ob-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-ob",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-721",
    "word": "permeate",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of per-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "prefix-per",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-722",
    "word": "persevere",
    "partOfSpeech": "verb",
    "definition": "Extended application of per-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "prefix-per",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-723",
    "word": "postscript",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying after, behind, subsequent",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "prefix-post",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-724",
    "word": "posterity",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing after, behind, subsequent",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "prefix-post",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-725",
    "word": "posthumous",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from post-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "prefix-post",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-726",
    "word": "postprandial",
    "partOfSpeech": "verb",
    "definition": "Extended application of post-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Science, Measurement, and Nature"
    ],
    "rootId": "prefix-post",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-727",
    "word": "precocious",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying before, in advance, prior",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "prefix-pre",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-728",
    "word": "predilection",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of pre-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "prefix-pre",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-729",
    "word": "premonition",
    "partOfSpeech": "verb",
    "definition": "Extended application of pre-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "prefix-pre",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-730",
    "word": "proclivity",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying forward, forth, in favor of",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-pro",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-731",
    "word": "prolific",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing forward, forth, in favor of",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-pro",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-732",
    "word": "propensity",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of pro-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-pro",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-733",
    "word": "proponent",
    "partOfSpeech": "verb",
    "definition": "Extended application of pro-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "prefix-pro",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-734",
    "word": "superlative",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from super-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "prefix-super",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-735",
    "word": "supersede",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of super-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "prefix-super",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-736",
    "word": "uncompromising",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing not, opposite of, reverse",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "prefix-un",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-737",
    "word": "unflappable",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from un-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "prefix-un",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-738",
    "word": "unassuming",
    "partOfSpeech": "verb",
    "definition": "Extended application of un-",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "prefix-un",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-739",
    "word": "ubiquity",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying state, quality, or condition",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "suffix-ity",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-740",
    "word": "audacity",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing state, quality, or condition",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "suffix-ity",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-741",
    "word": "sagacity",
    "partOfSpeech": "verb",
    "definition": "Extended application of -ity / -ty",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Human Relationships, Power, and Society"
    ],
    "rootId": "suffix-ity",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-742",
    "word": "scrutinize",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from -ize / -ise",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "suffix-ize",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-743",
    "word": "ostracize",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of -ize / -ise",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "suffix-ize",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-744",
    "word": "antagonize",
    "partOfSpeech": "verb",
    "definition": "Extended application of -ize / -ise",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "suffix-ize",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-745",
    "word": "dogmatic",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from -ic / -ical",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "suffix-ic",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-746",
    "word": "pedantic",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of -ic / -ical",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "suffix-ic",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-747",
    "word": "esoteric",
    "partOfSpeech": "verb",
    "definition": "Extended application of -ic / -ical",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Seeing, Thinking, and Knowing"
    ],
    "rootId": "suffix-ic",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-748",
    "word": "impediment",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying action, result, means",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "suffix-ment",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-749",
    "word": "disillusionment",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from -ment",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "suffix-ment",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-750",
    "word": "discernment",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of -ment",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "suffix-ment",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-751",
    "word": "encroachment",
    "partOfSpeech": "verb",
    "definition": "Extended application of -ment",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Speech, Writing, and Language"
    ],
    "rootId": "suffix-ment",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-752",
    "word": "relentless",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying without, lacking, free from",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "suffix-less",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-753",
    "word": "dauntless",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing without, lacking, free from",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "suffix-less",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-754",
    "word": "remorseless",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from -less",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "suffix-less",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-755",
    "word": "seamless",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of -less",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "suffix-less",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-756",
    "word": "feckless",
    "partOfSpeech": "verb",
    "definition": "Extended application of -less",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "suffix-less",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-757",
    "word": "distrustful",
    "partOfSpeech": "adjective",
    "definition": "Key term embodying full of, characterized by",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "suffix-ful",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-758",
    "word": "resourceful",
    "partOfSpeech": "adjective",
    "definition": "Secondary form expressing full of, characterized by",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "suffix-ful",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-759",
    "word": "reproachful",
    "partOfSpeech": "adjective",
    "definition": "Qualitative derivative of -ful",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "suffix-ful",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-760",
    "word": "mournful",
    "partOfSpeech": "verb",
    "definition": "Extended application of -ful",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Mind, Emotion, and Behavior"
    ],
    "rootId": "suffix-ful",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-761",
    "word": "miserate",
    "partOfSpeech": "noun",
    "definition": "Related concept derived from -ate",
    "difficulty": "Intermediate",
    "topicTags": [
      "Etymology & Roots",
      "Movement, Action, and Change"
    ],
    "rootId": "suffix-ate",
    "hasDetailedLesson": false
  },
  {
    "id": "cat-762",
    "word": "Abate",
    "partOfSpeech": "verb",
    "definition": "To decrease in force, intensity, or amount; to subside.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Action & Change"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-763",
    "word": "Aberration",
    "partOfSpeech": "noun",
    "definition": "A departure from what is normal, usual, or expected.",
    "difficulty": "Advanced",
    "topicTags": [
      "Logic & Philosophy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-764",
    "word": "Abeyance",
    "partOfSpeech": "noun",
    "definition": "A state of temporary disuse or suspension.",
    "difficulty": "Advanced",
    "topicTags": [
      "Law & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-765",
    "word": "Abjure",
    "partOfSpeech": "verb",
    "definition": "To solemnly renounce or reject a belief, cause, or claim.",
    "difficulty": "Advanced",
    "topicTags": [
      "Argumentation"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-766",
    "word": "Abnegation",
    "partOfSpeech": "noun",
    "definition": "The act of renouncing or rejecting something; self-denial.",
    "difficulty": "Advanced",
    "topicTags": [
      "Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-767",
    "word": "Abridge",
    "partOfSpeech": "verb",
    "definition": "To shorten a text or speech without losing its central meaning.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Writing & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-768",
    "word": "Absolve",
    "partOfSpeech": "verb",
    "definition": "To declare someone free from blame, guilt, or responsibility.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Ethics & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-769",
    "word": "Abstemious",
    "partOfSpeech": "adjective",
    "definition": "Not self-indulgent, especially when eating and drinking; moderate.",
    "difficulty": "Advanced",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-770",
    "word": "Accede",
    "partOfSpeech": "verb",
    "definition": "To agree to a demand, request, or treaty; to assume an office.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Governance & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-771",
    "word": "Acclimate",
    "partOfSpeech": "verb",
    "definition": "To become accustomed to a new climate or environment; adapt.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Action & Change"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-772",
    "word": "Accolade",
    "partOfSpeech": "noun",
    "definition": "An award, honor, or expression of praise and approval.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Leadership & Career"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-773",
    "word": "Accretion",
    "partOfSpeech": "noun",
    "definition": "Growth or increase by gradual addition or accumulation.",
    "difficulty": "Advanced",
    "topicTags": [
      "Science & Nature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-774",
    "word": "Acerbic",
    "partOfSpeech": "adjective",
    "definition": "Sharp and forthright in tone or temper; tasting sour.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-775",
    "word": "Acquiesce",
    "partOfSpeech": "verb",
    "definition": "To accept or agree to something reluctantly but without protest.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Relationships"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-776",
    "word": "Acrimonious",
    "partOfSpeech": "adjective",
    "definition": "Angry and bitter in tone or language.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-777",
    "word": "Acumen",
    "partOfSpeech": "noun",
    "definition": "The ability to make good judgments and quick decisions.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Leadership & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-778",
    "word": "Adage",
    "partOfSpeech": "noun",
    "definition": "A traditional saying expressing a common observation or truth.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Literature & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-779",
    "word": "Adamant",
    "partOfSpeech": "adjective",
    "definition": "Refusing to be persuaded or to change one's mind; resolute.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-780",
    "word": "Adduce",
    "partOfSpeech": "verb",
    "definition": "To cite as evidence or proof in an argument.",
    "difficulty": "Advanced",
    "topicTags": [
      "Argumentation & Logic"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-781",
    "word": "Adept",
    "partOfSpeech": "adjective",
    "definition": "Very skilled or proficient at something.",
    "difficulty": "Foundational",
    "topicTags": [
      "Leadership & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-782",
    "word": "Admonish",
    "partOfSpeech": "verb",
    "definition": "To warn or reprimand someone firmly.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-783",
    "word": "Adroit",
    "partOfSpeech": "adjective",
    "definition": "Clever or skillful in using the hands or mind.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Leadership & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-784",
    "word": "Adulation",
    "partOfSpeech": "noun",
    "definition": "Excessive praise, admiration, or flattery.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Social Dynamics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-785",
    "word": "Adulterate",
    "partOfSpeech": "verb",
    "definition": "To render something impure or weaker by adding inferior elements.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Action & Change"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-786",
    "word": "Adversity",
    "partOfSpeech": "noun",
    "definition": "Difficulties, misfortune, or hardship.",
    "difficulty": "Foundational",
    "topicTags": [
      "Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-787",
    "word": "Aesthetic",
    "partOfSpeech": "adjective",
    "definition": "Concerned with beauty or the appreciation of beauty.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Literature & Arts"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-788",
    "word": "Affable",
    "partOfSpeech": "adjective",
    "definition": "Friendly, good-natured, or easy to talk to.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-789",
    "word": "Affectation",
    "partOfSpeech": "noun",
    "definition": "Behavior, speech, or writing that is artificial and designed to impress.",
    "difficulty": "Advanced",
    "topicTags": [
      "Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-790",
    "word": "Affluence",
    "partOfSpeech": "noun",
    "definition": "The state of having a great deal of money or wealth.",
    "difficulty": "Foundational",
    "topicTags": [
      "Economics & Society"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-791",
    "word": "Aggrandize",
    "partOfSpeech": "verb",
    "definition": "To increase the power, status, or wealth of an individual or nation.",
    "difficulty": "Advanced",
    "topicTags": [
      "Governance & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-792",
    "word": "Agility",
    "partOfSpeech": "noun",
    "definition": "Ability to move quickly and easily or think rapidly.",
    "difficulty": "Foundational",
    "topicTags": [
      "Cognition"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-793",
    "word": "Alacrity",
    "partOfSpeech": "noun",
    "definition": "Brisk and cheerful readiness or eagerness.",
    "difficulty": "Advanced",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-794",
    "word": "Algorithmic",
    "partOfSpeech": "adjective",
    "definition": "Relating to a step-by-step procedure for solving a problem.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Science & Tech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-795",
    "word": "Alienate",
    "partOfSpeech": "verb",
    "definition": "To cause someone to feel isolated or estranged.",
    "difficulty": "Foundational",
    "topicTags": [
      "Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-796",
    "word": "Allay",
    "partOfSpeech": "verb",
    "definition": "To diminish, soothe, or put at rest fear, suspicion, or worry.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-797",
    "word": "Allocate",
    "partOfSpeech": "verb",
    "definition": "To distribute resources or duties for a specific purpose.",
    "difficulty": "Foundational",
    "topicTags": [
      "Management & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-798",
    "word": "Allude",
    "partOfSpeech": "verb",
    "definition": "To suggest or call attention to indirectly; hint at.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Writing & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-799",
    "word": "Aloof",
    "partOfSpeech": "adjective",
    "definition": "Not friendly or forthcoming; cool and distant.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-800",
    "word": "Altruism",
    "partOfSpeech": "noun",
    "definition": "Unselfish regard for or devotion to the welfare of others.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Ethics & Philosophy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-801",
    "word": "Amalgamate",
    "partOfSpeech": "verb",
    "definition": "To combine or unite to form one organization or structure.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Management & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-802",
    "word": "Ambivalence",
    "partOfSpeech": "noun",
    "definition": "The state of having mixed feelings or contradictory ideas.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-803",
    "word": "Ameliorate",
    "partOfSpeech": "verb",
    "definition": "To make a bad situation better or more tolerable.",
    "difficulty": "Advanced",
    "topicTags": [
      "Action & Change"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-804",
    "word": "Amenable",
    "partOfSpeech": "adjective",
    "definition": "Open and responsive to suggestion; easily persuaded.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-805",
    "word": "Amiable",
    "partOfSpeech": "adjective",
    "definition": "Having or displaying a friendly and pleasant manner.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-806",
    "word": "Amity",
    "partOfSpeech": "noun",
    "definition": "A friendly relationship between people or countries.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Governance & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-807",
    "word": "Analogy",
    "partOfSpeech": "noun",
    "definition": "A comparison between two things for explanation or clarification.",
    "difficulty": "Foundational",
    "topicTags": [
      "Logic & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-808",
    "word": "Anarchic",
    "partOfSpeech": "adjective",
    "definition": "Lacking control, order, or authority; chaotic.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Governance & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-809",
    "word": "Anathema",
    "partOfSpeech": "noun",
    "definition": "Something or someone that one vehemently dislikes or detests.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-810",
    "word": "Anecdote",
    "partOfSpeech": "noun",
    "definition": "A short and amusing or interesting story about a real incident.",
    "difficulty": "Foundational",
    "topicTags": [
      "Literature & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-811",
    "word": "Animosity",
    "partOfSpeech": "noun",
    "definition": "Strong hostility, ill feeling, or hatred.",
    "difficulty": "Foundational",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-812",
    "word": "Antagonism",
    "partOfSpeech": "noun",
    "definition": "Active hostility or opposition.",
    "difficulty": "Foundational",
    "topicTags": [
      "Social Dynamics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-813",
    "word": "Antiquated",
    "partOfSpeech": "adjective",
    "definition": "Old-fashioned or outdated.",
    "difficulty": "Foundational",
    "topicTags": [
      "History & Society"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-814",
    "word": "Apex",
    "partOfSpeech": "noun",
    "definition": "The highest point or peak of something.",
    "difficulty": "Foundational",
    "topicTags": [
      "Quantitative & Spatial"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-815",
    "word": "Aphorism",
    "partOfSpeech": "noun",
    "definition": "A pithy observation that contains a general truth.",
    "difficulty": "Advanced",
    "topicTags": [
      "Literature & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-816",
    "word": "Aplomb",
    "partOfSpeech": "noun",
    "definition": "Self-confidence or assurance, especially when in a demanding situation.",
    "difficulty": "Advanced",
    "topicTags": [
      "Leadership & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-817",
    "word": "Apocryphal",
    "partOfSpeech": "adjective",
    "definition": "Of doubtful authenticity, although widely circulated as being true.",
    "difficulty": "Advanced",
    "topicTags": [
      "Literature & History"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-818",
    "word": "Apologist",
    "partOfSpeech": "noun",
    "definition": "A person who offers any defense in support of something controversial.",
    "difficulty": "Advanced",
    "topicTags": [
      "Argumentation & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-819",
    "word": "Apostate",
    "partOfSpeech": "noun",
    "definition": "A person who renounces a religious or political belief or principle.",
    "difficulty": "Advanced",
    "topicTags": [
      "Governance & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-820",
    "word": "Appease",
    "partOfSpeech": "verb",
    "definition": "To pacify or placate someone by acceding to their demands.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Governance & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-821",
    "word": "Apposite",
    "partOfSpeech": "adjective",
    "definition": "Apt in the circumstances or in relation to something; relevant.",
    "difficulty": "Advanced",
    "topicTags": [
      "Logic & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-822",
    "word": "Appraise",
    "partOfSpeech": "verb",
    "definition": "To assess the value or quality of something.",
    "difficulty": "Foundational",
    "topicTags": [
      "Management & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-823",
    "word": "Apprehension",
    "partOfSpeech": "noun",
    "definition": "Anxiety or fear that something bad or unpleasant will happen.",
    "difficulty": "Foundational",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-824",
    "word": "Approbation",
    "partOfSpeech": "noun",
    "definition": "Approval or praise.",
    "difficulty": "Advanced",
    "topicTags": [
      "Social Dynamics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-825",
    "word": "Appropriate",
    "partOfSpeech": "verb",
    "definition": "To take something for one's own use, typically without permission.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Governance & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-826",
    "word": "Apropos",
    "partOfSpeech": "adjective",
    "definition": "Very appropriate or relevant to a given situation.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-827",
    "word": "Ardent",
    "partOfSpeech": "adjective",
    "definition": "Enthusiastic or passionate.",
    "difficulty": "Foundational",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-828",
    "word": "Arduous",
    "partOfSpeech": "adjective",
    "definition": "Involving or requiring strenuous effort; difficult and tiring.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Action & Change"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-829",
    "word": "Arrogance",
    "partOfSpeech": "noun",
    "definition": "An insulting degree of self-importance or haughtiness.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-830",
    "word": "Articulate",
    "partOfSpeech": "verb",
    "definition": "To express an idea or feeling fluently and coherently.",
    "difficulty": "Foundational",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-831",
    "word": "Ascetic",
    "partOfSpeech": "adjective",
    "definition": "Characterized by severe self-discipline and abstention from indulgences.",
    "difficulty": "Advanced",
    "topicTags": [
      "Philosophy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-832",
    "word": "Ascribe",
    "partOfSpeech": "verb",
    "definition": "To attribute something to a cause, person, or origin.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Logic & Reasoning"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-833",
    "word": "Asperity",
    "partOfSpeech": "noun",
    "definition": "Harshness of tone or manner.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-834",
    "word": "Aspersion",
    "partOfSpeech": "noun",
    "definition": "An attack on the reputation or integrity of someone or something.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-835",
    "word": "Assail",
    "partOfSpeech": "verb",
    "definition": "To make a concerted or violent attack on.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Action & Change"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-836",
    "word": "Assent",
    "partOfSpeech": "noun",
    "definition": "The expression of approval or agreement.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Governance & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-837",
    "word": "Assert",
    "partOfSpeech": "verb",
    "definition": "To state a fact or belief confidently and forcefully.",
    "difficulty": "Foundational",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-838",
    "word": "Assuage",
    "partOfSpeech": "verb",
    "definition": "To make an unpleasant feeling less intense or satisfy a desire.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-839",
    "word": "Astute",
    "partOfSpeech": "adjective",
    "definition": "Having or showing an ability to accurately assess situations.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Cognition & Knowledge"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-840",
    "word": "Audacious",
    "partOfSpeech": "adjective",
    "definition": "Showing a willingness to take surprisingly bold risks.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-841",
    "word": "Augment",
    "partOfSpeech": "verb",
    "definition": "To make something greater by adding to it; increase.",
    "difficulty": "Foundational",
    "topicTags": [
      "Action & Change"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-842",
    "word": "August",
    "partOfSpeech": "adjective",
    "definition": "Respected and impressive; majestic or venerable.",
    "difficulty": "Advanced",
    "topicTags": [
      "Governance & Leadership"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-843",
    "word": "Auspicious",
    "partOfSpeech": "adjective",
    "definition": "Conducive to success; favorable.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Life & Society"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-844",
    "word": "Austerity",
    "partOfSpeech": "noun",
    "definition": "Sternness or severity of manner; extreme plainness and frugality.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Economics & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-845",
    "word": "Autocratic",
    "partOfSpeech": "adjective",
    "definition": "Taking no account of other people's wishes or opinions; domineering.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Governance & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-846",
    "word": "Autonomous",
    "partOfSpeech": "adjective",
    "definition": "Having self-government or freedom to act independently.",
    "difficulty": "Foundational",
    "topicTags": [
      "Governance & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-847",
    "word": "Avarice",
    "partOfSpeech": "noun",
    "definition": "Extreme greed for wealth or material gain.",
    "difficulty": "Advanced",
    "topicTags": [
      "Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-848",
    "word": "Aver",
    "partOfSpeech": "verb",
    "definition": "To state or assert to be the case.",
    "difficulty": "Advanced",
    "topicTags": [
      "Argumentation"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-849",
    "word": "Avow",
    "partOfSpeech": "verb",
    "definition": "To assert or confess openly.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-850",
    "word": "Axiom",
    "partOfSpeech": "noun",
    "definition": "A statement or proposition that is regarded as self-evidently true.",
    "difficulty": "Advanced",
    "topicTags": [
      "Logic & Philosophy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-851",
    "word": "Banal",
    "partOfSpeech": "adjective",
    "definition": "Lacking in originality as to be obvious and boring; trite.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Literature & Writing"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-852",
    "word": "Bane",
    "partOfSpeech": "noun",
    "definition": "A cause of great distress or annoyance.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Life & Society"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-853",
    "word": "Banter",
    "partOfSpeech": "noun",
    "definition": "The playful and friendly exchange of teasing remarks.",
    "difficulty": "Foundational",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-854",
    "word": "Belie",
    "partOfSpeech": "verb",
    "definition": "To fail to give a true impression of; contradict.",
    "difficulty": "Advanced",
    "topicTags": [
      "Logic & Philosophy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-855",
    "word": "Bellicose",
    "partOfSpeech": "adjective",
    "definition": "Demonstrating aggression and willingness to fight; warlike.",
    "difficulty": "Advanced",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-856",
    "word": "Belligerent",
    "partOfSpeech": "adjective",
    "definition": "Hostile and aggressive; engaged in war.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-857",
    "word": "Bequeath",
    "partOfSpeech": "verb",
    "definition": "To pass something on or leave it to another after death.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Law & History"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-858",
    "word": "Berate",
    "partOfSpeech": "verb",
    "definition": "To scold or criticize someone angrily and at length.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-859",
    "word": "Bereft",
    "partOfSpeech": "adjective",
    "definition": "Deprived of or lacking something, especially a non-material asset.",
    "difficulty": "Advanced",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-860",
    "word": "Bifurcation",
    "partOfSpeech": "noun",
    "definition": "The division of something into two branches or parts.",
    "difficulty": "Advanced",
    "topicTags": [
      "Science & Nature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-861",
    "word": "Bigotry",
    "partOfSpeech": "noun",
    "definition": "Obstinate or unreasonable attachment to a belief or prejudice.",
    "difficulty": "Foundational",
    "topicTags": [
      "Society & Ethics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-862",
    "word": "Blandishment",
    "partOfSpeech": "noun",
    "definition": "A flattering or pleasing statement used to persuade someone.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-863",
    "word": "Blatant",
    "partOfSpeech": "adjective",
    "definition": "Done openly and unashamedly; completely obvious.",
    "difficulty": "Foundational",
    "topicTags": [
      "Behavior"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-864",
    "word": "Blight",
    "partOfSpeech": "noun",
    "definition": "A thing that spoils or damages something; a plant disease.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Science & Nature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-865",
    "word": "Bolster",
    "partOfSpeech": "verb",
    "definition": "To support, strengthen, or prop up.",
    "difficulty": "Foundational",
    "topicTags": [
      "Action & Change"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-866",
    "word": "Bombastic",
    "partOfSpeech": "adjective",
    "definition": "High-sounding but with little meaning; inflated.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-867",
    "word": "Boon",
    "partOfSpeech": "noun",
    "definition": "A thing that is helpful or beneficial; a blessing.",
    "difficulty": "Foundational",
    "topicTags": [
      "Life & Society"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-868",
    "word": "Boorish",
    "partOfSpeech": "adjective",
    "definition": "Rough and bad-mannered; coarse.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-869",
    "word": "Brevity",
    "partOfSpeech": "noun",
    "definition": "Concise and exact use of words in writing or speech.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Writing & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-870",
    "word": "Bucolic",
    "partOfSpeech": "adjective",
    "definition": "Relating to the pleasant aspects of the countryside and country life.",
    "difficulty": "Advanced",
    "topicTags": [
      "Literature & Nature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-871",
    "word": "Bulwark",
    "partOfSpeech": "noun",
    "definition": "A defensive wall or a person/thing that acts as a defense.",
    "difficulty": "Advanced",
    "topicTags": [
      "Governance & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-872",
    "word": "Burgeon",
    "partOfSpeech": "verb",
    "definition": "To begin to grow or increase rapidly; flourish.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Action & Change"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-873",
    "word": "Buttress",
    "partOfSpeech": "verb",
    "definition": "To increase the strength of or supply support to.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Argumentation & Logic"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-874",
    "word": "Cajole",
    "partOfSpeech": "verb",
    "definition": "To persuade someone to do something by sustained coaxing or flattery.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-875",
    "word": "Calamity",
    "partOfSpeech": "noun",
    "definition": "An event causing great and often sudden damage or distress.",
    "difficulty": "Foundational",
    "topicTags": [
      "Life & Society"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-876",
    "word": "Calculated",
    "partOfSpeech": "adjective",
    "definition": "Done with full awareness of the likely consequences; deliberate.",
    "difficulty": "Foundational",
    "topicTags": [
      "Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-877",
    "word": "Callous",
    "partOfSpeech": "adjective",
    "definition": "Showing or having an insensitive and cruel disregard for others.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-878",
    "word": "Calumny",
    "partOfSpeech": "noun",
    "definition": "The making of false and defamatory statements to damage a reputation.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-879",
    "word": "Candid",
    "partOfSpeech": "adjective",
    "definition": "Truthful and straightforward; frank.",
    "difficulty": "Foundational",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-880",
    "word": "Candor",
    "partOfSpeech": "noun",
    "definition": "The quality of being open and honest in expression; frankness.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-881",
    "word": "Canon",
    "partOfSpeech": "noun",
    "definition": "A general law, rule, principle, or criterion by which something is judged.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Literature & Culture"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-882",
    "word": "Cantankerous",
    "partOfSpeech": "adjective",
    "definition": "Bad-tempered, argumentative, and uncooperative.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-883",
    "word": "Capricious",
    "partOfSpeech": "adjective",
    "definition": "Given to sudden and unaccountable changes of mood or behavior.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-884",
    "word": "Captious",
    "partOfSpeech": "adjective",
    "definition": "Tending to find fault or raise petty objections.",
    "difficulty": "Advanced",
    "topicTags": [
      "Argumentation & Logic"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-885",
    "word": "Catalyst",
    "partOfSpeech": "noun",
    "definition": "A person or thing that precipitates an event or change.",
    "difficulty": "Foundational",
    "topicTags": [
      "Action & Change"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-886",
    "word": "Categorical",
    "partOfSpeech": "adjective",
    "definition": "Unambiguous and explicit; direct and absolute.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Logic & Philosophy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-887",
    "word": "Catharsis",
    "partOfSpeech": "noun",
    "definition": "The process of releasing strong or repressed emotions.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-888",
    "word": "Caustic",
    "partOfSpeech": "adjective",
    "definition": "Sarcastic in a scathing and bitter way; corrosive.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-889",
    "word": "Cavalier",
    "partOfSpeech": "adjective",
    "definition": "Showing a lack of proper concern; dismissive.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-890",
    "word": "Caveat",
    "partOfSpeech": "noun",
    "definition": "A warning or proviso of specific stipulations or conditions.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Law & Logic"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-891",
    "word": "Censure",
    "partOfSpeech": "verb",
    "definition": "To express severe disapproval of someone or something officially.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Governance & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-892",
    "word": "Cerebral",
    "partOfSpeech": "adjective",
    "definition": "Intellectual rather than emotional or physical.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Cognition & Knowledge"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-893",
    "word": "Chagrin",
    "partOfSpeech": "noun",
    "definition": "Distress or embarrassment at having failed or been humiliated.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-894",
    "word": "Charlatan",
    "partOfSpeech": "noun",
    "definition": "A person falsely claiming to have a special knowledge or skill; fraud.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Social Dynamics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-895",
    "word": "Chasm",
    "partOfSpeech": "noun",
    "definition": "A deep fissure in the earth or a profound difference between people.",
    "difficulty": "Foundational",
    "topicTags": [
      "Nature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-896",
    "word": "Chastise",
    "partOfSpeech": "verb",
    "definition": "To rebuke or reprimand severely.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-897",
    "word": "Chicanery",
    "partOfSpeech": "noun",
    "definition": "The use of trickery to achieve a political, financial, or legal purpose.",
    "difficulty": "Advanced",
    "topicTags": [
      "Governance & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-898",
    "word": "Chimerical",
    "partOfSpeech": "adjective",
    "definition": "Existing only as a product of unchecked imagination; fantastically visionary.",
    "difficulty": "Advanced",
    "topicTags": [
      "Philosophy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-899",
    "word": "Churlish",
    "partOfSpeech": "adjective",
    "definition": "Rude in a mean-spirited and surly way.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-900",
    "word": "Clairvoyant",
    "partOfSpeech": "adjective",
    "definition": "Having or showing supernatural insight into future events.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-901",
    "word": "Clandestine",
    "partOfSpeech": "adjective",
    "definition": "Kept secret or done secretively, especially because illicit.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Governance & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-902",
    "word": "Clemency",
    "partOfSpeech": "noun",
    "definition": "Mercy or leniency extended to an offender.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Law & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-903",
    "word": "Cliché",
    "partOfSpeech": "noun",
    "definition": "A phrase or opinion that is overused and betrays a lack of original thought.",
    "difficulty": "Foundational",
    "topicTags": [
      "Writing & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-904",
    "word": "Coalesce",
    "partOfSpeech": "verb",
    "definition": "To come together to form one mass or whole; merge.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Action & Change"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-905",
    "word": "Coalition",
    "partOfSpeech": "noun",
    "definition": "A temporary alliance of combined parties or nations.",
    "difficulty": "Foundational",
    "topicTags": [
      "Governance & Politics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-906",
    "word": "Coerce",
    "partOfSpeech": "verb",
    "definition": "To persuade an unwilling person to do something by force or threats.",
    "difficulty": "Foundational",
    "topicTags": [
      "Law & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-907",
    "word": "Cogent",
    "partOfSpeech": "adjective",
    "definition": "Clear, logical, and convincing in argument.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Argumentation & Logic"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-908",
    "word": "Coherent",
    "partOfSpeech": "adjective",
    "definition": "Logical and consistent; forming a unified whole.",
    "difficulty": "Foundational",
    "topicTags": [
      "Logic & Writing"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-909",
    "word": "Colloquial",
    "partOfSpeech": "adjective",
    "definition": "Used in ordinary or familiar conversation; informal.",
    "difficulty": "Foundational",
    "topicTags": [
      "Language & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-910",
    "word": "Collusion",
    "partOfSpeech": "noun",
    "definition": "Secret or illegal cooperation or conspiracy to deceive others.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Law & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-911",
    "word": "Commensurate",
    "partOfSpeech": "adjective",
    "definition": "Corresponding in size, degree, or proportion; equal.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Quantitative & Analytical"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-912",
    "word": "Commiserate",
    "partOfSpeech": "verb",
    "definition": "To express or feel sympathy or pity for someone.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-913",
    "word": "Compelling",
    "partOfSpeech": "adjective",
    "definition": "Evoking interest, attention, or admiration in a powerfully irresistible way.",
    "difficulty": "Foundational",
    "topicTags": [
      "Rhetoric & Writing"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-914",
    "word": "Compendium",
    "partOfSpeech": "noun",
    "definition": "A concise collection of information or detailed items.",
    "difficulty": "Advanced",
    "topicTags": [
      "Literature & Writing"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-915",
    "word": "Complacent",
    "partOfSpeech": "adjective",
    "definition": "Showing smug or uncritical satisfaction with oneself.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-916",
    "word": "Complement",
    "partOfSpeech": "verb",
    "definition": "To add to something in a way that enhances or completes it.",
    "difficulty": "Foundational",
    "topicTags": [
      "Logic & Structure"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-917",
    "word": "Compliance",
    "partOfSpeech": "noun",
    "definition": "The action or fact of complying with a wish, command, or law.",
    "difficulty": "Foundational",
    "topicTags": [
      "Law & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-918",
    "word": "Complicity",
    "partOfSpeech": "noun",
    "definition": "The state of being involved with others in an illegal activity.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Law & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-919",
    "word": "Compunction",
    "partOfSpeech": "noun",
    "definition": "A feeling of guilt or moral scruple that prevents misbehavior.",
    "difficulty": "Advanced",
    "topicTags": [
      "Psychology & Ethics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-920",
    "word": "Conciliatory",
    "partOfSpeech": "adjective",
    "definition": "Intended or likely to placate or pacify; peace-making.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-921",
    "word": "Concomitant",
    "partOfSpeech": "adjective",
    "definition": "Naturally accompanying or associated with something.",
    "difficulty": "Advanced",
    "topicTags": [
      "Logic & Philosophy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-922",
    "word": "Condescend",
    "partOfSpeech": "verb",
    "definition": "To show feelings of superiority; be patronizing.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-923",
    "word": "Condone",
    "partOfSpeech": "verb",
    "definition": "To accept and allow behavior that is considered wrong to continue.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Ethics & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-924",
    "word": "Confluence",
    "partOfSpeech": "noun",
    "definition": "An act or process of merging or coming together.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Nature & Geography"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-925",
    "word": "Conjectural",
    "partOfSpeech": "adjective",
    "definition": "Based on or involving guesswork or incomplete information.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Logic & Reasoning"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-926",
    "word": "Consolidate",
    "partOfSpeech": "verb",
    "definition": "To combine a number of things into a single, more effective whole.",
    "difficulty": "Foundational",
    "topicTags": [
      "Management & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-927",
    "word": "Consternation",
    "partOfSpeech": "noun",
    "definition": "Feelings of anxiety or dismay, typically at something unexpected.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-928",
    "word": "Constituent",
    "partOfSpeech": "noun",
    "definition": "A component part of something; a voting member of a community.",
    "difficulty": "Foundational",
    "topicTags": [
      "Governance & Structure"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-929",
    "word": "Construe",
    "partOfSpeech": "verb",
    "definition": "To interpret a word or action in a particular way.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Cognition & Language"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-930",
    "word": "Consummate",
    "partOfSpeech": "adjective",
    "definition": "Showing a high degree of skill and flair; complete or perfect.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Leadership & Career"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-931",
    "word": "Contemptuous",
    "partOfSpeech": "adjective",
    "definition": "Showing contempt; scornful and disrespectful.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-932",
    "word": "Contentious",
    "partOfSpeech": "adjective",
    "definition": "Causing or likely to cause an argument; controversial.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Argumentation & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-933",
    "word": "Contrite",
    "partOfSpeech": "adjective",
    "definition": "Feeling or expressing remorse or penitence.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-934",
    "word": "Contrive",
    "partOfSpeech": "verb",
    "definition": "To create or bring about an object or situation by deliberate skill.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Strategy & Action"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-935",
    "word": "Contumacious",
    "partOfSpeech": "adjective",
    "definition": "Stubbornly or willfully disobedient to authority.",
    "difficulty": "Advanced",
    "topicTags": [
      "Law & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-936",
    "word": "Conundrum",
    "partOfSpeech": "noun",
    "definition": "A confusing and difficult problem or question.",
    "difficulty": "Foundational",
    "topicTags": [
      "Logic & Reasoning"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-937",
    "word": "Converge",
    "partOfSpeech": "verb",
    "definition": "To come together from different directions so as to eventually meet.",
    "difficulty": "Foundational",
    "topicTags": [
      "Spatial & Analytical"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-938",
    "word": "Conversant",
    "partOfSpeech": "adjective",
    "definition": "Familiar with or knowledgeable about something.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Cognition & Knowledge"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-939",
    "word": "Copious",
    "partOfSpeech": "adjective",
    "definition": "Abundant in supply or quantity.",
    "difficulty": "Foundational",
    "topicTags": [
      "Quantitative"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-940",
    "word": "Corroborate",
    "partOfSpeech": "verb",
    "definition": "To confirm or give support to a statement, theory, or finding.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Argumentation & Logic"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-941",
    "word": "Cosmopolitan",
    "partOfSpeech": "adjective",
    "definition": "Familiar with and at ease in many different countries and cultures.",
    "difficulty": "Foundational",
    "topicTags": [
      "Culture & Society"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-942",
    "word": "Covert",
    "partOfSpeech": "adjective",
    "definition": "Not openly acknowledged or displayed; secret.",
    "difficulty": "Foundational",
    "topicTags": [
      "Strategy & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-943",
    "word": "Covetous",
    "partOfSpeech": "adjective",
    "definition": "Having or showing a great desire to possess something belonging to another.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-944",
    "word": "Credence",
    "partOfSpeech": "noun",
    "definition": "Belief in or acceptance of something as true.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Cognition & Knowledge"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-945",
    "word": "Credulity",
    "partOfSpeech": "noun",
    "definition": "A tendency to be too ready to believe that something is real or true.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Cognition & Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-946",
    "word": "Crestfallen",
    "partOfSpeech": "adjective",
    "definition": "Sad and disappointed after unexpected failure.",
    "difficulty": "Foundational",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-947",
    "word": "Criterion",
    "partOfSpeech": "noun",
    "definition": "A principle or standard by which something may be judged or decided.",
    "difficulty": "Foundational",
    "topicTags": [
      "Logic & Philosophy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-948",
    "word": "Culpable",
    "partOfSpeech": "adjective",
    "definition": "Deserving blame; blameworthy or responsible for a fault.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Law & Ethics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-949",
    "word": "Culmination",
    "partOfSpeech": "noun",
    "definition": "The highest or final point of something, attained after a long time.",
    "difficulty": "Foundational",
    "topicTags": [
      "Action & Time"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-950",
    "word": "Curtail",
    "partOfSpeech": "verb",
    "definition": "To reduce in extent or quantity; impose a restriction on.",
    "difficulty": "Foundational",
    "topicTags": [
      "Action & Change"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-951",
    "word": "Cynicism",
    "partOfSpeech": "noun",
    "definition": "An inclination to believe that people are motivated purely by self-interest.",
    "difficulty": "Foundational",
    "topicTags": [
      "Psychology & Philosophy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-952",
    "word": "Dearth",
    "partOfSpeech": "noun",
    "definition": "A scarcity or lack of something.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Quantitative"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-953",
    "word": "Debacle",
    "partOfSpeech": "noun",
    "definition": "A sudden and ignominious failure; a fiasco.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Leadership & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-954",
    "word": "Debilitate",
    "partOfSpeech": "verb",
    "definition": "To make someone or something weak and infirm.",
    "difficulty": "Foundational",
    "topicTags": [
      "Action & Change"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-955",
    "word": "Decorum",
    "partOfSpeech": "noun",
    "definition": "Behavior in keeping with good taste and propriety.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Social Dynamics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-956",
    "word": "Decry",
    "partOfSpeech": "verb",
    "definition": "To publicly denounce or criticize.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-957",
    "word": "Definitive",
    "partOfSpeech": "adjective",
    "definition": "Done or reached decisively and with authority; conclusive.",
    "difficulty": "Foundational",
    "topicTags": [
      "Logic & Research"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-958",
    "word": "Defunct",
    "partOfSpeech": "adjective",
    "definition": "No longer existing or functioning.",
    "difficulty": "Intermediate",
    "topicTags": [
      "History & Time"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-959",
    "word": "Deleterious",
    "partOfSpeech": "adjective",
    "definition": "Causing harm or damage.",
    "difficulty": "Advanced",
    "topicTags": [
      "Science & Health"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-960",
    "word": "Delusion",
    "partOfSpeech": "noun",
    "definition": "An idiosyncratic belief that is firmly maintained despite evidence to the contrary.",
    "difficulty": "Foundational",
    "topicTags": [
      "Psychology & Cognition"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-961",
    "word": "Demur",
    "partOfSpeech": "verb",
    "definition": "To raise doubts or objections, or show reluctance.",
    "difficulty": "Advanced",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-962",
    "word": "Denigrate",
    "partOfSpeech": "verb",
    "definition": "To criticize unfairly; disparage.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-963",
    "word": "Denouement",
    "partOfSpeech": "noun",
    "definition": "The final outcome or resolution of a complex sequence of events.",
    "difficulty": "Advanced",
    "topicTags": [
      "Literature & Arts"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-964",
    "word": "Deride",
    "partOfSpeech": "verb",
    "definition": "To express contempt for; ridicule or mock.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-965",
    "word": "Derivative",
    "partOfSpeech": "adjective",
    "definition": "Imitative of another person's work and unoriginal.",
    "difficulty": "Foundational",
    "topicTags": [
      "Arts & Literature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-966",
    "word": "Desiccate",
    "partOfSpeech": "verb",
    "definition": "To remove the moisture from something; cause to dry up thoroughly.",
    "difficulty": "Advanced",
    "topicTags": [
      "Science & Nature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-967",
    "word": "Despot",
    "partOfSpeech": "noun",
    "definition": "A ruler or other person who holds absolute power, typically exercising it cruelly.",
    "difficulty": "Foundational",
    "topicTags": [
      "Governance & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-968",
    "word": "Desultory",
    "partOfSpeech": "adjective",
    "definition": "Lacking a plan, purpose, or enthusiasm; erratic.",
    "difficulty": "Advanced",
    "topicTags": [
      "Behavior & Action"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-969",
    "word": "Deterrent",
    "partOfSpeech": "noun",
    "definition": "A thing that discourages or is intended to discourage someone from doing something.",
    "difficulty": "Foundational",
    "topicTags": [
      "Law & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-970",
    "word": "Detriment",
    "partOfSpeech": "noun",
    "definition": "The state of being harmed or damaged.",
    "difficulty": "Foundational",
    "topicTags": [
      "General"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-971",
    "word": "Diatribe",
    "partOfSpeech": "noun",
    "definition": "A forceful and bitter verbal attack against someone or something.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-972",
    "word": "Dichotomy",
    "partOfSpeech": "noun",
    "definition": "A division or contrast between two things that are represented as opposites.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Logic & Philosophy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-973",
    "word": "Didactic",
    "partOfSpeech": "adjective",
    "definition": "Intended to teach, particularly in having moral instruction as an ulterior motive.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Education & Literature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-974",
    "word": "Diffident",
    "partOfSpeech": "adjective",
    "definition": "Modest or shy because of a lack of self-confidence.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-975",
    "word": "Dilapidated",
    "partOfSpeech": "adjective",
    "definition": "In a state of disrepair or ruin as a result of age or neglect.",
    "difficulty": "Foundational",
    "topicTags": [
      "Description"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-976",
    "word": "Dilatory",
    "partOfSpeech": "adjective",
    "definition": "Slow to act; intended to cause delay.",
    "difficulty": "Advanced",
    "topicTags": [
      "Behavior & Time"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-977",
    "word": "Dilettante",
    "partOfSpeech": "noun",
    "definition": "A person who cultivates an area of interest without real commitment or knowledge.",
    "difficulty": "Advanced",
    "topicTags": [
      "Arts & Culture"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-978",
    "word": "Diligence",
    "partOfSpeech": "noun",
    "definition": "Careful and persistent work or effort.",
    "difficulty": "Foundational",
    "topicTags": [
      "Leadership & Work"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-979",
    "word": "Diminution",
    "partOfSpeech": "noun",
    "definition": "A reduction in the size, extent, or importance of something.",
    "difficulty": "Advanced",
    "topicTags": [
      "Quantitative"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-980",
    "word": "Discerning",
    "partOfSpeech": "adjective",
    "definition": "Having or showing good judgment and keen perception.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Cognition & Knowledge"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-981",
    "word": "Discordant",
    "partOfSpeech": "adjective",
    "definition": "Disagreeing or incongruous; harsh and jarring in sound.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Music & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-982",
    "word": "Discrepancy",
    "partOfSpeech": "noun",
    "definition": "A lack of compatibility or similarity between two or more facts.",
    "difficulty": "Foundational",
    "topicTags": [
      "Logic & Analysis"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-983",
    "word": "Discretion",
    "partOfSpeech": "noun",
    "definition": "The quality of behaving or speaking in such a way as to avoid causing offense.",
    "difficulty": "Foundational",
    "topicTags": [
      "Social Dynamics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-984",
    "word": "Discursiveness",
    "partOfSpeech": "noun",
    "definition": "Fluency in passing aimlessly from one topic to another.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-985",
    "word": "Disdain",
    "partOfSpeech": "noun",
    "definition": "The feeling that someone or something is unworthy of one's consideration.",
    "difficulty": "Foundational",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-986",
    "word": "Disingenuous",
    "partOfSpeech": "adjective",
    "definition": "Not candid or sincere, typically by feigning simple-mindedness.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Ethics & Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-987",
    "word": "Disparate",
    "partOfSpeech": "adjective",
    "definition": "Essentially different in kind; not allowing comparison.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Logic & Structure"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-988",
    "word": "Dispel",
    "partOfSpeech": "verb",
    "definition": "To make a doubt, feeling, or belief disappear.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Cognition & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-989",
    "word": "Dissemble",
    "partOfSpeech": "verb",
    "definition": "To disguise or conceal one's real intentions, feelings, or motives.",
    "difficulty": "Advanced",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-990",
    "word": "Dissident",
    "partOfSpeech": "noun",
    "definition": "A person who opposes official policy or established doctrine.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Governance & Politics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-991",
    "word": "Dissolution",
    "partOfSpeech": "noun",
    "definition": "The closing down or dismissal of an assembly, partnership, or official body.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Law & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-992",
    "word": "Dissonance",
    "partOfSpeech": "noun",
    "definition": "A lack of harmony among musical notes or a clash of incompatible beliefs.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology & Music"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-993",
    "word": "Dissuade",
    "partOfSpeech": "verb",
    "definition": "To persuade someone not to take a particular course of action.",
    "difficulty": "Foundational",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-994",
    "word": "Distend",
    "partOfSpeech": "verb",
    "definition": "To swell or cause to swell by pressure from inside.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Physical & Nature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-995",
    "word": "Divest",
    "partOfSpeech": "verb",
    "definition": "To deprive or dispossess someone of power, rights, or possessions.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Finance & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-996",
    "word": "Divulge",
    "partOfSpeech": "verb",
    "definition": "To make known private or sensitive information.",
    "difficulty": "Foundational",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-997",
    "word": "Dormant",
    "partOfSpeech": "adjective",
    "definition": "Having normal physical functions suspended or slowed down.",
    "difficulty": "Foundational",
    "topicTags": [
      "Nature & Biology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-998",
    "word": "Dubious",
    "partOfSpeech": "adjective",
    "definition": "Hesitating or doubting; not to be relied upon; suspect.",
    "difficulty": "Foundational",
    "topicTags": [
      "Cognition & Knowledge"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-999",
    "word": "Duplicity",
    "partOfSpeech": "noun",
    "definition": "Deceitfulness in speech or conduct; double-dealing.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Ethics & Relationships"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1000",
    "word": "Ebullient",
    "partOfSpeech": "adjective",
    "definition": "Cheerful and full of energy; exuberant.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1001",
    "word": "Eccentric",
    "partOfSpeech": "adjective",
    "definition": "Unconventional and slightly strange in behavior or character.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1002",
    "word": "Efficacy",
    "partOfSpeech": "noun",
    "definition": "The ability to produce a desired or intended result.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Management & Science"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1003",
    "word": "Effrontery",
    "partOfSpeech": "noun",
    "definition": "Insolent or arrogant behavior.",
    "difficulty": "Advanced",
    "topicTags": [
      "Behavior"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1004",
    "word": "Egalitarian",
    "partOfSpeech": "adjective",
    "definition": "Believing in or based on the principle that all people are equal.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Ethics & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1005",
    "word": "Egregious",
    "partOfSpeech": "adjective",
    "definition": "Outstandingly bad; shocking.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Description"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1006",
    "word": "Elicit",
    "partOfSpeech": "verb",
    "definition": "To evoke or draw out a response from someone in reaction to one's actions.",
    "difficulty": "Foundational",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1007",
    "word": "Elusive",
    "partOfSpeech": "adjective",
    "definition": "Difficult to find, catch, or achieve.",
    "difficulty": "Foundational",
    "topicTags": [
      "General"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1008",
    "word": "Embellish",
    "partOfSpeech": "verb",
    "definition": "To make something more attractive or detailed by adding decorative features.",
    "difficulty": "Foundational",
    "topicTags": [
      "Writing & Arts"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1009",
    "word": "Empirical",
    "partOfSpeech": "adjective",
    "definition": "Based on observation or experience rather than theory or pure logic.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Science & Logic"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1010",
    "word": "Encomium",
    "partOfSpeech": "noun",
    "definition": "A speech or piece of writing that praises someone or something highly.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1011",
    "word": "Encroach",
    "partOfSpeech": "verb",
    "definition": "To intrude gradually on a person's territory or rights.",
    "difficulty": "Foundational",
    "topicTags": [
      "Governance & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1012",
    "word": "Enervate",
    "partOfSpeech": "verb",
    "definition": "To cause someone to feel drained of energy or vitality; weaken.",
    "difficulty": "Advanced",
    "topicTags": [
      "Action & State"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1013",
    "word": "Engender",
    "partOfSpeech": "verb",
    "definition": "To cause or give rise to a feeling, situation, or condition.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Action & Cause"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1014",
    "word": "Enigma",
    "partOfSpeech": "noun",
    "definition": "A person or thing that is mysterious, puzzling, or difficult to understand.",
    "difficulty": "Foundational",
    "topicTags": [
      "Cognition & Logic"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1015",
    "word": "Enmity",
    "partOfSpeech": "noun",
    "definition": "A state or feeling of active opposition or hostility.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Social Dynamics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1016",
    "word": "Epitome",
    "partOfSpeech": "noun",
    "definition": "A person or thing that is a perfect example of a particular quality or type.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Literature & Language"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1017",
    "word": "Equanimity",
    "partOfSpeech": "noun",
    "definition": "Mental calmness, composure, and evenness of temper.",
    "difficulty": "Advanced",
    "topicTags": [
      "Psychology & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1018",
    "word": "Equivocal",
    "partOfSpeech": "adjective",
    "definition": "Open to more than one interpretation; ambiguous or uncertain.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Logic & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1019",
    "word": "Eradicate",
    "partOfSpeech": "verb",
    "definition": "To destroy completely; put an end to.",
    "difficulty": "Foundational",
    "topicTags": [
      "Action & Change"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1020",
    "word": "Erratic",
    "partOfSpeech": "adjective",
    "definition": "Not even or regular in pattern or movement; unpredictable.",
    "difficulty": "Foundational",
    "topicTags": [
      "Behavior & Pattern"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1021",
    "word": "Erudite",
    "partOfSpeech": "adjective",
    "definition": "Having or showing great knowledge or learning.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Cognition & Education"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1022",
    "word": "Ethereal",
    "partOfSpeech": "adjective",
    "definition": "Extremely delicate and light in a way that seems not to be of this world.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Literature & Description"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1023",
    "word": "Ethos",
    "partOfSpeech": "noun",
    "definition": "The characteristic spirit, culture, or beliefs of a community.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Philosophy & Culture"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1024",
    "word": "Eulogy",
    "partOfSpeech": "noun",
    "definition": "A speech or piece of writing that praises someone highly.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1025",
    "word": "Euphemism",
    "partOfSpeech": "noun",
    "definition": "A mild or indirect word substituted for one considered to be too harsh.",
    "difficulty": "Foundational",
    "topicTags": [
      "Language & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1026",
    "word": "Evanescent",
    "partOfSpeech": "adjective",
    "definition": "Soon passing out of sight, memory, or existence; quickly fading.",
    "difficulty": "Advanced",
    "topicTags": [
      "Time & Nature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1027",
    "word": "Exacerbate",
    "partOfSpeech": "verb",
    "definition": "To make a problem, bad situation, or negative feeling worse.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Action & Cause"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1028",
    "word": "Exacting",
    "partOfSpeech": "adjective",
    "definition": "Making great demands on one's skill, care, or attention; rigorous.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Leadership & Work"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1029",
    "word": "Exculpate",
    "partOfSpeech": "verb",
    "definition": "To show or declare that someone is not guilty of wrongdoing.",
    "difficulty": "Advanced",
    "topicTags": [
      "Law & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1030",
    "word": "Exemplary",
    "partOfSpeech": "adjective",
    "definition": "Serving as a desirable model; representing the best of its kind.",
    "difficulty": "Foundational",
    "topicTags": [
      "Leadership & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1031",
    "word": "Exhort",
    "partOfSpeech": "verb",
    "definition": "To strongly encourage or urge someone to do something.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1032",
    "word": "Exigent",
    "partOfSpeech": "adjective",
    "definition": "Pressing; demanding immediate action or attention.",
    "difficulty": "Advanced",
    "topicTags": [
      "Action & Time"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1033",
    "word": "Exorbitant",
    "partOfSpeech": "adjective",
    "definition": "Unreasonably high in price or amount.",
    "difficulty": "Foundational",
    "topicTags": [
      "Economics & Finance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1034",
    "word": "Expedient",
    "partOfSpeech": "adjective",
    "definition": "Convenient and practical, although possibly improper or immoral.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Strategy & Ethics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1035",
    "word": "Expeditious",
    "partOfSpeech": "adjective",
    "definition": "Done with speed and efficiency.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Action & Time"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1036",
    "word": "Explicit",
    "partOfSpeech": "adjective",
    "definition": "Stated clearly and in detail, leaving no room for confusion or doubt.",
    "difficulty": "Foundational",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1037",
    "word": "Expostulate",
    "partOfSpeech": "verb",
    "definition": "To express strong disapproval or disagreement.",
    "difficulty": "Advanced",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1038",
    "word": "Expunge",
    "partOfSpeech": "verb",
    "definition": "To erase or remove completely something unwanted or unpleasant.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Action & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1039",
    "word": "Extenuating",
    "partOfSpeech": "adjective",
    "definition": "Serving to lessen the seriousness of an offense or fault.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Law & Ethics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1040",
    "word": "Extol",
    "partOfSpeech": "verb",
    "definition": "To praise enthusiastically and publicly.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1041",
    "word": "Extraneous",
    "partOfSpeech": "adjective",
    "definition": "Irrelevant or unrelated to the subject being dealt with.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Logic & Writing"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1042",
    "word": "Fabricate",
    "partOfSpeech": "verb",
    "definition": "To invent or construct something, typically with deceitful intent.",
    "difficulty": "Foundational",
    "topicTags": [
      "Communication & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1043",
    "word": "Facetious",
    "partOfSpeech": "adjective",
    "definition": "Treating serious issues with deliberately inappropriate humor.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1044",
    "word": "Fallacious",
    "partOfSpeech": "adjective",
    "definition": "Based on a mistaken belief or faulty logic.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Logic & Argumentation"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1045",
    "word": "Fatuous",
    "partOfSpeech": "adjective",
    "definition": "Silly and pointless; foolish.",
    "difficulty": "Advanced",
    "topicTags": [
      "Personality & Behavior"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1046",
    "word": "Fervent",
    "partOfSpeech": "adjective",
    "definition": "Having or displaying a passionate intensity.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1047",
    "word": "Fiasco",
    "partOfSpeech": "noun",
    "definition": "A complete and ignominious failure.",
    "difficulty": "Foundational",
    "topicTags": [
      "General"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1048",
    "word": "Fickle",
    "partOfSpeech": "adjective",
    "definition": "Changing frequently, especially as regards one's loyalties.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1049",
    "word": "Fidelity",
    "partOfSpeech": "noun",
    "definition": "Faithfulness to a person, cause, or belief.",
    "difficulty": "Foundational",
    "topicTags": [
      "Ethics & Relationships"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1050",
    "word": "Filibuster",
    "partOfSpeech": "noun",
    "definition": "An action such as a prolonged speech that obstructs legislative progress.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Governance & Politics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1051",
    "word": "Finesse",
    "partOfSpeech": "noun",
    "definition": "Intricate and refined delicacy or skill.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Leadership & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1052",
    "word": "Flagrant",
    "partOfSpeech": "adjective",
    "definition": "Conspicuously or obviously offensive.",
    "difficulty": "Foundational",
    "topicTags": [
      "Behavior & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1053",
    "word": "Flippant",
    "partOfSpeech": "adjective",
    "definition": "Not showing a serious or respectful attitude.",
    "difficulty": "Foundational",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1054",
    "word": "Flourish",
    "partOfSpeech": "verb",
    "definition": "To grow or develop in a healthy or vigorous way.",
    "difficulty": "Foundational",
    "topicTags": [
      "Life & Action"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1055",
    "word": "Foment",
    "partOfSpeech": "verb",
    "definition": "To instigate or stir up an undesirable sentiment or action.",
    "difficulty": "Advanced",
    "topicTags": [
      "Governance & Politics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1056",
    "word": "Forbearance",
    "partOfSpeech": "noun",
    "definition": "Patient self-control; restraint and tolerance.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Ethics & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1057",
    "word": "Formidable",
    "partOfSpeech": "adjective",
    "definition": "Inspiring fear or respect through being impressively powerful or capable.",
    "difficulty": "Foundational",
    "topicTags": [
      "General"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1058",
    "word": "Foster",
    "partOfSpeech": "verb",
    "definition": "To encourage or promote the development of something.",
    "difficulty": "Foundational",
    "topicTags": [
      "Leadership & Management"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1059",
    "word": "Fractious",
    "partOfSpeech": "adjective",
    "definition": "Irritable and quarrelsome; difficult to control.",
    "difficulty": "Advanced",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1060",
    "word": "Frankness",
    "partOfSpeech": "noun",
    "definition": "The quality of being open, honest, and direct in speech.",
    "difficulty": "Foundational",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1061",
    "word": "Frugal",
    "partOfSpeech": "adjective",
    "definition": "Sparing or economical with regard to money or food.",
    "difficulty": "Foundational",
    "topicTags": [
      "Economics & Life"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1062",
    "word": "Futile",
    "partOfSpeech": "adjective",
    "definition": "Incapable of producing any useful result; pointless.",
    "difficulty": "Foundational",
    "topicTags": [
      "Action & Logic"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1063",
    "word": "Gainsay",
    "partOfSpeech": "verb",
    "definition": "To deny or contradict a fact or statement.",
    "difficulty": "Advanced",
    "topicTags": [
      "Argumentation & Logic"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1064",
    "word": "Galvanize",
    "partOfSpeech": "verb",
    "definition": "To shock or excite someone into taking sudden action.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Leadership & Action"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1065",
    "word": "Genial",
    "partOfSpeech": "adjective",
    "definition": "Friendly and cheerful.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1066",
    "word": "Germane",
    "partOfSpeech": "adjective",
    "definition": "Relevant to a subject under consideration.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Logic & Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1067",
    "word": "Gibe",
    "partOfSpeech": "noun",
    "definition": "An insulting or mocking remark; a taunt.",
    "difficulty": "Advanced",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1068",
    "word": "Glib",
    "partOfSpeech": "adjective",
    "definition": "Fluent and voluble but insincere and shallow.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1069",
    "word": "Grandiloquent",
    "partOfSpeech": "adjective",
    "definition": "Pompous or extravagant in language, style, or manner.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric & Writing"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1070",
    "word": "Guile",
    "partOfSpeech": "noun",
    "definition": "Sly or cunning intelligence; deceitfulness.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Strategy & Ethics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1071",
    "word": "Hackneyed",
    "partOfSpeech": "adjective",
    "definition": "Lacking significance through having been overused; trite.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Writing & Literature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1072",
    "word": "Halcyon",
    "partOfSpeech": "adjective",
    "definition": "Denoting a period of time in the past that was idyllically happy.",
    "difficulty": "Advanced",
    "topicTags": [
      "History & Literature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1073",
    "word": "Hapless",
    "partOfSpeech": "adjective",
    "definition": "Unfortunate; unlucky.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Life & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1074",
    "word": "Harangue",
    "partOfSpeech": "noun",
    "definition": "A lengthy and aggressive speech.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1075",
    "word": "Harbinger",
    "partOfSpeech": "noun",
    "definition": "A person or thing that announces or signals the approach of another.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Logic & Nature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1076",
    "word": "Haughty",
    "partOfSpeech": "adjective",
    "definition": "Arrogantly superior and disdainful.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1077",
    "word": "Hedonism",
    "partOfSpeech": "noun",
    "definition": "The pursuit of pleasure; sensual self-indulgence.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Philosophy & Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1078",
    "word": "Hegemony",
    "partOfSpeech": "noun",
    "definition": "Leadership or dominance by one group over others.",
    "difficulty": "Advanced",
    "topicTags": [
      "Governance & Politics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1079",
    "word": "Heuristic",
    "partOfSpeech": "adjective",
    "definition": "Enabling a person to discover or learn something for themselves.",
    "difficulty": "Advanced",
    "topicTags": [
      "Cognition & Science"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1080",
    "word": "Histrionic",
    "partOfSpeech": "adjective",
    "definition": "Overly theatrical or melodramatic in character or style.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology & Arts"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1081",
    "word": "Hubris",
    "partOfSpeech": "noun",
    "definition": "Excessive pride or self-confidence.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1082",
    "word": "Iconoclast",
    "partOfSpeech": "noun",
    "definition": "A person who attacks cherished beliefs or traditional institutions.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Culture & Philosophy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1083",
    "word": "Idiosyncrasy",
    "partOfSpeech": "noun",
    "definition": "A mode of behavior or way of thought peculiar to an individual.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1084",
    "word": "Ignominious",
    "partOfSpeech": "adjective",
    "definition": "Deserving or causing public disgrace or shame.",
    "difficulty": "Advanced",
    "topicTags": [
      "Social Dynamics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1085",
    "word": "Illicit",
    "partOfSpeech": "adjective",
    "definition": "Forbidden by law, rules, or custom.",
    "difficulty": "Foundational",
    "topicTags": [
      "Law & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1086",
    "word": "Impartial",
    "partOfSpeech": "adjective",
    "definition": "Treating all rivals or disputants equally; fair and just.",
    "difficulty": "Foundational",
    "topicTags": [
      "Law & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1087",
    "word": "Impasse",
    "partOfSpeech": "noun",
    "definition": "A situation in which no progress is possible; deadlock.",
    "difficulty": "Foundational",
    "topicTags": [
      "Negotiation & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1088",
    "word": "Impeccable",
    "partOfSpeech": "adjective",
    "definition": "In accordance with the highest standards of propriety; faultless.",
    "difficulty": "Foundational",
    "topicTags": [
      "Standards & Work"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1089",
    "word": "Impecunious",
    "partOfSpeech": "adjective",
    "definition": "Having little or no money; poor.",
    "difficulty": "Advanced",
    "topicTags": [
      "Economics & Society"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1090",
    "word": "Impede",
    "partOfSpeech": "verb",
    "definition": "To delay or prevent someone or something by obstructing them.",
    "difficulty": "Foundational",
    "topicTags": [
      "Action & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1091",
    "word": "Imperative",
    "partOfSpeech": "adjective",
    "definition": "Of vital importance; crucial.",
    "difficulty": "Foundational",
    "topicTags": [
      "Leadership & Action"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1092",
    "word": "Imperious",
    "partOfSpeech": "adjective",
    "definition": "Assuming power or authority without justification.",
    "difficulty": "Advanced",
    "topicTags": [
      "Leadership & Personality"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1093",
    "word": "Impetuous",
    "partOfSpeech": "adjective",
    "definition": "Acting or done quickly and without thought or care.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1094",
    "word": "Implicit",
    "partOfSpeech": "adjective",
    "definition": "Implied though not plainly expressed.",
    "difficulty": "Foundational",
    "topicTags": [
      "Communication & Writing"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1095",
    "word": "Imply",
    "partOfSpeech": "verb",
    "definition": "To strongly suggest the truth of something not expressly stated.",
    "difficulty": "Foundational",
    "topicTags": [
      "Communication & Logic"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1096",
    "word": "Inane",
    "partOfSpeech": "adjective",
    "definition": "Silly; stupid or senseless.",
    "difficulty": "Foundational",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1097",
    "word": "Inchoate",
    "partOfSpeech": "adjective",
    "definition": "Just begun and so not fully formed or developed.",
    "difficulty": "Advanced",
    "topicTags": [
      "Development & Structure"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1098",
    "word": "Incisive",
    "partOfSpeech": "adjective",
    "definition": "Intelligently analytical and clear-thinking.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Cognition & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1099",
    "word": "Incongruous",
    "partOfSpeech": "adjective",
    "definition": "Not in harmony or keeping with the surroundings.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Logic & Aesthetics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1100",
    "word": "Incontrovertible",
    "partOfSpeech": "adjective",
    "definition": "Not able to be denied or disputed; indisputable.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Logic & Argumentation"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1101",
    "word": "Incorrigible",
    "partOfSpeech": "adjective",
    "definition": "Not able to be corrected, improved, or reformed.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1102",
    "word": "Indefatigable",
    "partOfSpeech": "adjective",
    "definition": "Persisting tirelessly in an effort or cause.",
    "difficulty": "Advanced",
    "topicTags": [
      "Leadership & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1103",
    "word": "Indict",
    "partOfSpeech": "verb",
    "definition": "To formally accuse of or charge with a serious crime.",
    "difficulty": "Foundational",
    "topicTags": [
      "Law & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1104",
    "word": "Indifferent",
    "partOfSpeech": "adjective",
    "definition": "Having no particular interest or sympathy; unconcerned.",
    "difficulty": "Foundational",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1105",
    "word": "Indigenous",
    "partOfSpeech": "adjective",
    "definition": "Originating or occurring naturally in a particular place; native.",
    "difficulty": "Foundational",
    "topicTags": [
      "Culture & Biology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1106",
    "word": "Indigent",
    "partOfSpeech": "adjective",
    "definition": "Poor; needy.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Economics & Society"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1107",
    "word": "Indolent",
    "partOfSpeech": "adjective",
    "definition": "Wanting to avoid activity or exertion; lazy.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1108",
    "word": "Indomitable",
    "partOfSpeech": "adjective",
    "definition": "Impossible to subdue or defeat.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Leadership & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1109",
    "word": "Indubitable",
    "partOfSpeech": "adjective",
    "definition": "Impossible to doubt; unquestionable.",
    "difficulty": "Advanced",
    "topicTags": [
      "Logic & Reasoning"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1110",
    "word": "Ineluctable",
    "partOfSpeech": "adjective",
    "definition": "Unable to be resisted or avoided; inescapable.",
    "difficulty": "Advanced",
    "topicTags": [
      "Philosophy & Logic"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1111",
    "word": "Inertia",
    "partOfSpeech": "noun",
    "definition": "A tendency to do nothing or to remain unchanged.",
    "difficulty": "Foundational",
    "topicTags": [
      "Physics & Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1112",
    "word": "Inexorable",
    "partOfSpeech": "adjective",
    "definition": "Impossible to stop or prevent.",
    "difficulty": "Advanced",
    "topicTags": [
      "Philosophy & Nature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1113",
    "word": "Ingenious",
    "partOfSpeech": "adjective",
    "definition": "Clever, original, and inventive.",
    "difficulty": "Foundational",
    "topicTags": [
      "Cognition & Invention"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1114",
    "word": "Ingenuous",
    "partOfSpeech": "adjective",
    "definition": "Innocent and unsuspecting; naive.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1115",
    "word": "Inimical",
    "partOfSpeech": "adjective",
    "definition": "Tending to obstruct or harm; hostile.",
    "difficulty": "Advanced",
    "topicTags": [
      "Nature & Relationships"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1116",
    "word": "Iniquity",
    "partOfSpeech": "noun",
    "definition": "Gross injustice or wickedness; a sinful act.",
    "difficulty": "Advanced",
    "topicTags": [
      "Ethics & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1117",
    "word": "Innocuous",
    "partOfSpeech": "adjective",
    "definition": "Not harmful or offensive.",
    "difficulty": "Foundational",
    "topicTags": [
      "General"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1118",
    "word": "Insidious",
    "partOfSpeech": "adjective",
    "definition": "Proceeding in a subtle way with harmful effects.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Governance & Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1119",
    "word": "Insinuate",
    "partOfSpeech": "verb",
    "definition": "To suggest or hint something bad in an indirect way.",
    "difficulty": "Foundational",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1120",
    "word": "Insipid",
    "partOfSpeech": "adjective",
    "definition": "Lacking flavor, vigor, or interest.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Description"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1121",
    "word": "Insolence",
    "partOfSpeech": "noun",
    "definition": "Rude and disrespectful behavior.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1122",
    "word": "Insouciant",
    "partOfSpeech": "adjective",
    "definition": "Free from worry; carefree and nonchalant.",
    "difficulty": "Advanced",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1123",
    "word": "Instigate",
    "partOfSpeech": "verb",
    "definition": "To bring about or initiate an action or event.",
    "difficulty": "Foundational",
    "topicTags": [
      "Action & Cause"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1124",
    "word": "Insular",
    "partOfSpeech": "adjective",
    "definition": "Ignorant of or uninterested in cultures or ideas outside one's experience.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Culture & Society"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1125",
    "word": "Integrity",
    "partOfSpeech": "noun",
    "definition": "The quality of being honest and having strong moral principles.",
    "difficulty": "Foundational",
    "topicTags": [
      "Ethics & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1126",
    "word": "Intransigent",
    "partOfSpeech": "adjective",
    "definition": "Uncompromising; refusing to agree or change one's views.",
    "difficulty": "Advanced",
    "topicTags": [
      "Personality & Politics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1127",
    "word": "Intrepid",
    "partOfSpeech": "adjective",
    "definition": "Fearless; adventurous.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1128",
    "word": "Intrinsic",
    "partOfSpeech": "adjective",
    "definition": "Belonging naturally; essential.",
    "difficulty": "Foundational",
    "topicTags": [
      "Philosophy & Logic"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1129",
    "word": "Inundate",
    "partOfSpeech": "verb",
    "definition": "To overwhelm someone with things or people to be dealt with.",
    "difficulty": "Foundational",
    "topicTags": [
      "Management & Action"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1130",
    "word": "Inured",
    "partOfSpeech": "adjective",
    "definition": "Accustomed to something unpleasant.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology & Life"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1131",
    "word": "Invective",
    "partOfSpeech": "noun",
    "definition": "Insulting, abusive, or highly critical language.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1132",
    "word": "Inveigle",
    "partOfSpeech": "verb",
    "definition": "To persuade someone by means of deception or flattery.",
    "difficulty": "Advanced",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1133",
    "word": "Inveterate",
    "partOfSpeech": "adjective",
    "definition": "Having a particular habit or interest that is long-established.",
    "difficulty": "Advanced",
    "topicTags": [
      "Personality & Behavior"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1134",
    "word": "Invidious",
    "partOfSpeech": "adjective",
    "definition": "Likely to arouse or incur resentment or anger.",
    "difficulty": "Advanced",
    "topicTags": [
      "Social Dynamics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1135",
    "word": "Irascible",
    "partOfSpeech": "adjective",
    "definition": "Having or showing a tendency to be easily angered.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1136",
    "word": "Irrefutable",
    "partOfSpeech": "adjective",
    "definition": "Impossible to deny or disprove.",
    "difficulty": "Foundational",
    "topicTags": [
      "Logic & Argumentation"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1137",
    "word": "Irreverent",
    "partOfSpeech": "adjective",
    "definition": "Showing a lack of respect for people or things taken seriously.",
    "difficulty": "Foundational",
    "topicTags": [
      "Culture & Personality"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1138",
    "word": "Itinerant",
    "partOfSpeech": "adjective",
    "definition": "Traveling from place to place.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Geography & Work"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1139",
    "word": "Jargon",
    "partOfSpeech": "noun",
    "definition": "Special words used by a profession that are difficult for others to understand.",
    "difficulty": "Foundational",
    "topicTags": [
      "Language & Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1140",
    "word": "Jettison",
    "partOfSpeech": "verb",
    "definition": "To discard or cast off something unneeded or burdensome.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Action & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1141",
    "word": "Jocund",
    "partOfSpeech": "adjective",
    "definition": "Cheerful and lighthearted.",
    "difficulty": "Advanced",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1142",
    "word": "Keen",
    "partOfSpeech": "adjective",
    "definition": "Having or showing eagerness or enthusiasm; sharp.",
    "difficulty": "Foundational",
    "topicTags": [
      "Psychology & Perception"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1143",
    "word": "Kindle",
    "partOfSpeech": "verb",
    "definition": "To arouse or inspire an emotion or feeling.",
    "difficulty": "Foundational",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1144",
    "word": "Kudos",
    "partOfSpeech": "noun",
    "definition": "Praise and honor received for an achievement.",
    "difficulty": "Foundational",
    "topicTags": [
      "Social Dynamics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1145",
    "word": "Laconic",
    "partOfSpeech": "adjective",
    "definition": "Using very few words; concise.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1146",
    "word": "Lament",
    "partOfSpeech": "verb",
    "definition": "To express passionate grief or sorrow.",
    "difficulty": "Foundational",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1147",
    "word": "Languid",
    "partOfSpeech": "adjective",
    "definition": "Displaying or requiring little energy or exertion.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Behavior & State"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1148",
    "word": "Lassitude",
    "partOfSpeech": "noun",
    "definition": "A state of physical or mental weariness; lack of energy.",
    "difficulty": "Advanced",
    "topicTags": [
      "Psychology & Health"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1149",
    "word": "Latent",
    "partOfSpeech": "adjective",
    "definition": "Existing but not yet developed or manifest; hidden.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Science & Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1150",
    "word": "Laudable",
    "partOfSpeech": "adjective",
    "definition": "Deserving praise and commendation.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Ethics & Behavior"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1151",
    "word": "Lavish",
    "partOfSpeech": "adjective",
    "definition": "Sumptuously rich, elaborate, or luxurious.",
    "difficulty": "Foundational",
    "topicTags": [
      "Description"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1152",
    "word": "Lexicon",
    "partOfSpeech": "noun",
    "definition": "The vocabulary of a person, language, or branch of knowledge.",
    "difficulty": "Foundational",
    "topicTags": [
      "Language & Writing"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1153",
    "word": "Libel",
    "partOfSpeech": "noun",
    "definition": "A published false statement that is damaging to a reputation.",
    "difficulty": "Foundational",
    "topicTags": [
      "Law & Media"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1154",
    "word": "Limpid",
    "partOfSpeech": "adjective",
    "definition": "Completely clear; transparent.",
    "difficulty": "Advanced",
    "topicTags": [
      "Writing & Nature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1155",
    "word": "Lionize",
    "partOfSpeech": "verb",
    "definition": "To treat a person as a celebrity or with great importance.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Social Dynamics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1156",
    "word": "Litany",
    "partOfSpeech": "noun",
    "definition": "A tedious recital or repetitive series.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1157",
    "word": "Lithe",
    "partOfSpeech": "adjective",
    "definition": "Thin, supple, and graceful.",
    "difficulty": "Foundational",
    "topicTags": [
      "Physical"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1158",
    "word": "Livid",
    "partOfSpeech": "adjective",
    "definition": "Furiously angry.",
    "difficulty": "Foundational",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1159",
    "word": "Lugubrious",
    "partOfSpeech": "adjective",
    "definition": "Looking or sounding sad and dismal.",
    "difficulty": "Advanced",
    "topicTags": [
      "Literature & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1160",
    "word": "Lurid",
    "partOfSpeech": "adjective",
    "definition": "Very vivid in color, creating an unpleasantly harsh effect.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Media & Description"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1161",
    "word": "Mantle",
    "partOfSpeech": "noun",
    "definition": "An important role or responsibility that passes from one person to another.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Leadership & History"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1162",
    "word": "Maudlin",
    "partOfSpeech": "adjective",
    "definition": "Self-pityingly or tearfully sentimental.",
    "difficulty": "Advanced",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1163",
    "word": "Maverick",
    "partOfSpeech": "noun",
    "definition": "An unorthodox or independent-minded person.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Leadership & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1164",
    "word": "Meander",
    "partOfSpeech": "verb",
    "definition": "To follow a winding course or wander aimlessly.",
    "difficulty": "Foundational",
    "topicTags": [
      "Action & Nature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1165",
    "word": "Mellifluous",
    "partOfSpeech": "adjective",
    "definition": "Sweet or musical; pleasant to hear.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric & Music"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1166",
    "word": "Mendacious",
    "partOfSpeech": "adjective",
    "definition": "Not telling the truth; lying.",
    "difficulty": "Advanced",
    "topicTags": [
      "Ethics & Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1167",
    "word": "Mercenary",
    "partOfSpeech": "adjective",
    "definition": "Primarily concerned with making money at the expense of ethics.",
    "difficulty": "Foundational",
    "topicTags": [
      "Ethics & Business"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1168",
    "word": "Mercurial",
    "partOfSpeech": "adjective",
    "definition": "Subject to sudden or unpredictable changes of mood or mind.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1169",
    "word": "Meretricious",
    "partOfSpeech": "adjective",
    "definition": "Apparently attractive but having in reality no value or integrity.",
    "difficulty": "Advanced",
    "topicTags": [
      "Aesthetics & Ethics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1170",
    "word": "Metaphor",
    "partOfSpeech": "noun",
    "definition": "A figure of speech in which a word or phrase is applied to an object.",
    "difficulty": "Foundational",
    "topicTags": [
      "Writing & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1171",
    "word": "Milieu",
    "partOfSpeech": "noun",
    "definition": "A person's social environment.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Sociology & Environment"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1172",
    "word": "Mitigate",
    "partOfSpeech": "verb",
    "definition": "To make less severe, serious, or painful.",
    "difficulty": "Foundational",
    "topicTags": [
      "Action & Management"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1173",
    "word": "Mnemonic",
    "partOfSpeech": "noun",
    "definition": "A device such as a pattern of letters that assists in remembering.",
    "difficulty": "Foundational",
    "topicTags": [
      "Cognition & Learning"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1174",
    "word": "Modicum",
    "partOfSpeech": "noun",
    "definition": "A small quantity of a particular thing.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Quantitative"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1175",
    "word": "Mollify",
    "partOfSpeech": "verb",
    "definition": "To appease the anger or anxiety of someone.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Communication & Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1176",
    "word": "Morose",
    "partOfSpeech": "adjective",
    "definition": "Sullen and ill-tempered.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1177",
    "word": "Motley",
    "partOfSpeech": "adjective",
    "definition": "Incongruously varied in appearance or character.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Description & Society"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1178",
    "word": "Mundane",
    "partOfSpeech": "adjective",
    "definition": "Lacking interest or excitement; dull; ordinary.",
    "difficulty": "Foundational",
    "topicTags": [
      "General"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1179",
    "word": "Munificent",
    "partOfSpeech": "adjective",
    "definition": "More generous than is usual or necessary.",
    "difficulty": "Advanced",
    "topicTags": [
      "Personality & Ethics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1180",
    "word": "Myopic",
    "partOfSpeech": "adjective",
    "definition": "Lacking imagination, foresight, or intellectual insight.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Cognition & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1181",
    "word": "Myriad",
    "partOfSpeech": "noun",
    "definition": "A countless or extremely great number.",
    "difficulty": "Foundational",
    "topicTags": [
      "Quantitative"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1182",
    "word": "Nadir",
    "partOfSpeech": "noun",
    "definition": "The lowest point in the fortunes of a person or organization.",
    "difficulty": "Intermediate",
    "topicTags": [
      "General"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1183",
    "word": "Nefarious",
    "partOfSpeech": "adjective",
    "definition": "Wicked or criminal.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Ethics & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1184",
    "word": "Neologism",
    "partOfSpeech": "noun",
    "definition": "A newly coined word or expression.",
    "difficulty": "Advanced",
    "topicTags": [
      "Language & Writing"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1185",
    "word": "Neophyte",
    "partOfSpeech": "noun",
    "definition": "A person who is new to a subject, skill, or belief.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Learning & Society"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1186",
    "word": "Nettle",
    "partOfSpeech": "verb",
    "definition": "To irritate or annoy someone.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1187",
    "word": "Nihilism",
    "partOfSpeech": "noun",
    "definition": "The rejection of all religious and moral principles.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Philosophy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1188",
    "word": "Noxious",
    "partOfSpeech": "adjective",
    "definition": "Harmful, poisonous, or very unpleasant.",
    "difficulty": "Foundational",
    "topicTags": [
      "Science & Nature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1189",
    "word": "Nuance",
    "partOfSpeech": "noun",
    "definition": "A subtle difference in or shade of meaning or expression.",
    "difficulty": "Foundational",
    "topicTags": [
      "Communication & Writing"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1190",
    "word": "Oblique",
    "partOfSpeech": "adjective",
    "definition": "Not explicit or done in a direct way.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Communication & Spatial"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1191",
    "word": "Oblivion",
    "partOfSpeech": "noun",
    "definition": "The state of being unaware or unconscious of what is happening.",
    "difficulty": "Foundational",
    "topicTags": [
      "Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1192",
    "word": "Obsolete",
    "partOfSpeech": "adjective",
    "definition": "No longer produced or used; out of date.",
    "difficulty": "Foundational",
    "topicTags": [
      "Technology & History"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1193",
    "word": "Obstinate",
    "partOfSpeech": "adjective",
    "definition": "Stubbornly refusing to change one's opinion or course of action.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1194",
    "word": "Obstreperous",
    "partOfSpeech": "adjective",
    "definition": "Noisy and difficult to control.",
    "difficulty": "Advanced",
    "topicTags": [
      "Behavior"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1195",
    "word": "Obtuse",
    "partOfSpeech": "adjective",
    "definition": "Annoyingly insensitive or slow to understand.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Cognition & Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1196",
    "word": "Occlude",
    "partOfSpeech": "verb",
    "definition": "To stop, close, or obstruct an opening or passage.",
    "difficulty": "Advanced",
    "topicTags": [
      "Science & Medicine"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1197",
    "word": "Odious",
    "partOfSpeech": "adjective",
    "definition": "Extremely unpleasant; repulsive.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Emotion & Description"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1198",
    "word": "Officious",
    "partOfSpeech": "adjective",
    "definition": "Assertive of authority in an annoyingly domineering way.",
    "difficulty": "Advanced",
    "topicTags": [
      "Leadership & Behavior"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1199",
    "word": "Ominous",
    "partOfSpeech": "adjective",
    "definition": "Giving the impression that something bad is going to happen.",
    "difficulty": "Foundational",
    "topicTags": [
      "General"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1200",
    "word": "Onerous",
    "partOfSpeech": "adjective",
    "definition": "Involving an amount of effort that is oppressively burdensome.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Work & Management"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1201",
    "word": "Opaque",
    "partOfSpeech": "adjective",
    "definition": "Not transparent; hard to understand.",
    "difficulty": "Foundational",
    "topicTags": [
      "Physical & Logic"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1202",
    "word": "Opulent",
    "partOfSpeech": "adjective",
    "definition": "Ostentatiously rich and luxurious or lavish.",
    "difficulty": "Foundational",
    "topicTags": [
      "Description"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1203",
    "word": "Orator",
    "partOfSpeech": "noun",
    "definition": "A public speaker, especially one who is eloquent or skilled.",
    "difficulty": "Foundational",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1204",
    "word": "Paean",
    "partOfSpeech": "noun",
    "definition": "A song or statement of praise or triumph.",
    "difficulty": "Advanced",
    "topicTags": [
      "Literature & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1205",
    "word": "Paltry",
    "partOfSpeech": "adjective",
    "definition": "Small or meager in amount; petty or trivial.",
    "difficulty": "Foundational",
    "topicTags": [
      "Quantitative"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1206",
    "word": "Panegyric",
    "partOfSpeech": "noun",
    "definition": "A public speech or published text in praise of someone.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric & Writing"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1207",
    "word": "Parable",
    "partOfSpeech": "noun",
    "definition": "A simple story used to illustrate a moral or spiritual lesson.",
    "difficulty": "Foundational",
    "topicTags": [
      "Literature & Ethics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1208",
    "word": "Paradigm",
    "partOfSpeech": "noun",
    "definition": "A typical example or pattern of something; a model.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Logic & Philosophy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1209",
    "word": "Paradox",
    "partOfSpeech": "noun",
    "definition": "A seemingly absurd or self-contradictory statement that may be true.",
    "difficulty": "Foundational",
    "topicTags": [
      "Logic & Philosophy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1210",
    "word": "Paragon",
    "partOfSpeech": "noun",
    "definition": "A person or thing regarded as a perfect example of a quality.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Standards & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1211",
    "word": "Paramount",
    "partOfSpeech": "adjective",
    "definition": "More important than anything else; supreme.",
    "difficulty": "Foundational",
    "topicTags": [
      "Leadership & Priority"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1212",
    "word": "Pariah",
    "partOfSpeech": "noun",
    "definition": "An outcast.",
    "difficulty": "Foundational",
    "topicTags": [
      "Social Dynamics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1213",
    "word": "Parsimonious",
    "partOfSpeech": "adjective",
    "definition": "Unwilling to spend money or use resources; stingy.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Economics & Personality"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1214",
    "word": "Partisan",
    "partOfSpeech": "adjective",
    "definition": "Prejudiced in favor of a particular cause.",
    "difficulty": "Foundational",
    "topicTags": [
      "Politics & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1215",
    "word": "Paucity",
    "partOfSpeech": "noun",
    "definition": "The presence of something in small or insufficient quantities.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Quantitative"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1216",
    "word": "Pejorative",
    "partOfSpeech": "adjective",
    "definition": "Expressing contempt or disapproval.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Linguistics & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1217",
    "word": "Penchant",
    "partOfSpeech": "noun",
    "definition": "A strong or habitual liking for something or tendency.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1218",
    "word": "Penitent",
    "partOfSpeech": "adjective",
    "definition": "Feeling or showing sorrow and regret for wrongdoing.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1219",
    "word": "Penury",
    "partOfSpeech": "noun",
    "definition": "Extreme poverty; destitution.",
    "difficulty": "Advanced",
    "topicTags": [
      "Economics & Society"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1220",
    "word": "Peremptory",
    "partOfSpeech": "adjective",
    "definition": "Insisting on immediate attention or obedience.",
    "difficulty": "Advanced",
    "topicTags": [
      "Leadership & Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1221",
    "word": "Perennial",
    "partOfSpeech": "adjective",
    "definition": "Lasting or existing for a long or infinite time.",
    "difficulty": "Foundational",
    "topicTags": [
      "Time & Nature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1222",
    "word": "Perfidious",
    "partOfSpeech": "adjective",
    "definition": "Deceitful and untrustworthy.",
    "difficulty": "Advanced",
    "topicTags": [
      "Ethics & Relationships"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1223",
    "word": "Perilous",
    "partOfSpeech": "adjective",
    "definition": "Full of danger or risk.",
    "difficulty": "Foundational",
    "topicTags": [
      "General"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1224",
    "word": "Pernicious",
    "partOfSpeech": "adjective",
    "definition": "Having a harmful effect, especially in a subtle way.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Society & Health"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1225",
    "word": "Pertinent",
    "partOfSpeech": "adjective",
    "definition": "Relevant or applicable to a particular matter; apposite.",
    "difficulty": "Foundational",
    "topicTags": [
      "Logic & Writing"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1226",
    "word": "Petulant",
    "partOfSpeech": "adjective",
    "definition": "Childishly sulky or bad-tempered.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1227",
    "word": "Phlegmatic",
    "partOfSpeech": "adjective",
    "definition": "Having an unemotional and stolidly calm disposition.",
    "difficulty": "Advanced",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1228",
    "word": "Pious",
    "partOfSpeech": "adjective",
    "definition": "Devoutly religious or making a hypocritical display of virtue.",
    "difficulty": "Foundational",
    "topicTags": [
      "Ethics & Culture"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1229",
    "word": "Pithy",
    "partOfSpeech": "adjective",
    "definition": "Concise and forcefully expressive.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Writing & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1230",
    "word": "Placater",
    "partOfSpeech": "noun",
    "definition": "A person who pacifies or soothes others.",
    "difficulty": "Foundational",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1231",
    "word": "Placidity",
    "partOfSpeech": "noun",
    "definition": "The quality of being calm, peaceful, or untroubled.",
    "difficulty": "Foundational",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1232",
    "word": "Plagiarize",
    "partOfSpeech": "verb",
    "definition": "To take the work or ideas of someone else and pass them off as one's own.",
    "difficulty": "Foundational",
    "topicTags": [
      "Ethics & Writing"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1233",
    "word": "Platitude",
    "partOfSpeech": "noun",
    "definition": "A remark or statement that has been used too often to be interesting.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Rhetoric & Writing"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1234",
    "word": "Plethora",
    "partOfSpeech": "noun",
    "definition": "A large or excessive amount of something.",
    "difficulty": "Foundational",
    "topicTags": [
      "Quantitative"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1235",
    "word": "Poignant",
    "partOfSpeech": "adjective",
    "definition": "Evoking a keen sense of sadness or regret.",
    "difficulty": "Foundational",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1236",
    "word": "Polemic",
    "partOfSpeech": "noun",
    "definition": "A strong verbal or written attack on someone or something.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric & Writing"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1237",
    "word": "Precarious",
    "partOfSpeech": "adjective",
    "definition": "Not securely held in position; dangerously likely to fall.",
    "difficulty": "Foundational",
    "topicTags": [
      "State & Safety"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1238",
    "word": "Precedent",
    "partOfSpeech": "noun",
    "definition": "An earlier event that is regarded as an example or guide.",
    "difficulty": "Foundational",
    "topicTags": [
      "Law & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1239",
    "word": "Precept",
    "partOfSpeech": "noun",
    "definition": "A general rule intended to regulate behavior or thought.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Ethics & Philosophy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1240",
    "word": "Preclude",
    "partOfSpeech": "verb",
    "definition": "To prevent from happening; make impossible.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Logic & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1241",
    "word": "Preeminent",
    "partOfSpeech": "adjective",
    "definition": "Surpassing all others; very distinguished in some way.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Leadership & Career"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1242",
    "word": "Presumptuous",
    "partOfSpeech": "adjective",
    "definition": "Failing to observe the limits of what is permitted or appropriate.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1243",
    "word": "Pretentious",
    "partOfSpeech": "adjective",
    "definition": "Attempting to impress by affecting greater importance than possessed.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Culture"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1244",
    "word": "Preternatural",
    "partOfSpeech": "adjective",
    "definition": "Beyond what is normal or natural.",
    "difficulty": "Advanced",
    "topicTags": [
      "Nature & Description"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1245",
    "word": "Prevaricate",
    "partOfSpeech": "verb",
    "definition": "To speak or act in an evasive way.",
    "difficulty": "Advanced",
    "topicTags": [
      "Communication & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1246",
    "word": "Prodigal",
    "partOfSpeech": "adjective",
    "definition": "Spending money or resources freely and recklessly.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Behavior & Economics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1247",
    "word": "Prodigious",
    "partOfSpeech": "adjective",
    "definition": "Remarkably or impressively great in extent, size, or degree.",
    "difficulty": "Foundational",
    "topicTags": [
      "Quantitative"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1248",
    "word": "Profane",
    "partOfSpeech": "adjective",
    "definition": "Relating or devoted to that which is not sacred; irreverent.",
    "difficulty": "Foundational",
    "topicTags": [
      "Culture & Language"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1249",
    "word": "Profound",
    "partOfSpeech": "adjective",
    "definition": "Very great or intense; having great knowledge or insight.",
    "difficulty": "Foundational",
    "topicTags": [
      "Philosophy & Cognition"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1250",
    "word": "Profligate",
    "partOfSpeech": "adjective",
    "definition": "Recklessly extravagant or wasteful in the use of resources.",
    "difficulty": "Advanced",
    "topicTags": [
      "Behavior & Economics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1251",
    "word": "Prolix",
    "partOfSpeech": "adjective",
    "definition": "Using or containing too many words; tediously lengthy.",
    "difficulty": "Advanced",
    "topicTags": [
      "Writing & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1252",
    "word": "Promulgate",
    "partOfSpeech": "verb",
    "definition": "To promote or make widely known an idea or cause.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Governance & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1253",
    "word": "Propriety",
    "partOfSpeech": "noun",
    "definition": "Conformity to conventionally accepted standards of behavior.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Social Dynamics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1254",
    "word": "Prosaic",
    "partOfSpeech": "adjective",
    "definition": "Having the style or diction commonplace or unromantic; dull.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Literature & Description"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1255",
    "word": "Protagonist",
    "partOfSpeech": "noun",
    "definition": "The leading character in a text, play, or situation.",
    "difficulty": "Foundational",
    "topicTags": [
      "Literature & Storytelling"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1256",
    "word": "Protract",
    "partOfSpeech": "verb",
    "definition": "To prolong in time or space.",
    "difficulty": "Foundational",
    "topicTags": [
      "Action & Time"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1257",
    "word": "Providential",
    "partOfSpeech": "adjective",
    "definition": "Occurring at a favorable time; opportune.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Time & Life"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1258",
    "word": "Provincial",
    "partOfSpeech": "adjective",
    "definition": "Unsophisticated or narrow-minded.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Culture & Society"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1259",
    "word": "Puerile",
    "partOfSpeech": "adjective",
    "definition": "Childishly silly and trivial.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Behavior"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1260",
    "word": "Punctilious",
    "partOfSpeech": "adjective",
    "definition": "Showing great attention to detail or correct behavior.",
    "difficulty": "Advanced",
    "topicTags": [
      "Standards & Behavior"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1261",
    "word": "Pungent",
    "partOfSpeech": "adjective",
    "definition": "Having a sharply strong taste or smell; biting in tone.",
    "difficulty": "Foundational",
    "topicTags": [
      "Senses & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1262",
    "word": "Quagmire",
    "partOfSpeech": "noun",
    "definition": "An awkward, complex, or hazardous situation.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Problem Solving"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1263",
    "word": "Quandary",
    "partOfSpeech": "noun",
    "definition": "A state of perplexity or uncertainty over what to do.",
    "difficulty": "Foundational",
    "topicTags": [
      "Cognition & Decision"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1264",
    "word": "Quell",
    "partOfSpeech": "verb",
    "definition": "To put an end to a rebellion or disorder; suppress.",
    "difficulty": "Foundational",
    "topicTags": [
      "Governance & Action"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1265",
    "word": "Querulous",
    "partOfSpeech": "adjective",
    "definition": "Complaining in a petulant or whining manner.",
    "difficulty": "Advanced",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1266",
    "word": "Quixotic",
    "partOfSpeech": "adjective",
    "definition": "Exceedingly idealistic; unrealistic and impractical.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Philosophy & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1267",
    "word": "Quotidian",
    "partOfSpeech": "adjective",
    "definition": "Of or occurring every day; daily and ordinary.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Time & Life"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1268",
    "word": "Rancor",
    "partOfSpeech": "noun",
    "definition": "Bitterness or resentfulness, especially long-standing.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1269",
    "word": "Rapprochement",
    "partOfSpeech": "noun",
    "definition": "An establishment or resumption of harmonious relations.",
    "difficulty": "Advanced",
    "topicTags": [
      "Governance & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1270",
    "word": "Ratiocination",
    "partOfSpeech": "noun",
    "definition": "The process of exact thinking; reasoning.",
    "difficulty": "Mastery",
    "topicTags": [
      "Logic & Philosophy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1271",
    "word": "Rationale",
    "partOfSpeech": "noun",
    "definition": "A set of reasons or a logical basis for a course of action.",
    "difficulty": "Foundational",
    "topicTags": [
      "Logic & Argumentation"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1272",
    "word": "Raucous",
    "partOfSpeech": "adjective",
    "definition": "Making or constituting a disturbingly harsh noise.",
    "difficulty": "Foundational",
    "topicTags": [
      "Sound & Description"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1273",
    "word": "Recalcitrant",
    "partOfSpeech": "adjective",
    "definition": "Having an obstinately uncooperative attitude toward authority.",
    "difficulty": "Advanced",
    "topicTags": [
      "Behavior"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1274",
    "word": "Recant",
    "partOfSpeech": "verb",
    "definition": "To say that one no longer holds an opinion or belief.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Argumentation & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1275",
    "word": "Recluse",
    "partOfSpeech": "noun",
    "definition": "A person who lives a solitary life and avoids other people.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Society"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1276",
    "word": "Recondite",
    "partOfSpeech": "adjective",
    "definition": "Little known; abstruse.",
    "difficulty": "Advanced",
    "topicTags": [
      "Cognition & Knowledge"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1277",
    "word": "Redoubtable",
    "partOfSpeech": "adjective",
    "definition": "Formidable, especially as an opponent.",
    "difficulty": "Advanced",
    "topicTags": [
      "Leadership & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1278",
    "word": "Redundant",
    "partOfSpeech": "adjective",
    "definition": "Not or no longer needed or useful; superfluous.",
    "difficulty": "Foundational",
    "topicTags": [
      "Writing & Logic"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1279",
    "word": "Refute",
    "partOfSpeech": "verb",
    "definition": "To prove a statement or theory to be wrong or false.",
    "difficulty": "Foundational",
    "topicTags": [
      "Logic & Argumentation"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1280",
    "word": "Relegate",
    "partOfSpeech": "verb",
    "definition": "To dismiss to an inferior rank or position.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Governance & Management"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1281",
    "word": "Relinquish",
    "partOfSpeech": "verb",
    "definition": "To voluntarily cease to keep or claim; give up.",
    "difficulty": "Foundational",
    "topicTags": [
      "Action & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1282",
    "word": "Remiss",
    "partOfSpeech": "adjective",
    "definition": "Lacking care or attention to duty; negligent.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Behavior & Standards"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1283",
    "word": "Remonstrate",
    "partOfSpeech": "verb",
    "definition": "To make a forcefully reproachful protest.",
    "difficulty": "Advanced",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1284",
    "word": "Renounce",
    "partOfSpeech": "verb",
    "definition": "To formally declare one's abandonment of a claim, right, or belief.",
    "difficulty": "Foundational",
    "topicTags": [
      "Law & Philosophy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1285",
    "word": "Repartee",
    "partOfSpeech": "noun",
    "definition": "Conversation characterized by quick, witty comments.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Communication & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1286",
    "word": "Reprehensible",
    "partOfSpeech": "adjective",
    "definition": "Deserving censure or condemnation.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Ethics & Behavior"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1287",
    "word": "Reprove",
    "partOfSpeech": "verb",
    "definition": "To reprimand or censure someone.",
    "difficulty": "Foundational",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1288",
    "word": "Repudiate",
    "partOfSpeech": "verb",
    "definition": "To refuse to accept or be associated with; deny validity.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Logic & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1289",
    "word": "Rescind",
    "partOfSpeech": "verb",
    "definition": "To revoke, cancel, or repeal a law or order.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Law & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1290",
    "word": "Resolution",
    "partOfSpeech": "noun",
    "definition": "A firm decision to do or not to do something; determination.",
    "difficulty": "Foundational",
    "topicTags": [
      "Leadership & Decision"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1291",
    "word": "Resonant",
    "partOfSpeech": "adjective",
    "definition": "Deep, clear, and continuing to sound.",
    "difficulty": "Foundational",
    "topicTags": [
      "Sound & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1292",
    "word": "Resplendent",
    "partOfSpeech": "adjective",
    "definition": "Attractive and impressive through being richly colorful.",
    "difficulty": "Foundational",
    "topicTags": [
      "Description"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1293",
    "word": "Restive",
    "partOfSpeech": "adjective",
    "definition": "Unable to remain still or submissive due to dissatisfaction.",
    "difficulty": "Advanced",
    "topicTags": [
      "Behavior & Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1294",
    "word": "Reticent",
    "partOfSpeech": "adjective",
    "definition": "Not revealing one's thoughts or feelings readily.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1295",
    "word": "Revere",
    "partOfSpeech": "verb",
    "definition": "To feel deep respect or admiration for something.",
    "difficulty": "Foundational",
    "topicTags": [
      "Culture & Religion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1296",
    "word": "Rhetoric",
    "partOfSpeech": "noun",
    "definition": "The art of effective or persuasive speaking or writing.",
    "difficulty": "Foundational",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1297",
    "word": "Ribald",
    "partOfSpeech": "adjective",
    "definition": "Referring to sexual matters in an amusingly rude way.",
    "difficulty": "Advanced",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1298",
    "word": "Rigorous",
    "partOfSpeech": "adjective",
    "definition": "Extremely thorough, exhaustive, or accurate.",
    "difficulty": "Foundational",
    "topicTags": [
      "Standards & Research"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1299",
    "word": "Robust",
    "partOfSpeech": "adjective",
    "definition": "Strong and healthy; vigorous; sturdy.",
    "difficulty": "Foundational",
    "topicTags": [
      "Health & Structure"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1300",
    "word": "Ruminate",
    "partOfSpeech": "verb",
    "definition": "To think deeply about something; ponder.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Cognition & Philosophy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1301",
    "word": "Rustic",
    "partOfSpeech": "adjective",
    "definition": "Relating to the countryside; rural; simple.",
    "difficulty": "Foundational",
    "topicTags": [
      "Nature & Culture"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1302",
    "word": "Sagacious",
    "partOfSpeech": "adjective",
    "definition": "Having or showing keen mental discernment; shrewd.",
    "difficulty": "Advanced",
    "topicTags": [
      "Cognition & Leadership"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1303",
    "word": "Salient",
    "partOfSpeech": "adjective",
    "definition": "Most noticeable or important.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Perception & Logic"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1304",
    "word": "Salubrious",
    "partOfSpeech": "adjective",
    "definition": "Health-giving; healthy.",
    "difficulty": "Advanced",
    "topicTags": [
      "Health & Nature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1305",
    "word": "Sanction",
    "partOfSpeech": "verb",
    "definition": "To give official permission or approval for an action.",
    "difficulty": "Foundational",
    "topicTags": [
      "Law & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1306",
    "word": "Sanguine",
    "partOfSpeech": "adjective",
    "definition": "Optimistic or positive, especially in a difficult situation.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1307",
    "word": "Sarcasm",
    "partOfSpeech": "noun",
    "definition": "The use of irony to mock or convey contempt.",
    "difficulty": "Foundational",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1308",
    "word": "Sartorial",
    "partOfSpeech": "adjective",
    "definition": "Relating to tailoring, clothes, or style of dress.",
    "difficulty": "Advanced",
    "topicTags": [
      "Arts & Culture"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1309",
    "word": "Satiate",
    "partOfSpeech": "verb",
    "definition": "To satisfy a desire or appetite fully.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1310",
    "word": "Secular",
    "partOfSpeech": "adjective",
    "definition": "Denoting attitudes or activities with no spiritual basis.",
    "difficulty": "Foundational",
    "topicTags": [
      "Governance & Society"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1311",
    "word": "Sedulous",
    "partOfSpeech": "adjective",
    "definition": "Showing dedication and diligence.",
    "difficulty": "Advanced",
    "topicTags": [
      "Work & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1312",
    "word": "Semantic",
    "partOfSpeech": "adjective",
    "definition": "Relating to meaning in language or logic.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Linguistics & Logic"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1313",
    "word": "Serendipity",
    "partOfSpeech": "noun",
    "definition": "The occurrence of events by chance in a happy way.",
    "difficulty": "Foundational",
    "topicTags": [
      "Life & Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1314",
    "word": "Servile",
    "partOfSpeech": "adjective",
    "definition": "Having or showing an excessive willingness to serve others.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1315",
    "word": "Shrewd",
    "partOfSpeech": "adjective",
    "definition": "Having or showing sharp powers of judgment; astute.",
    "difficulty": "Foundational",
    "topicTags": [
      "Leadership & Business"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1316",
    "word": "Sinuous",
    "partOfSpeech": "adjective",
    "definition": "Having many curves and turns.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Physical & Nature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1317",
    "word": "Skeptical",
    "partOfSpeech": "adjective",
    "definition": "Not easily convinced; having doubts or reservations.",
    "difficulty": "Foundational",
    "topicTags": [
      "Cognition & Logic"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1318",
    "word": "Solace",
    "partOfSpeech": "noun",
    "definition": "Comfort or consolation in a time of distress or sadness.",
    "difficulty": "Foundational",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1319",
    "word": "Solicitous",
    "partOfSpeech": "adjective",
    "definition": "Showing interest or concern.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Relationships & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1320",
    "word": "Soporific",
    "partOfSpeech": "adjective",
    "definition": "Tending to induce drowsiness or sleep.",
    "difficulty": "Advanced",
    "topicTags": [
      "Medicine & Science"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1321",
    "word": "Spurious",
    "partOfSpeech": "adjective",
    "definition": "Not being what it purports to be; false or fake.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Logic & Argumentation"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1322",
    "word": "Stagnant",
    "partOfSpeech": "adjective",
    "definition": "Showing no activity; dull and sluggish.",
    "difficulty": "Foundational",
    "topicTags": [
      "State & Economics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1323",
    "word": "Steadfast",
    "partOfSpeech": "adjective",
    "definition": "Resolutely or dutifully firm and unwavering.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1324",
    "word": "Stoic",
    "partOfSpeech": "noun",
    "definition": "A person who can endure pain or hardship without complaining.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Philosophy & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1325",
    "word": "Strident",
    "partOfSpeech": "adjective",
    "definition": "Loud and harsh; grating.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1326",
    "word": "Sublime",
    "partOfSpeech": "adjective",
    "definition": "Of such excellence as to inspire great admiration or awe.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Literature & Aesthetics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1327",
    "word": "Subvert",
    "partOfSpeech": "verb",
    "definition": "To undermine the power and authority of an established system.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Governance & Politics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1328",
    "word": "Succinct",
    "partOfSpeech": "adjective",
    "definition": "Briefly and clearly expressed.",
    "difficulty": "Foundational",
    "topicTags": [
      "Writing & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1329",
    "word": "Supplant",
    "partOfSpeech": "verb",
    "definition": "To supersede and replace.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Governance & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1330",
    "word": "Surfeit",
    "partOfSpeech": "noun",
    "definition": "An excessive amount of something.",
    "difficulty": "Advanced",
    "topicTags": [
      "Quantitative"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1331",
    "word": "Surreptitious",
    "partOfSpeech": "adjective",
    "definition": "Kept secret, especially because it would not be approved.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Behavior & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1332",
    "word": "Sycophant",
    "partOfSpeech": "noun",
    "definition": "A person who acts obsequiously toward someone important to gain advantage.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Social Dynamics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1333",
    "word": "Tacit",
    "partOfSpeech": "adjective",
    "definition": "Understood or implied without being stated.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Communication & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1334",
    "word": "Tangential",
    "partOfSpeech": "adjective",
    "definition": "Diverging from a previous course; peripheral.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Logic & Writing"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1335",
    "word": "Tantamount",
    "partOfSpeech": "adjective",
    "definition": "Equivalent in seriousness to; virtually the same as.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Logic & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1336",
    "word": "Temerity",
    "partOfSpeech": "noun",
    "definition": "Excessive confidence or boldness; audacity.",
    "difficulty": "Advanced",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1337",
    "word": "Temperate",
    "partOfSpeech": "adjective",
    "definition": "Showing moderation or self-restraint.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1338",
    "word": "Tendentious",
    "partOfSpeech": "adjective",
    "definition": "Expressing a particular cause or point of view aggressively.",
    "difficulty": "Advanced",
    "topicTags": [
      "Argumentation & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1339",
    "word": "Tenet",
    "partOfSpeech": "noun",
    "definition": "A principle or belief, especially a main principle of a philosophy.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Philosophy & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1340",
    "word": "Tentative",
    "partOfSpeech": "adjective",
    "definition": "Not certain or fixed; provisional.",
    "difficulty": "Foundational",
    "topicTags": [
      "Logic & Decision"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1341",
    "word": "Terseness",
    "partOfSpeech": "noun",
    "definition": "Neatness and conciseness of expression.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Writing & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1342",
    "word": "Thwart",
    "partOfSpeech": "verb",
    "definition": "To prevent someone from accomplishing something.",
    "difficulty": "Foundational",
    "topicTags": [
      "Strategy & Action"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1343",
    "word": "Timorous",
    "partOfSpeech": "adjective",
    "definition": "Showing or suffering from nervousness or a lack of confidence.",
    "difficulty": "Advanced",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1344",
    "word": "Tirade",
    "partOfSpeech": "noun",
    "definition": "A long, angry speech of criticism or accusation.",
    "difficulty": "Foundational",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1345",
    "word": "Torpid",
    "partOfSpeech": "adjective",
    "definition": "Mentally or physically inactive; lethargic.",
    "difficulty": "Advanced",
    "topicTags": [
      "Psychology & Physical"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1346",
    "word": "Tractable",
    "partOfSpeech": "adjective",
    "definition": "Easy to control or influence; docile.",
    "difficulty": "Advanced",
    "topicTags": [
      "Behavior & Management"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1347",
    "word": "Tranquility",
    "partOfSpeech": "noun",
    "definition": "The quality or state of being tranquil; calm.",
    "difficulty": "Foundational",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1348",
    "word": "Transcend",
    "partOfSpeech": "verb",
    "definition": "To be or go beyond the range or limits of something.",
    "difficulty": "Foundational",
    "topicTags": [
      "Philosophy & Achievement"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1349",
    "word": "Trenchant",
    "partOfSpeech": "adjective",
    "definition": "Vigorous or incisive in expression or style.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric & Writing"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1350",
    "word": "Trepidation",
    "partOfSpeech": "noun",
    "definition": "A feeling of fear or agitation about something that may happen.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1351",
    "word": "Trite",
    "partOfSpeech": "adjective",
    "definition": "Lacking originality or freshness; dull on account of overuse.",
    "difficulty": "Foundational",
    "topicTags": [
      "Writing & Literature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1352",
    "word": "Truculent",
    "partOfSpeech": "adjective",
    "definition": "Eager or quick to argue or fight; aggressively defiant.",
    "difficulty": "Advanced",
    "topicTags": [
      "Personality & Behavior"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1353",
    "word": "Truism",
    "partOfSpeech": "noun",
    "definition": "A statement that is obviously true and says nothing new.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Logic & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1354",
    "word": "Turbulent",
    "partOfSpeech": "adjective",
    "definition": "Characterized by conflict, disorder, or confusion.",
    "difficulty": "Foundational",
    "topicTags": [
      "Environment & Society"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1355",
    "word": "Turgid",
    "partOfSpeech": "adjective",
    "definition": "Swollen and distended or pompous in language.",
    "difficulty": "Advanced",
    "topicTags": [
      "Writing & Description"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1356",
    "word": "Umbrage",
    "partOfSpeech": "noun",
    "definition": "Offense or annoyance.",
    "difficulty": "Advanced",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1357",
    "word": "Unctuous",
    "partOfSpeech": "adjective",
    "definition": "Excessively flattering or ingratiating; oily.",
    "difficulty": "Advanced",
    "topicTags": [
      "Personality & Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1358",
    "word": "Understate",
    "partOfSpeech": "verb",
    "definition": "To represent something as being smaller or less important than it is.",
    "difficulty": "Foundational",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1359",
    "word": "Undermine",
    "partOfSpeech": "verb",
    "definition": "To lessen the effectiveness or power of gradually.",
    "difficulty": "Foundational",
    "topicTags": [
      "Action & Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1360",
    "word": "Equivocation",
    "partOfSpeech": "noun",
    "definition": "The use of ambiguous language to conceal the truth.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Rhetoric & Logic"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1361",
    "word": "Unequivocal",
    "partOfSpeech": "adjective",
    "definition": "Leaving no doubt; unambiguous.",
    "difficulty": "Foundational",
    "topicTags": [
      "Logic & Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1362",
    "word": "Unfathomable",
    "partOfSpeech": "adjective",
    "definition": "Incapable of being fully explored or understood.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Cognition & Philosophy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1363",
    "word": "Unmitigated",
    "partOfSpeech": "adjective",
    "definition": "Not diminished or moderated in intensity; absolute.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Description"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1364",
    "word": "Unscrupulous",
    "partOfSpeech": "adjective",
    "definition": "Having or showing no moral principles; dishonest.",
    "difficulty": "Foundational",
    "topicTags": [
      "Ethics & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1365",
    "word": "Untenable",
    "partOfSpeech": "adjective",
    "definition": "Not able to be maintained or defended against objection.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Logic & Argumentation"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1366",
    "word": "Usurp",
    "partOfSpeech": "verb",
    "definition": "To take a position of power or importance illegally or by force.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Governance & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1367",
    "word": "Utilitarian",
    "partOfSpeech": "adjective",
    "definition": "Designed to be useful or practical rather than attractive.",
    "difficulty": "Foundational",
    "topicTags": [
      "Philosophy & Design"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1368",
    "word": "Vacillate",
    "partOfSpeech": "verb",
    "definition": "To waver between different opinions or actions; be indecisive.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Cognition & Decision"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1369",
    "word": "Vagary",
    "partOfSpeech": "noun",
    "definition": "An unexpected and inexplicable change in a situation.",
    "difficulty": "Advanced",
    "topicTags": [
      "Life & Change"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1370",
    "word": "Vagueness",
    "partOfSpeech": "noun",
    "definition": "Lack of certainty or distinctness.",
    "difficulty": "Foundational",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1371",
    "word": "Validate",
    "partOfSpeech": "verb",
    "definition": "To check or prove the validity or accuracy of.",
    "difficulty": "Foundational",
    "topicTags": [
      "Logic & Research"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1372",
    "word": "Vapid",
    "partOfSpeech": "adjective",
    "definition": "Offering nothing that is stimulating or challenging.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Culture & Description"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1373",
    "word": "Vehement",
    "partOfSpeech": "adjective",
    "definition": "Showing strong feeling; forceful, passionate, or intense.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Rhetoric & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1374",
    "word": "Venerable",
    "partOfSpeech": "adjective",
    "definition": "Accorded a great deal of respect due to age or wisdom.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Society & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1375",
    "word": "Vernacular",
    "partOfSpeech": "noun",
    "definition": "The language or dialect spoken by ordinary people in a region.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Linguistics & Culture"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1376",
    "word": "Vestige",
    "partOfSpeech": "noun",
    "definition": "A trace of something that is disappearing or no longer exists.",
    "difficulty": "Intermediate",
    "topicTags": [
      "History & Science"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1377",
    "word": "Vexation",
    "partOfSpeech": "noun",
    "definition": "The state of being annoyed, frustrated, or worried.",
    "difficulty": "Foundational",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1378",
    "word": "Viable",
    "partOfSpeech": "adjective",
    "definition": "Capable of working successfully; feasible.",
    "difficulty": "Foundational",
    "topicTags": [
      "Strategy & Science"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1379",
    "word": "Vicarious",
    "partOfSpeech": "adjective",
    "definition": "Experienced in the imagination through the feelings of another.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1380",
    "word": "Vicissitude",
    "partOfSpeech": "noun",
    "definition": "A change of circumstances or fortune, typically unwelcome.",
    "difficulty": "Advanced",
    "topicTags": [
      "Philosophy & Life"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1381",
    "word": "Vigilant",
    "partOfSpeech": "adjective",
    "definition": "Keeping careful watch for possible danger or difficulties.",
    "difficulty": "Foundational",
    "topicTags": [
      "Leadership & Safety"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1382",
    "word": "Vilify",
    "partOfSpeech": "verb",
    "definition": "To speak or write about in an abusively disparaging manner.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1383",
    "word": "Vindicate",
    "partOfSpeech": "verb",
    "definition": "To clear someone of blame or suspicion.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Law & Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1384",
    "word": "Vindictive",
    "partOfSpeech": "adjective",
    "definition": "Having or showing a strong desire for revenge.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1385",
    "word": "Virtuoso",
    "partOfSpeech": "noun",
    "definition": "A person highly skilled in music or another artistic pursuit.",
    "difficulty": "Foundational",
    "topicTags": [
      "Arts & Performance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1386",
    "word": "Virulent",
    "partOfSpeech": "adjective",
    "definition": "Extremely severe or harmful in its effects; hostile.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Science & Rhetoric"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1387",
    "word": "Visceral",
    "partOfSpeech": "adjective",
    "definition": "Relating to deep inward feelings rather than intellect.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1388",
    "word": "Vitiate",
    "partOfSpeech": "verb",
    "definition": "To spoil or impair the quality or efficiency of.",
    "difficulty": "Advanced",
    "topicTags": [
      "Law & Action"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1389",
    "word": "Vitriolic",
    "partOfSpeech": "adjective",
    "definition": "Filled with bitter criticism or malice.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1390",
    "word": "Vituperative",
    "partOfSpeech": "adjective",
    "definition": "Bitter and abusive in language.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1391",
    "word": "Vociferous",
    "partOfSpeech": "adjective",
    "definition": "Vehement or clamorous.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric & Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1392",
    "word": "Volatile",
    "partOfSpeech": "adjective",
    "definition": "Liable to change rapidly and unpredictably.",
    "difficulty": "Foundational",
    "topicTags": [
      "Science & Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1393",
    "word": "Voluble",
    "partOfSpeech": "adjective",
    "definition": "Speaking incessantly and fluently.",
    "difficulty": "Advanced",
    "topicTags": [
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1394",
    "word": "Wane",
    "partOfSpeech": "verb",
    "definition": "To decrease in vigor, power, or extent.",
    "difficulty": "Foundational",
    "topicTags": [
      "Nature & Action"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1395",
    "word": "Wanton",
    "partOfSpeech": "adjective",
    "definition": "Deliberate and unprovoked; reckless.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Behavior & Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1396",
    "word": "Whimsical",
    "partOfSpeech": "adjective",
    "definition": "Playfully quaint or fanciful in an appealing way.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Arts"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1397",
    "word": "Wily",
    "partOfSpeech": "adjective",
    "definition": "Skilled at gaining an advantage, especially deceitfully.",
    "difficulty": "Foundational",
    "topicTags": [
      "Strategy & Personality"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1398",
    "word": "Winsome",
    "partOfSpeech": "adjective",
    "definition": "Attractive or appealing in appearance or character.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality & Description"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1399",
    "word": "Wistful",
    "partOfSpeech": "adjective",
    "definition": "Having or showing a feeling of vague or regretful longing.",
    "difficulty": "Foundational",
    "topicTags": [
      "Psychology & Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1400",
    "word": "Xenophobia",
    "partOfSpeech": "noun",
    "definition": "Dislike of or prejudice against people from other countries.",
    "difficulty": "Foundational",
    "topicTags": [
      "Sociology & Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1401",
    "word": "Zealot",
    "partOfSpeech": "noun",
    "definition": "A person who is fanatical and uncompromising in pursuit of ideals.",
    "difficulty": "Foundational",
    "topicTags": [
      "Politics & Religion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1402",
    "word": "Zealous",
    "partOfSpeech": "adjective",
    "definition": "Having or showing great energy or enthusiasm in pursuit of a cause.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality & Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1403",
    "word": "Zenith",
    "partOfSpeech": "noun",
    "definition": "The time at which something is most powerful or successful; peak.",
    "difficulty": "Foundational",
    "topicTags": [
      "Quantitative & Time"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1404",
    "word": "aberrant",
    "partOfSpeech": "adjective",
    "definition": "Departing from an accepted standard or normal behavior.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Behavior",
      "Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1405",
    "word": "aboriginal",
    "partOfSpeech": "adjective",
    "definition": "Existing in a land from the earliest times.",
    "difficulty": "Foundational",
    "topicTags": [
      "History",
      "Nature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1406",
    "word": "abortive",
    "partOfSpeech": "adjective",
    "definition": "Failing to produce the intended result.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Outcome",
      "Action"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1407",
    "word": "abrogate",
    "partOfSpeech": "verb",
    "definition": "To repeal or do away with a law or agreement.",
    "difficulty": "Advanced",
    "topicTags": [
      "Law",
      "Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1408",
    "word": "abscond",
    "partOfSpeech": "verb",
    "definition": "To leave hurriedly and secretly to avoid detection.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Action",
      "Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1409",
    "word": "accoutrement",
    "partOfSpeech": "noun",
    "definition": "Additional items of equipment or dress.",
    "difficulty": "Mastery",
    "topicTags": [
      "Description",
      "Objects"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1410",
    "word": "acquiescence",
    "partOfSpeech": "noun",
    "definition": "Reluctant acceptance or consent.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Behavior",
      "Agreement"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1411",
    "word": "acquittal",
    "partOfSpeech": "noun",
    "definition": "Judgment that a person is not guilty.",
    "difficulty": "Foundational",
    "topicTags": [
      "Law",
      "Justice"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1412",
    "word": "acrid",
    "partOfSpeech": "adjective",
    "definition": "Having an irritatingly bitter taste or smell.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Sensory",
      "Tone"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1413",
    "word": "acrimony",
    "partOfSpeech": "noun",
    "definition": "Bitterness or ill feeling.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Emotion",
      "Conflict"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1414",
    "word": "actuate",
    "partOfSpeech": "verb",
    "definition": "To motivate or cause a device to operate.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Action",
      "Motivation"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1415",
    "word": "adjunct",
    "partOfSpeech": "noun",
    "definition": "A supplementary non-essential addition.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Addition",
      "Workplace"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1416",
    "word": "admonition",
    "partOfSpeech": "noun",
    "definition": "A firm warning or gentle reprimand.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Communication",
      "Warning"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1417",
    "word": "adumbrate",
    "partOfSpeech": "verb",
    "definition": "To represent vaguely or outline in advance.",
    "difficulty": "Mastery",
    "topicTags": [
      "Communication",
      "Writing"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1418",
    "word": "adventitious",
    "partOfSpeech": "adjective",
    "definition": "Happening by chance rather than design.",
    "difficulty": "Mastery",
    "topicTags": [
      "Chance",
      "Science"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1419",
    "word": "adversary",
    "partOfSpeech": "noun",
    "definition": "Opponent in a contest or conflict.",
    "difficulty": "Foundational",
    "topicTags": [
      "Conflict",
      "Relationships"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1420",
    "word": "adverse",
    "partOfSpeech": "adjective",
    "definition": "Preventing success; harmful or unfavorable.",
    "difficulty": "Foundational",
    "topicTags": [
      "Impact",
      "Condition"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1421",
    "word": "aegis",
    "partOfSpeech": "noun",
    "definition": "Protection or backing of an authority.",
    "difficulty": "Advanced",
    "topicTags": [
      "Protection",
      "Authority"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1422",
    "word": "affinity",
    "partOfSpeech": "noun",
    "definition": "Natural liking or sympathy for something.",
    "difficulty": "Foundational",
    "topicTags": [
      "Relationships",
      "Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1423",
    "word": "affirmation",
    "partOfSpeech": "noun",
    "definition": "Declaration of truth or emotional support.",
    "difficulty": "Foundational",
    "topicTags": [
      "Support",
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1424",
    "word": "affliction",
    "partOfSpeech": "noun",
    "definition": "Cause of pain, distress, or suffering.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Hardship",
      "Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1425",
    "word": "affront",
    "partOfSpeech": "noun",
    "definition": "Action or remark causing outrage or offense.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Conflict",
      "Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1426",
    "word": "agile",
    "partOfSpeech": "adjective",
    "definition": "Able to move quickly; adaptable in thought.",
    "difficulty": "Foundational",
    "topicTags": [
      "Leadership",
      "Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1427",
    "word": "allegory",
    "partOfSpeech": "noun",
    "definition": "A story revealing a hidden meaning.",
    "difficulty": "Foundational",
    "topicTags": [
      "Literature",
      "Storytelling"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1428",
    "word": "allocation",
    "partOfSpeech": "noun",
    "definition": "Distributing or designating resources.",
    "difficulty": "Foundational",
    "topicTags": [
      "Management",
      "Resources"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1429",
    "word": "allusion",
    "partOfSpeech": "noun",
    "definition": "Indirect reference to call something to mind.",
    "difficulty": "Foundational",
    "topicTags": [
      "Literature",
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1430",
    "word": "amicable",
    "partOfSpeech": "adjective",
    "definition": "Characterized by friendliness and peace.",
    "difficulty": "Foundational",
    "topicTags": [
      "Relationships",
      "Peace"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1431",
    "word": "annihilate",
    "partOfSpeech": "verb",
    "definition": "To destroy completely.",
    "difficulty": "Foundational",
    "topicTags": [
      "Action",
      "Conflict"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1432",
    "word": "annotate",
    "partOfSpeech": "verb",
    "definition": "To add explanatory notes to a text.",
    "difficulty": "Foundational",
    "topicTags": [
      "Writing",
      "Study"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1433",
    "word": "anthology",
    "partOfSpeech": "noun",
    "definition": "Published collection of writings.",
    "difficulty": "Foundational",
    "topicTags": [
      "Literature",
      "Collection"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1434",
    "word": "anticipate",
    "partOfSpeech": "verb",
    "definition": "To expect or predict in advance.",
    "difficulty": "Foundational",
    "topicTags": [
      "Mind",
      "Strategy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1435",
    "word": "apologia",
    "partOfSpeech": "noun",
    "definition": "Formal written defense of opinions.",
    "difficulty": "Advanced",
    "topicTags": [
      "Argumentation",
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1436",
    "word": "apprehend",
    "partOfSpeech": "verb",
    "definition": "To understand an idea; or arrest.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Intellect",
      "Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1437",
    "word": "aptitude",
    "partOfSpeech": "noun",
    "definition": "Natural ability or talent.",
    "difficulty": "Foundational",
    "topicTags": [
      "Skill",
      "Mind"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1438",
    "word": "arbiter",
    "partOfSpeech": "noun",
    "definition": "Person with ultimate authority in dispute.",
    "difficulty": "Advanced",
    "topicTags": [
      "Authority",
      "Law"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1439",
    "word": "arbitrary",
    "partOfSpeech": "adjective",
    "definition": "Based on random whim rather than reason.",
    "difficulty": "Foundational",
    "topicTags": [
      "Logic",
      "Decision"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1440",
    "word": "arcane",
    "partOfSpeech": "adjective",
    "definition": "Understood by few; mysterious.",
    "difficulty": "Advanced",
    "topicTags": [
      "Knowledge",
      "Mystery"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1441",
    "word": "archaic",
    "partOfSpeech": "adjective",
    "definition": "Very old or old-fashioned.",
    "difficulty": "Foundational",
    "topicTags": [
      "History",
      "Time"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1442",
    "word": "archetype",
    "partOfSpeech": "noun",
    "definition": "Typical example or original model.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Literature",
      "Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1443",
    "word": "artifact",
    "partOfSpeech": "noun",
    "definition": "Human-made cultural object.",
    "difficulty": "Foundational",
    "topicTags": [
      "Culture",
      "History"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1444",
    "word": "artifice",
    "partOfSpeech": "noun",
    "definition": "Clever devices used to deceive.",
    "difficulty": "Advanced",
    "topicTags": [
      "Deception",
      "Wit"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1445",
    "word": "ascertain",
    "partOfSpeech": "verb",
    "definition": "To find out for certain.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Inquiry",
      "Knowledge"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1446",
    "word": "aspire",
    "partOfSpeech": "verb",
    "definition": "To direct ambition toward a goal.",
    "difficulty": "Foundational",
    "topicTags": [
      "Ambition",
      "Goal"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1447",
    "word": "assertion",
    "partOfSpeech": "noun",
    "definition": "Confident statement of belief.",
    "difficulty": "Foundational",
    "topicTags": [
      "Argumentation",
      "Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1448",
    "word": "assiduity",
    "partOfSpeech": "noun",
    "definition": "Constant diligence and attention.",
    "difficulty": "Advanced",
    "topicTags": [
      "Workplace",
      "Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1449",
    "word": "attenuate",
    "partOfSpeech": "verb",
    "definition": "To reduce force or intensity.",
    "difficulty": "Advanced",
    "topicTags": [
      "Analysis",
      "Impact"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1450",
    "word": "austere",
    "partOfSpeech": "adjective",
    "definition": "Severe, strict, or plain.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality",
      "Style"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1451",
    "word": "authoritative",
    "partOfSpeech": "adjective",
    "definition": "Commanding and reliable.",
    "difficulty": "Foundational",
    "topicTags": [
      "Authority",
      "Leadership"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1452",
    "word": "autocracy",
    "partOfSpeech": "noun",
    "definition": "Government by one absolute ruler.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Governance",
      "Politics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1453",
    "word": "avid",
    "partOfSpeech": "adjective",
    "definition": "Showing keen interest or enthusiasm.",
    "difficulty": "Foundational",
    "topicTags": [
      "Enthusiasm",
      "Personality"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1454",
    "word": "axiomatic",
    "partOfSpeech": "adjective",
    "definition": "Unquestionable and self-evident.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Logic",
      "Philosophy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1455",
    "word": "baleful",
    "partOfSpeech": "adjective",
    "definition": "Threatening harm or menacing in nature.",
    "difficulty": "Advanced",
    "topicTags": [
      "Description",
      "Mood"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1456",
    "word": "balk",
    "partOfSpeech": "verb",
    "definition": "To hesitate or refuse to accept an idea.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Action",
      "Decision"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1457",
    "word": "banality",
    "partOfSpeech": "noun",
    "definition": "Unoriginality or triteness.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Quality",
      "Writing"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1458",
    "word": "baroque",
    "partOfSpeech": "adjective",
    "definition": "Highly ornate and extravagant in style.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Art",
      "Style"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1459",
    "word": "barrage",
    "partOfSpeech": "noun",
    "definition": "A concentrated outpouring, as of questions or criticism.",
    "difficulty": "Foundational",
    "topicTags": [
      "Communication",
      "Quantity"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1460",
    "word": "bask",
    "partOfSpeech": "verb",
    "definition": "To revel or lie in warmth or approval.",
    "difficulty": "Foundational",
    "topicTags": [
      "Emotion",
      "Relaxation"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1461",
    "word": "bastion",
    "partOfSpeech": "noun",
    "definition": "An institution strongly defending particular principles.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Governance",
      "Defense"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1462",
    "word": "beacon",
    "partOfSpeech": "noun",
    "definition": "A guiding light or encouraging signal.",
    "difficulty": "Foundational",
    "topicTags": [
      "Guidance",
      "Hope"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1463",
    "word": "beguiler",
    "partOfSpeech": "noun",
    "definition": "A person who charms or deceives others.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Deception",
      "Persuasion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1464",
    "word": "behemoth",
    "partOfSpeech": "noun",
    "definition": "A huge, powerful organization or entity.",
    "difficulty": "Foundational",
    "topicTags": [
      "Systems",
      "Description"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1465",
    "word": "behold",
    "partOfSpeech": "verb",
    "definition": "To observe or look at thoughtfully.",
    "difficulty": "Foundational",
    "topicTags": [
      "Vision",
      "Observation"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1466",
    "word": "belligerence",
    "partOfSpeech": "noun",
    "definition": "Aggressive or warlike posture.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Conflict",
      "Behavior"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1467",
    "word": "benefaction",
    "partOfSpeech": "noun",
    "definition": "A donation or gift conferred upon a cause.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Generosity",
      "Ethics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1468",
    "word": "benefactor",
    "partOfSpeech": "noun",
    "definition": "A person who gives financial or other help.",
    "difficulty": "Foundational",
    "topicTags": [
      "Ethics",
      "Generosity"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1469",
    "word": "benevolence",
    "partOfSpeech": "noun",
    "definition": "Kindness and charity of disposition.",
    "difficulty": "Foundational",
    "topicTags": [
      "Ethics",
      "Character"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1470",
    "word": "benignity",
    "partOfSpeech": "noun",
    "definition": "Kindness or gentleness of disposition.",
    "difficulty": "Advanced",
    "topicTags": [
      "Character",
      "Behavior"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1471",
    "word": "benison",
    "partOfSpeech": "noun",
    "definition": "A blessing or spoken benediction.",
    "difficulty": "Mastery",
    "topicTags": [
      "Blessing",
      "Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1472",
    "word": "bereavement",
    "partOfSpeech": "noun",
    "definition": "Deprivation through loss or death.",
    "difficulty": "Foundational",
    "topicTags": [
      "Emotion",
      "Loss"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1473",
    "word": "beseech",
    "partOfSpeech": "verb",
    "definition": "To ask someone urgently and fervently.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Communication",
      "Persuasion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1474",
    "word": "besmirchment",
    "partOfSpeech": "noun",
    "definition": "Damage to reputation.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Reputation",
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1475",
    "word": "bestow",
    "partOfSpeech": "verb",
    "definition": "To confer or present an honor or gift.",
    "difficulty": "Foundational",
    "topicTags": [
      "Generosity",
      "Action"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1476",
    "word": "bevy",
    "partOfSpeech": "noun",
    "definition": "A large group of people or things.",
    "difficulty": "Foundational",
    "topicTags": [
      "Quantity",
      "Group"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1477",
    "word": "bibliographic",
    "partOfSpeech": "adjective",
    "definition": "Relating to cataloging of books.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Writing",
      "Books"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1478",
    "word": "bilateralism",
    "partOfSpeech": "noun",
    "definition": "Conduct of relations between two states.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Diplomacy",
      "Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1479",
    "word": "bilingualism",
    "partOfSpeech": "noun",
    "definition": "Fluency in using two languages.",
    "difficulty": "Foundational",
    "topicTags": [
      "Linguistics",
      "Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1480",
    "word": "biosphere",
    "partOfSpeech": "noun",
    "definition": "Global ecological system of living beings.",
    "difficulty": "Foundational",
    "topicTags": [
      "Science",
      "Nature"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1481",
    "word": "bipartisanship",
    "partOfSpeech": "noun",
    "definition": "Cooperation between two political parties.",
    "difficulty": "Foundational",
    "topicTags": [
      "Politics",
      "Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1482",
    "word": "bizarre",
    "partOfSpeech": "adjective",
    "definition": "Very strange or unusual.",
    "difficulty": "Foundational",
    "topicTags": [
      "Description",
      "Uniqueness"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1483",
    "word": "blandness",
    "partOfSpeech": "noun",
    "definition": "Lacking strong feature or interest.",
    "difficulty": "Foundational",
    "topicTags": [
      "Quality",
      "Description"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1484",
    "word": "blasphemous",
    "partOfSpeech": "adjective",
    "definition": "Sacrilegious against sacred things.",
    "difficulty": "Foundational",
    "topicTags": [
      "Religion",
      "Speech"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1485",
    "word": "blatancy",
    "partOfSpeech": "noun",
    "definition": "Glaring obviousness.",
    "difficulty": "Foundational",
    "topicTags": [
      "Description",
      "Honesty"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1486",
    "word": "blemish",
    "partOfSpeech": "noun",
    "definition": "A small mark or flaw spoiling appearance.",
    "difficulty": "Foundational",
    "topicTags": [
      "Appearance",
      "Quality"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1487",
    "word": "blissful",
    "partOfSpeech": "adjective",
    "definition": "Extremely happy or full of joy.",
    "difficulty": "Foundational",
    "topicTags": [
      "Emotion",
      "Joy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1488",
    "word": "blithe",
    "partOfSpeech": "adjective",
    "definition": "Showing cheerful indifference or joy.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Personality",
      "Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1489",
    "word": "blitheness",
    "partOfSpeech": "noun",
    "definition": "Casual cheerful joy or indifference.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Emotion",
      "Personality"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1490",
    "word": "bluster",
    "partOfSpeech": "verb",
    "definition": "To talk aggressively with little real effect.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Speech",
      "Behavior"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1491",
    "word": "boisterousness",
    "partOfSpeech": "noun",
    "definition": "Noisy, rowdy energy.",
    "difficulty": "Foundational",
    "topicTags": [
      "Energy",
      "Behavior"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1492",
    "word": "bolstering",
    "partOfSpeech": "noun",
    "definition": "Providing support or encouragement.",
    "difficulty": "Foundational",
    "topicTags": [
      "Support",
      "Action"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1493",
    "word": "bombast",
    "partOfSpeech": "noun",
    "definition": "High-sounding language with little meaning.",
    "difficulty": "Advanced",
    "topicTags": [
      "Rhetoric",
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1494",
    "word": "boundless",
    "partOfSpeech": "adjective",
    "definition": "Unlimited or immense.",
    "difficulty": "Foundational",
    "topicTags": [
      "Quantity",
      "Description"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1495",
    "word": "bountiful",
    "partOfSpeech": "adjective",
    "definition": "Large in quantity; abundant.",
    "difficulty": "Foundational",
    "topicTags": [
      "Quantity",
      "Generosity"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1496",
    "word": "bountifulness",
    "partOfSpeech": "noun",
    "definition": "Abundance or generous giving.",
    "difficulty": "Foundational",
    "topicTags": [
      "Generosity",
      "Quantity"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1497",
    "word": "bravado",
    "partOfSpeech": "noun",
    "definition": "Bold manner intended to impress.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Behavior",
      "Personality"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1498",
    "word": "bravura",
    "partOfSpeech": "noun",
    "definition": "Brilliant technical skill in performance.",
    "difficulty": "Advanced",
    "topicTags": [
      "Excellence",
      "Art"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1499",
    "word": "brilliance",
    "partOfSpeech": "noun",
    "definition": "Exceptional talent or brightness.",
    "difficulty": "Foundational",
    "topicTags": [
      "Excellence",
      "Intellect"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1500",
    "word": "brimstone",
    "partOfSpeech": "noun",
    "definition": "Fiery passionate rhetoric.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Rhetoric",
      "Metaphor"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1501",
    "word": "bristling",
    "partOfSpeech": "adjective",
    "definition": "Aggressively energetic.",
    "difficulty": "Foundational",
    "topicTags": [
      "Behavior",
      "Energy"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1502",
    "word": "brusque",
    "partOfSpeech": "adjective",
    "definition": "Abrupt or offhand in manner.",
    "difficulty": "Foundational",
    "topicTags": [
      "Behavior",
      "Personality"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1503",
    "word": "buffoonery",
    "partOfSpeech": "noun",
    "definition": "Ridiculously amusing behavior.",
    "difficulty": "Foundational",
    "topicTags": [
      "Humor",
      "Behavior"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1504",
    "word": "buoyancy",
    "partOfSpeech": "noun",
    "definition": "Floating ability or cheerful resilience.",
    "difficulty": "Foundational",
    "topicTags": [
      "Resilience",
      "Emotion"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1505",
    "word": "bureaucracy",
    "partOfSpeech": "noun",
    "definition": "System of government official decisions.",
    "difficulty": "Foundational",
    "topicTags": [
      "Systems",
      "Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1506",
    "word": "bureaucratic",
    "partOfSpeech": "adjective",
    "definition": "Relating to rigid administrative systems.",
    "difficulty": "Foundational",
    "topicTags": [
      "Systems",
      "Governance"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1507",
    "word": "burgeoning",
    "partOfSpeech": "adjective",
    "definition": "Beginning to grow rapidly; flourishing.",
    "difficulty": "Foundational",
    "topicTags": [
      "Growth",
      "Change"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1508",
    "word": "burlesque",
    "partOfSpeech": "noun",
    "definition": "Comically exaggerated imitation.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Literature",
      "Humor"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1509",
    "word": "burnish",
    "partOfSpeech": "verb",
    "definition": "To polish or enhance.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Action",
      "Quality"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1510",
    "word": "buttressing",
    "partOfSpeech": "noun",
    "definition": "Support or reinforcement.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Support",
      "Logic"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1511",
    "word": "cabal",
    "partOfSpeech": "noun",
    "definition": "A secret political clique.",
    "difficulty": "Advanced",
    "topicTags": [
      "Secrecy",
      "Politics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1512",
    "word": "cadence",
    "partOfSpeech": "noun",
    "definition": "Inflection of voice or rhythm.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Speech",
      "Music"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1513",
    "word": "camaraderie",
    "partOfSpeech": "noun",
    "definition": "Mutual trust among colleagues.",
    "difficulty": "Foundational",
    "topicTags": [
      "Workplace",
      "Relationships"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1514",
    "word": "capacious",
    "partOfSpeech": "adjective",
    "definition": "Having a lot of space inside.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Space",
      "Description"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1515",
    "word": "cardinal",
    "partOfSpeech": "adjective",
    "definition": "Fundamental importance.",
    "difficulty": "Foundational",
    "topicTags": [
      "Importance",
      "Priority"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1516",
    "word": "castigate",
    "partOfSpeech": "verb",
    "definition": "To reprimand or criticize severely.",
    "difficulty": "Advanced",
    "topicTags": [
      "Criticism",
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1517",
    "word": "cavil",
    "partOfSpeech": "verb",
    "definition": "To make petty objections.",
    "difficulty": "Mastery",
    "topicTags": [
      "Argumentation",
      "Criticism"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1518",
    "word": "celerity",
    "partOfSpeech": "noun",
    "definition": "Swiftness of movement.",
    "difficulty": "Mastery",
    "topicTags": [
      "Speed",
      "Action"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1519",
    "word": "clarity",
    "partOfSpeech": "noun",
    "definition": "Quality of being easy to understand.",
    "difficulty": "Foundational",
    "topicTags": [
      "Precision",
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1520",
    "word": "coercion",
    "partOfSpeech": "noun",
    "definition": "Persuasion by force.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Power",
      "Force"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1521",
    "word": "cognition",
    "partOfSpeech": "noun",
    "definition": "Process of acquiring knowledge.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Psychology",
      "Mind"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1522",
    "word": "cohesion",
    "partOfSpeech": "noun",
    "definition": "Sticking together tightly.",
    "difficulty": "Foundational",
    "topicTags": [
      "Unity",
      "Systems"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1523",
    "word": "complacency",
    "partOfSpeech": "noun",
    "definition": "Uncritical self-satisfaction.",
    "difficulty": "Foundational",
    "topicTags": [
      "Mindset",
      "Attitude"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1524",
    "word": "composure",
    "partOfSpeech": "noun",
    "definition": "Calm self-control.",
    "difficulty": "Foundational",
    "topicTags": [
      "Emotion",
      "Psychology"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1525",
    "word": "conflagration",
    "partOfSpeech": "noun",
    "definition": "Extensive fire or conflict.",
    "difficulty": "Advanced",
    "topicTags": [
      "Metaphor",
      "Event"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1526",
    "word": "conformity",
    "partOfSpeech": "noun",
    "definition": "Compliance with rules.",
    "difficulty": "Foundational",
    "topicTags": [
      "Society",
      "Standards"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1527",
    "word": "connotation",
    "partOfSpeech": "noun",
    "definition": "Implied secondary meaning.",
    "difficulty": "Foundational",
    "topicTags": [
      "Linguistics",
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1528",
    "word": "consequential",
    "partOfSpeech": "adjective",
    "definition": "Following as result; or significant.",
    "difficulty": "Foundational",
    "topicTags": [
      "Impact",
      "Logic"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1529",
    "word": "consign",
    "partOfSpeech": "verb",
    "definition": "To deliver into custody.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Transfer",
      "Action"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1530",
    "word": "consolation",
    "partOfSpeech": "noun",
    "definition": "Comfort received in loss.",
    "difficulty": "Foundational",
    "topicTags": [
      "Emotion",
      "Support"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1531",
    "word": "consonance",
    "partOfSpeech": "noun",
    "definition": "Agreement or compatibility.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Agreement",
      "Aesthetics"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1532",
    "word": "contemplate",
    "partOfSpeech": "verb",
    "definition": "To think deeply or observe.",
    "difficulty": "Foundational",
    "topicTags": [
      "Mind",
      "Reflection"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1533",
    "word": "contention",
    "partOfSpeech": "noun",
    "definition": "Heated argument or assertion.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Argumentation",
      "Conflict"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1534",
    "word": "contrived",
    "partOfSpeech": "adjective",
    "definition": "Forced or deliberately created.",
    "difficulty": "Foundational",
    "topicTags": [
      "Quality",
      "Art"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1535",
    "word": "convergence",
    "partOfSpeech": "noun",
    "definition": "Coming together to meet.",
    "difficulty": "Foundational",
    "topicTags": [
      "Systems",
      "Movement"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1536",
    "word": "cordial",
    "partOfSpeech": "adjective",
    "definition": "Warm and friendly.",
    "difficulty": "Foundational",
    "topicTags": [
      "Personality",
      "Relationships"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1537",
    "word": "corrosive",
    "partOfSpeech": "adjective",
    "definition": "Causing damage or caustic.",
    "difficulty": "Foundational",
    "topicTags": [
      "Damage",
      "Tone"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1538",
    "word": "counterargument",
    "partOfSpeech": "noun",
    "definition": "Argument opposing another.",
    "difficulty": "Foundational",
    "topicTags": [
      "Logic",
      "Argumentation"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1539",
    "word": "counterfeit",
    "partOfSpeech": "noun",
    "definition": "Fake imitation to deceive.",
    "difficulty": "Foundational",
    "topicTags": [
      "Deception",
      "Truth"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1540",
    "word": "covenant",
    "partOfSpeech": "noun",
    "definition": "Solemn binding agreement.",
    "difficulty": "Intermediate",
    "topicTags": [
      "Law",
      "Agreement"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1541",
    "word": "credibility",
    "partOfSpeech": "noun",
    "definition": "Trustworthiness and believability.",
    "difficulty": "Foundational",
    "topicTags": [
      "Ethos",
      "Communication"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1542",
    "word": "crux",
    "partOfSpeech": "noun",
    "definition": "Decisive central point at issue.",
    "difficulty": "Foundational",
    "topicTags": [
      "Logic",
      "Priority"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1543",
    "word": "cryptic",
    "partOfSpeech": "adjective",
    "definition": "Mysterious and obscure.",
    "difficulty": "Foundational",
    "topicTags": [
      "Mystery",
      "Clarity"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1544",
    "word": "cultivate",
    "partOfSpeech": "verb",
    "definition": "To develop a quality or skill.",
    "difficulty": "Foundational",
    "topicTags": [
      "Growth",
      "Action"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1545",
    "word": "cumbersome",
    "partOfSpeech": "adjective",
    "definition": "Unwieldy or large to handle.",
    "difficulty": "Foundational",
    "topicTags": [
      "Description",
      "Workplace"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1546",
    "word": "cumulative",
    "partOfSpeech": "adjective",
    "definition": "Increasing by successive addition.",
    "difficulty": "Foundational",
    "topicTags": [
      "Growth",
      "Addition"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1547",
    "word": "curator",
    "partOfSpeech": "noun",
    "definition": "Custodian of a collection.",
    "difficulty": "Foundational",
    "topicTags": [
      "Culture",
      "Workplace"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1548",
    "word": "cynic",
    "partOfSpeech": "noun",
    "definition": "Person believing self-interested motives.",
    "difficulty": "Foundational",
    "topicTags": [
      "Mindset",
      "Attitude"
    ],
    "hasDetailedLesson": false
  },
  {
    "id": "cat-1549",
    "word": "cynical",
    "partOfSpeech": "adjective",
    "definition": "Believing people are selfishly motivated.",
    "difficulty": "Foundational",
    "topicTags": [
      "Mindset",
      "Attitude"
    ],
    "hasDetailedLesson": false
  }
];

export const VOCABULARY_CATALOGUE: VocabularyCatalogueItem[] = RAW_CATALOGUE as unknown as VocabularyCatalogueItem[];
