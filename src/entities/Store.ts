import {injectable} from 'inversify';
import store from '../store/store'
import StoreInterface from '../interfaces/interface-store'

import {ListenerCallback} from '../interfaces/interface-listenerCallback';
import {ReplaceReducer} from '../interfaces/interface-replaceReducer';

@injectable()
class InversifyStore implements StoreInterface {

    getState(){
       return store.getState()
    }
    //Currently untyped for now.
    dispatch(action){
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