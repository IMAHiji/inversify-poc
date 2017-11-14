import {Reducer} from './interface-reducer'
import {Action} from './interface-actions'
import {ListenerCallback} from './interface-listenerCallback'
import { UnsubscribeCallBack } from './interface-unsubscribeCallback';

class StoreInterface<T> {
    private _state: T;
    private _listeners: ListenerCallback[] = [];
    constructor(
        private reducer:Reducer<T>,
        initialState:T
    ){
        this._state = initialState
    }

    getState(): T {
            return this._state;
    }
    dispatch(action:Action):void {
            this._state = this.reducer(this._state, action);
            this._listeners.forEach((listener:ListenerCallback) => listener())
    }
    subscribe(listener:ListenerCallback):UnsubscribeCallBack {
            this._listeners.push(listener);
            return()=> {
                this._listeners = this._listeners.filter(l => l !== listener)
            }
    }

}

export default StoreInterface;