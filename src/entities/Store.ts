import {injectable} from 'inversify';
import store from '../store/store'
import StoreInterface from '../interfaces/interface-store'
import {ListenerCallback} from '../interfaces/interface-listenerCallback';
import {Action} from 'redux';





@injectable()
class InversifyStore implements StoreInterface {

    getState(){
       return store.getState()
    }
    dispatch(action:Action){
        return store.dispatch(action)
    }
    subscribe(listener:ListenerCallback){
        return store.subscribe(listener)
    }
    replaceReducer(nextReducer){
        return store.replaceReducer(nextReducer)
    }

}

export default InversifyStore