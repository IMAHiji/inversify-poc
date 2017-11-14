import {AddMessageAction, DeleteMessageAction} from '../interfaces/interface-actions';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

class MessageActions {
    static addMessage(message:string):AddMessageAction {
        return{
            type:ADD_MESSAGE,
            message:message
        };
    }
    static deleteMessage(index:number):DeleteMessageAction{
        return{
            type:DELETE_MESSAGE,
            index:index
        };
    }
}

export default MessageActions;