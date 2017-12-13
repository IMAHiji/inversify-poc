import { createAction } from 'redux-actions';
import { ThunkAction } from 'redux-thunk';
import {AppState, MessageType, } from '../store-typings/type-appState';
import { AddMessagePayload, DismissMessagePayload} from '../store-typings/type-actions';
import ActionTypeKeys from '../store-typings/actionTypeKeys'

type Thunk = ThunkAction<void, AppState, void>

export const addMessage = createAction<AddMessagePayload, string, MessageType>(
    ActionTypeKeys.ADD_UI_MESSAGE, (text, type) => ({text, type})
);

export const deleteMessage = createAction<DismissMessagePayload, number>(
    ActionTypeKeys.DELETE_MESSAGE, id => id
)

export const addTempMessage = (text: string, type: MessageType): Thunk =>
    (dispatch, getState) => {
        dispatch(addMessage(text, type));
        let id = getState().messaging.lastMessage;
        setTimeout(()=> dispatch(deleteMessage(id)), 2000);
    }

