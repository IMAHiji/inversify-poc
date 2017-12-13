import {MessageType} from '../store-typings/type-appState';

export type ChangeCountPayload = {
    amount:number
}

export type AddMessagePayload = {
    text: string;
    type: MessageType
}

export type DismissMessagePayload = number

export type MessagePayload = {
    text:string
    type:MessageType,
    id?:number;
}