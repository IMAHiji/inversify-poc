
import {
    createStore,
    Store,
    applyMiddleware,
} from 'redux';
import logger from 'redux-logger'
import { AppState } from './interface.app-state';
import { counterReducer } from './reducers';


export  function createAppStore(): Store<AppState> {

    return createStore<AppState>(
        counterReducer,
        applyMiddleware(logger)
    );
}