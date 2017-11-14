import 'reflect-metadata'
import {Container} from 'inversify'
import StoreInterface from '../interfaces/interface-store'
import TYPES from '../constant/types'
import Store from '../interfaces/interface-store'

let container = new Container();

container.bind<StoreInterface>(TYPES.Store).to(Store)

export default container;