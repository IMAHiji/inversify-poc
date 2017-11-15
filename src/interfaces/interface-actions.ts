import { Action } from 'redux'

export interface AddMessageAction extends Action{
    type:string,
    message:string;
}

export interface DeleteMessageAction extends Action {
    type:string,
    index:number;
}