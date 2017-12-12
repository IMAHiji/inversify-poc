import { createAction } from 'redux-actions';
import { ThunkAction } from 'redux-thunk';
import {AppState, UIMessageType, } from '../interfaces/interface-appState';
import { AddUIMessagePayload, DismissUIMessagePayload} from '../interfaces/interface-actions'
import ActionTypeKeys from '../store-typings/actionTypeKeys'

type Thunk = ThunkAction<void, AppState, void>

export const addUIMessage = createAction<AddUIMessagePayload, string, UIMessageType>(
    ActionTypeKeys.ADD_UI_MESSAGE, (text, type) => ({text, type})
);

export const deleteUIMessage = createAction<DismissUIMessagePayload, number>(
    ActionTypeKeys.DELETE_MESSAGE, id => id
)

export const addTempUIMessage = (text: string, type: UIMessageType): Thunk =>
    (dispatch, getState) => {
        dispatch(addUIMessage(text, type));
        let id = getState().messaging.lastMessage;
        setTimeout(()=> dispatch(deleteUIMessage(id)), 2000);
    }

