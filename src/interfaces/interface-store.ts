import {Action} from 'redux'
import {ListenerCallback} from './interface-listenerCallback'
//import {ReplaceReducer} from './interface-replaceReducer';


interface StoreInterface {
    getState()
    dispatch(action:Action)
    subscribe(listener:ListenerCallback)
    replaceReducer(nextReducer)
}

export default StoreInterface;