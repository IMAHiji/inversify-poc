
import {AppState, MessagingState } from '../interfaces/interface-appState';
import { addUIMessage, deleteUIMessage, addTempUIMessage } from './messageActions';
import { UIMessagePayload } from '../interfaces/interface-actions'
import { handleActions, Action } from 'redux-actions';

const initialState:AppState = {
    messaging: {
        messages: [{type:'info', text:'Welcome this is the seed message!', id:1}],
        lastMessage:1
    }
};

const messagingReducer = handleActions<MessagingState, UIMessagePayload>(
    {
        [addUIMessage.toString()]: (state, action: Action<UIMessagePayload>): MessagingState =>({
            ...state,
            lastMessage: state.lastMessage+1,
            messages:[{ ...action.payload, id:state.lastMessage +1}].concat(state.messages)
        }),
        [deleteUIMessage.toString()]: <DismissUIMessagePayload>(state, action: Action<DismissUIMessagePayload>): MessagingState => ({
            ...state,
            lastMessage: state.lastMessage-1,
            messages: state.messages.filter(m => m.id !== action.payload)
        }),
        [addTempUIMessage.toString()]: (state, action: Action<UIMessagePayload>): MessagingState => ({
            ...state,
            messages: state.messages.filter(m => m.id !== action.payload.id)
        })
    },
    initialState.messaging
);

export default messagingReducer;