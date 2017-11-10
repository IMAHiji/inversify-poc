
import { injectable } from 'inversify';
import { StoreInterface } from '../store/interface-store';


@injectable()
export default class Store implements StoreInterface {
    public count: number
    public constructor(){
        this.count = 0;
    }

    public returnStore() {
        console.log('Hello from inside the store')
    }
}