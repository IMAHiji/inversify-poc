import {UIMessageType} from './interface-appState';

export type ChangeCountPayload = {
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