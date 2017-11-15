
import {
    createStore,
    Store,
    applyMiddleware,
} from 'redux';
import logger from 'redux-logger'

import  messageReducer from './messageReducer';
import {AppState} from '../interfaces/interface-appState';

function createAppStore(): Store<AppState> {
    return createStore(
        messageReducer,
        applyMiddleware(logger)
    );
}

const store = createAppStore()

export default store




