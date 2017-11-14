import {inject, injectable} from 'inversify';
import {AppState} from '../interfaces/interface-appState';
import {Reducer} from '../interfaces/interface-reducer';
import TYPES from '../constant/types'
import {ListenerCallback} from '../interfaces/interface-listenerCallback'
import StoreInterface from '../interfaces/interface-store'
import store from '../store/store'
import {Action} from 'redux';

console.log("Store in class: ", store)

@injectable()
class InversifyStore implements StoreInterface{

    public _state: AppState;
    public _listeners: ListenerCallback[] =[];
    public reducer:Reducer<any>

    constructor(){}

    public dispatch(action:Action){
        return store.dispatch(action)
    }

    public getState(){
        return store.getState()
    }

    public subscribe(listener:ListenerCallback){
        return store.subscribe(listener)
    }






}

export default InversifyStore;