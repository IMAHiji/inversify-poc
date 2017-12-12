
import {
    createStore,
    Store,
    applyMiddleware
} from 'redux';

import  messageReducer from './messageReducer';
import { MessagingState } from '../interfaces/interface-appState';
import thunk from 'redux-thunk';





const store: Store<MessagingState> = applyMiddleware(thunk)(createStore)(messageReducer);
export default store




