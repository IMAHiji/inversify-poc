import 'reflect-metadata';
import {Container} from 'inversify';
import TYPES from '../constant/types';
import InversifyStore from '../entities/Store';

let container = new Container();

container.bind<InversifyStore>(TYPES.Store).to(InversifyStore);

export default container;