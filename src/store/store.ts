
import {
    createStore,
    Store,
    applyMiddleware,
} from 'redux';
import logger from 'redux-logger'
import { StoreInterface } from './interface-store';
import { counterReducer } from './reducers';


function createAppStore(): Store<StoreInterface> {
    return createStore<StoreInterface>(
        counterReducer,
        applyMiddleware(logger)
    );
}

const store = createAppStore()
export default store




