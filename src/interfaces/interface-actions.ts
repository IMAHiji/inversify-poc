import { Action } from 'redux'

export interface AddMessageAction extends Action{
    message:string;
}

export interface DeleteMessageAction extends Action {
    index:number;
}