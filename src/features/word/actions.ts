import {
  ActionsType,
  GET_WORD_FAILURE,
  GET_WORD_REQUEST,
  GET_WORD_SUCCESS,
} from './actionsType';
import { wordType } from './types';

export const getWordRequest = (): ActionsType => ({
  type: GET_WORD_REQUEST,
});

export const getWordSuccess = (word: wordType): ActionsType => ({
  type: GET_WORD_SUCCESS,
  payload: word,
});

export const getWordFailure = (): ActionsType => ({
  type: GET_WORD_FAILURE,
});
