
import {
    createStore,
    Store,
    applyMiddleware,
} from 'redux';
import logger from 'redux-logger'
import { StateInterface } from './interface-state';
import { counterReducer } from './reducers';


function createAppStore(): Store<StateInterface> {
    return createStore<StateInterface>(
        counterReducer,
        applyMiddleware(logger)
    );
}

const store = createAppStore()

export default store




