import container from '../src/inversify/ioc_config'
import TYPES from './constant/types';
import InversifyStore from './entities/Store';


//Grab the store from the IoC container
//let injectableStore = container.get<InversifyStore<any>>(TYPES.Store)
import store from './store/store'

// console.log('Injectable store: ', injectableStore)

const target:HTMLElement = document.getElementById('messages')

function render(): any {
    console.log(store.getState().messages)
    target.innerHTML = store.getState().messages.toString()
}

render()
store.subscribe(render)

document.getElementById('addMessage')
    .addEventListener('click', function(){
        store.dispatch(
                {type:'ADD_MESSAGE', message:'Hello there i am a message'}
            )
    })
document.getElementById('removeMessage')
    .addEventListener('click', function(){
        store.dispatch({type:'DELETE_MESSAGE', index:0})
    })