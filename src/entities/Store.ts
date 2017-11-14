import {injectable} from 'inversify';

import {Reducer} from '../interfaces/interface-reducer';

import {ListenerCallback} from '../interfaces/interface-listenerCallback'
import store from '../store/store'
import {AppState} from '../interfaces/interface-appState';
//import {Action} from 'redux';
// import {UnsubscribeCallBack} from '../interfaces/interface-unsubscribeCallback';



@injectable()
class InversifyStore<T>{
    public _state:AppState;
    public _listeners:ListenerCallback[];
    public reducer:Reducer<T>;
    dispatch({}:object):any{};
    getState():any{};
    subscribe(listener:Function):any{};
    replaceReducer(nextReducer: Function):any{};

    public constructor(initialState:AppState, reducer:Reducer<T>){
        this.dispatch = store.dispatch;
        this.getState = store.getState;
        this.subscribe = store.subscribe;
        this.replaceReducer = store.replaceReducer
        this._state = initialState
        this.reducer = reducer
    }

}

export default InversifyStore;