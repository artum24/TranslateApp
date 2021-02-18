export type statusType = 'idle' | 'loading' | 'success' | 'failure';

export type wordType = {
  pronunciation: { all: string };
  word: string;
  results: Array<wordResultType>
};

export type wordResultType = {
  definition: string | null;
  synonyms: Array<string> | null;
  examples: Array<string> | null;
  similarTo: Array<string> | null;
  antonyms: Array<string> | null;
}