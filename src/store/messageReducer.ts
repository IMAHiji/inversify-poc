
import {AppState, MessagingState } from '../store-typings/type-appState';
import { addMessage, deleteMessage, addTempMessage } from './messageActions';
import { MessagePayload } from '../interfaces/interface-actions'
import { handleActions, Action } from 'redux-actions';

const initialState:AppState = {
    messaging: {
        messages: [{type:'info', text:'Welcome this is the seed message!', id:1}],
        lastMessage:1
    }
};

const messagingReducer = handleActions<MessagingState, MessagePayload>(
    {
        [addMessage.toString()]: (state, action: Action<MessagePayload>): MessagingState =>({
            ...state,
            lastMessage: state.lastMessage+1,
            messages:[{ ...action.payload, id:state.lastMessage +1}].concat(state.messages)
        }),
        [deleteMessage.toString()]: <DismissUIMessagePayload>(state, action: Action<DismissUIMessagePayload>): MessagingState => ({
            ...state,
            lastMessage: state.lastMessage-1,
            messages: state.messages.filter(m => m.id !== action.payload)
        }),
        [addTempMessage.toString()]: (state, action: Action<MessagePayload>): MessagingState => ({
            ...state,
            messages: state.messages.filter(m => m.id !== action.payload.id)
        })
    },
    initialState.messaging
);

export default messagingReducer;