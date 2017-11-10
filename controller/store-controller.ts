import {
    controller, httpGet
} from 'inversify-express-utils';
import { injectable, inject } from 'inversify';
import Store  from '../service/service-store';

import TYPES from '../constant/types';

@injectable()
@controller('/store')
export class StoreController {

    constructor(@inject(TYPES.Store) private storeService: Store) { }

    @httpGet('/')
    public getStore(): any {
        return this.storeService.returnStore();
    }

    @httpGet('/increment')
    public increment(): any {
        return this.storeService.increment();
    }

    @httpGet('/decrement')
    public decrement(): any {
        return this.storeService.increment();
    }

}
