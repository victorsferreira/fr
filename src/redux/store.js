import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi'
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk, multi));

export function getToken(){
    return store.getState().session.token;
}

export function getReducerState(reducerName){
    const state = store.getState();
    return state[reducerName];
}

export default store;