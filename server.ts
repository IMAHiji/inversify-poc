import 'reflect-metadata';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import { Container } from 'inversify';
import {createAppStore} from './store/store';
import * as bodyParser from 'body-parser';
import TYPES from './constant/types';
import TAGS from './constant/tags';
import { HomeController } from './controller/home-controller';
import { UserController } from './controller/user-controller';
import { UserService } from './service/service-user';
import {StoreController} from './controller/store-controller';
import Store from './service/service-store'


// load everything needed to the Container
let container = new Container();
const store = createAppStore();
console.log('store created', store)



container.bind<interfaces.Controller>(TYPE.Controller).to(HomeController).whenTargetNamed(TAGS.HomeController);
container.bind<interfaces.Controller>(TYPE.Controller).to(UserController).whenTargetNamed(TAGS.UserController);
container.bind<UserService>(TYPES.UserService).to(UserService);

container.bind<Store>(TYPES.Store).to(Store)
container.bind<interfaces.Controller>(TYPE.Controller).to(StoreController).whenTargetNamed(TAGS.StoreController);


// start the server
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});

let app = server.build();
app.listen(3030);
console.log('Server started on port 3030 ');
