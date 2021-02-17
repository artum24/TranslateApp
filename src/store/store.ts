import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, rootReducerType } from './rootReducer';
import thunkMiddleware from 'redux-thunk';

const enhancer = compose(composeWithDevTools(applyMiddleware(thunkMiddleware)));

export type AppStateType = ReturnType<rootReducerType>;
const store = createStore(rootReducer, enhancer);

export default store;