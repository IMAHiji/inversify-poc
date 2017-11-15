import { Reducer, Action } from 'redux';
import {AppState} from '../interfaces/interface-appState';
import { AddMessageAction, DeleteMessageAction} from '../interfaces/interface-actions';
import { ADD_MESSAGE, DELETE_MESSAGE } from './actions';

const initialState:AppState = { messages: [] };

const MessageReducer:Reducer<AppState> =
    (state:AppState = initialState, action:Action)=>{
        switch(action.type){
            case ADD_MESSAGE:
                return {
                    messages:state.messages.concat((<AddMessageAction>action).message),
                };
            case DELETE_MESSAGE:
                let idx = (<DeleteMessageAction>action).index;
                return {
                    messages: [
                        ...state.messages.slice(0, idx),
                        ...state.messages.slice(idx + 1, state.messages.length)
                    ]
                };
            default:
                return state;
        }
    };


export default MessageReducer;