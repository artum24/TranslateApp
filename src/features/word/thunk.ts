import { wordAPI } from '../../api/words';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../../store/store';
import { ActionsType } from './actionsType';
import { getWordFailure, getWordRequest, getWordSuccess } from './actions';

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>;

export const getUsersThunkCreactor = (name: string): ThunkType => async (
  dispatch
) => {
  dispatch(getWordRequest());
  let data = await wordAPI.getWord(name);
  if (data) {    
    dispatch(getWordSuccess(data));
  } else {
    dispatch(getWordFailure());
  }
  console.log(data);
};
