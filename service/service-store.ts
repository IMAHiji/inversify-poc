
import { injectable } from 'inversify';
import { StoreInterface } from '../store/interface-store';
import {createAppStore} from '../store/store';

@injectable()
export default class Store implements StoreInterface {
    public count: number;
    public store:any;
    public constructor(){
        this.count = 0;
        this.store = createAppStore()
    }

    public returnStore() {
        console.log('Hello from inside the store')
        console.log('Here is the store', this.store)
    }
}