import {Action} from 'redux'
import {ListenerCallback} from './interface-listenerCallback'

import {ReplaceReducer} from './interface-replaceReducer';


// class StoreInterface<AppState> {
//
//     getState(): AppState {
//             return this._state;
//     }
//     dispatch(action:Action):void {
//             this._state = this.reducer( this._state, action);
//             this._listeners.forEach((listener:ListenerCallback) => listener())
//     }
//     subscribe(listener:ListenerCallback):UnsubscribeCallBack {
//             this._listeners.push(listener);
//             return()=> {
//                 this._listeners = this._listeners.filter(l => l !== listener)
//             }
//     }
//
// }
//
// export default StoreInterface;


interface StoreInterface {

    getState()
    dispatch(action:Action)
    subscribe(listener:ListenerCallback)
    replaceReducer(nextReducer:ReplaceReducer)

}

export default StoreInterface;