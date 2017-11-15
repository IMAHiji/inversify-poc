import container from '../src/inversify/ioc_config';
import TYPES from './constant/types';
import InversifyStore from './entities/Store';

let injectableStore = container.get<InversifyStore>(TYPES.Store);
console.log('Injectable store: ', injectableStore);
console.log('Injectable store state: ', injectableStore.getState().messages);

const target:HTMLElement = document.getElementById('messages');

function render(): any {
    target.innerHTML = injectableStore.getState().messages.toString();
}

render();
injectableStore.subscribe(render);

document.getElementById('addMessage')
    .addEventListener('click', function(){
        injectableStore.dispatch(
                {type:'ADD_MESSAGE', message:'Hello there i am a message'}
            )
    });
document.getElementById('removeMessage')
    .addEventListener('click', function(){
        injectableStore.dispatch({type:'DELETE_MESSAGE', index:0})
    });