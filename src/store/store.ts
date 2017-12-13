
import {
    createStore,
    Store,
    applyMiddleware,
    combineReducers
} from 'redux';
import { createLogger } from 'redux-logger';

import messageReducer from './messageReducer';

import {AppState} from '../store-typings/type-appState';


const logger = createLogger()
const rootReducer = combineReducers<AppState>({
    messaging:messageReducer
})

function createAppStore(): Store<AppState> {
    return createStore(
        rootReducer,
        applyMiddleware(logger)
    );
}

const store: Store<AppState> = createAppStore()

export default store
