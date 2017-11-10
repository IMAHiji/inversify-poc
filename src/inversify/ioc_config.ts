import 'reflect-metadata'
import {Container} from 'inversify'
import InterfaceStore from '../interfaces/interface-store'
import TYPES from '../constant/types'
import Store from '../entities/Store'

let container = new Container();

container.bind<InterfaceStore>(TYPES.Store).to(Store)

export default container;