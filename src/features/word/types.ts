export type statusType = 'idle' | 'loading' | 'success' | 'failure';

export type wordType = {
  pronunciation: { all: string };
  syllables: Array<string>;
  word: string;
  results: Array<wordResultType>
};

export type wordResultType = {
  definition: string | null;
  partOfSpeech: string | null;
  synonyms: Array<string> | null;
  usageOf: Array<string> | null;
  examples: Array<string> | null;
  similarTo: Array<string> | null;
  derivation: Array<string> | null;
  antonyms: Array<string> | null;
  also: Array<string> | null;
  attribute: Array<string> | null;
}