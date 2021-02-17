import { wordType } from "./types";

export const GET_WORD_REQUEST = 'GET_WORD_REQUEST';
export const GET_WORD_SUCCESS = 'GET_WORD_SUCCESS';
export const GET_WORD_FAILURE = 'GET_WORD_FAILURE';

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

export type ActionsType =
  | GetWordRequestType
  | GetWordSuccessType
  | GetWordFailureType;
