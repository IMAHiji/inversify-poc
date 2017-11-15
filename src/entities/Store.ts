import {injectable} from 'inversify';

import store from '../store/store'

import StoreInterface from '../interfaces/interface-store'

import {AddMessageAction, DeleteMessageAction} from '../interfaces/interface-actions';
import {ListenerCallback} from '../interfaces/interface-listenerCallback';

import {ReplaceReducer} from '../interfaces/interface-replaceReducer';

//import {Action} from 'redux';
// import {UnsubscribeCallBack} from '../interfaces/interface-unsubscribeCallback';



// @injectable()
// class InversifyStore implements <T>{
//     public _state:AppState;
//     public reducer:Reducer<T>;
//     dispatch({}:object):any{};
//     getState():any{};
//     subscribe(listener:Function):any{};
//     replaceReducer(nextReducer: Function):any{};
//
//     public constructor(initialState:AppState, reducer:Reducer<T>){
//         this.dispatch = store.dispatch;
//         this.getState = store.getState;
//         this.subscribe = store.subscribe;
//         this.replaceReducer = store.replaceReducer
//
//     }
//
// }
//
// export default InversifyStore;


@injectable()
class InversifyStore implements StoreInterface {


    getState(){
       return store.getState()
    }
    dispatch(action:AddMessageAction | DeleteMessageAction){
        return store.dispatch(action)
    }
    subscribe(listener:ListenerCallback){
        return store.subscribe(listener)
    }
    replaceReducer(nextReducer:ReplaceReducer){
        return store.replaceReducer(nextReducer)
    }


}

export default InversifyStore