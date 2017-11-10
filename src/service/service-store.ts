
import { injectable } from 'inversify';
import { StoreInterface } from '../store/interface-store';
import store from '../store/store';

@injectable()
export default class Store implements StoreInterface {
    public count: number;
    public store:any;
    public constructor(){
        this.count = 0;
        this.store = store
    }

    public returnStore() {
        console.log('Here is the store', this.store.getState())
        return this.store.getState()
    }

    public increment() {
        this.store.dispatch({type:'INCREMENT'})
        return this.store.getState()
    }

    public decrement() {
        this.store.dispatch({type:'DECREMENT'})
        return this.store.getState()
    }
}