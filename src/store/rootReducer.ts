import { combineReducers } from 'redux';
import wordReducer from '../features/word/reducer';

export const rootReducer = combineReducers({
  word: wordReducer
});

export type rootReducerType = typeof rootReducer;