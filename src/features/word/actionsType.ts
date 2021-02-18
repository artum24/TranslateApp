import { wordsType, wordType } from "./types";

export const GET_WORD_REQUEST = 'GET_WORD_REQUEST';
export const GET_WORD_SUCCESS = 'GET_WORD_SUCCESS';
export const GET_WORD_FAILURE = 'GET_WORD_FAILURE';
export const GET_WORDS_REQUEST = 'GET_WORDS_REQUEST';
export const GET_WORDS_SUCCESS = 'GET_WORDS_SUCCESS';
export const GET_WORDS_FAILURE = 'GET_WORDS_FAILURE';

export type GetWordRequestType = {
  type: typeof GET_WORD_REQUEST;
};

export type GetWordSuccessType = {
  type: typeof GET_WORD_SUCCESS;
  payload: wordType;
};

export type GetWordFailureType = {
  type: typeof GET_WORD_FAILURE;
};

export type GetWordsRequestType = {
  type: typeof GET_WORDS_REQUEST;
};

export type GetWordsSuccessType = {
  type: typeof GET_WORDS_SUCCESS;
  payload: Array<{ label: string; value: string }>;
};

export type GetWordsFailureType = {
  type: typeof GET_WORDS_FAILURE;
};

export type ActionsType =
  | GetWordRequestType
  | GetWordSuccessType
  | GetWordFailureType
  | GetWordsRequestType
  | GetWordsSuccessType
  | GetWordsFailureType;
