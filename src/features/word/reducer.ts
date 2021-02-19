import {
  ActionsType,
  GET_WORD_FAILURE,
  GET_WORD_REQUEST,
  GET_WORD_SUCCESS,
  GET_WORDS_FAILURE,
  GET_WORDS_REQUEST,
  GET_WORDS_SUCCESS,
  ADD_TO_LAST_VIEW,
} from './actionsType';
import { statusType, wordType } from './types';

export type InitialStateType = {
  word: wordType | null;
  words: Array<{ label: string; value: string }> | null;
  status: statusType;
  lastView: string | null;
};

const initialState: InitialStateType = {
  word: null,
  words: null,
  status: 'idle',
  lastView: localStorage.getItem('lastview')
    ? localStorage.getItem('lastview')
    : '',
};

const wordReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case GET_WORD_REQUEST: {
      return { ...state, status: 'loading' };
    }
    case GET_WORD_SUCCESS: {
      return { ...state, status: 'success', word: action.payload };
    }
    case GET_WORD_FAILURE: {
      return { ...state, status: 'failure' };
    }
    case GET_WORDS_REQUEST: {
      return { ...state, status: 'loading' };
    }
    case GET_WORDS_SUCCESS: {
      return { ...state, status: 'success', words: action.payload };
    }
    case GET_WORDS_FAILURE: {
      return { ...state, status: 'failure' };
    }
    case ADD_TO_LAST_VIEW: {
      let storage = localStorage.getItem('lastview');
      if (storage === null) {
        localStorage.setItem('lastview', `${action.payload}, `);
        return { ...state, lastView: `${action.payload}, ` };
      } else {
        if (!storage.includes(action.payload)) {
          localStorage.setItem('lastview', `${action.payload}, ${storage}`);
          return { ...state, lastView: `${action.payload}, ${state.lastView}` };
        }
      }
      return state;
    }
    default:
      return state;
  }
};

export default wordReducer;
