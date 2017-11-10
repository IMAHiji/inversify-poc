// import store from  './store/store'
import container from '../src/inversify/ioc_config'
import TYPES from './constant/types';
import Store from './entities/Store';

let store = container.get<Store>(TYPES.Store)

console.log('Store?', store.getState())


const target:HTMLElement = document.getElementById('count')

function render(): any {
    target.innerText = store.getState().count.toString()
}

render()
store.subscribe(render)

document.getElementById('increment')
    .addEventListener('click', function(){
        store.dispatch({type:'INCREMENT'})
    })
document.getElementById('decrement')
    .addEventListener('click', function(){
        store.dispatch({type:'DECREMENT'})
    })