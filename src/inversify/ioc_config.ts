import 'reflect-metadata'
import {Container} from 'inversify'
import StoreInterface from '../interfaces/interface-store'
import TYPES from '../constant/types'
import InversifyStore from '../entities/Store'
import {AppState} from '../interfaces/interface-appState';

let container = new Container();

container.bind<StoreInterface<AppState>>(TYPES.Store).to(InversifyStore)

export default container;