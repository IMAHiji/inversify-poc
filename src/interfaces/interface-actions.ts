import { Action } from 'redux'
import {UIMessageType} from './interface-appState';

export interface AddMessageAction extends Action{
    type:string,
    message:string;
}

export interface DeleteMessageAction extends Action {
    type:string,
    index:number;
}

export interface ChangeCount extends Action {
    amount:number
}


export type AddUIMessagePayload = {
    text: string;
    type: UIMessageType
}

export type DismissUIMessagePayload = number

export type UIMessagePayload = {
    text:string
    type:UIMessageType,
    id?:number;
}