import {injectable} from 'inversify';
//import TYPES from '../constant/types'
import InterfaceStore from '../interfaces/interface-store'
import store from '../store/store'

console.log("Store in class: ", store)

@injectable()
class Store implements InterfaceStore {

    dispatch({}:object):any{};
    getState():any{};
    subscribe():any{};
    replaceReducer(){};

    public constructor(){
        this.dispatch = store.dispatch;
        this.getState = store.getState;
        this.subscribe = store.subscribe;
        this.replaceReducer = store.replaceReducer
    }

}

export default Store;