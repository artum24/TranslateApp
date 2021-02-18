import {
  ActionsType,
  GET_WORD_FAILURE,
  GET_WORD_REQUEST,
  GET_WORD_SUCCESS,
  GET_WORDS_FAILURE,
  GET_WORDS_REQUEST,
  GET_WORDS_SUCCESS,
} from './actionsType';
import { wordsType, wordType } from './types';

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

export const getWordsRequest = (): ActionsType => ({
  type: GET_WORDS_REQUEST,
});

export const getWordsSuccess = (
  word: Array<{ label: string; value: string }>
): ActionsType => ({
  type: GET_WORDS_SUCCESS,
  payload: word,
});

export const getWordsFailure = (): ActionsType => ({
  type: GET_WORDS_FAILURE,
});
