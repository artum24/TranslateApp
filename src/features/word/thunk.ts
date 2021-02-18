import { wordAPI } from '../../api/words';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../../store/store';
import { ActionsType } from './actionsType';
import {
  getWordFailure,
  getWordRequest,
  getWordSuccess,
  getWordsRequest,
  getWordsSuccess,
  getWordsFailure,
} from './actions';

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>;

export const getWordThunkCreactor = (name: string): ThunkType => async (
  dispatch
) => {
  dispatch(getWordRequest());
  let data = await wordAPI.getWord(name);
  if (data) {
    dispatch(getWordSuccess(data));
  } else {
    dispatch(getWordFailure());
  }
};

export const getWordsThunkCreactor = (name: string): ThunkType => async (
  dispatch
) => {
  dispatch(getWordsRequest());
  let data = await wordAPI.getWords(name);
  if (data) {
    const newData = data.map((item) => ({ label: item, value: item }));
    dispatch(getWordsSuccess(newData));
  } else {
    dispatch(getWordsFailure());
  }
};
