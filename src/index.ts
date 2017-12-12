import container from '../src/inversify/ioc_config';
import TYPES from './constant/types';
import InversifyStore from './entities/Store';
import {addUIMessage, deleteUIMessage} from './store/actions'



let injectableStore = container.get<InversifyStore>(TYPES.Store);

console.log('Injectable store state: ', injectableStore.getState().messages);


const target:HTMLElement = document.getElementById('messages');


function render(): any {
    target.innerHTML = injectableStore.getState().messages[0].text.toString();
}

render();
injectableStore.subscribe(render);

document.getElementById('addMessage')
    .addEventListener('click', function(){
        injectableStore.dispatch(
                addUIMessage('HI', 'info')
            )
    });
document.getElementById('removeMessage')
    .addEventListener('click', function(){
        injectableStore.dispatch(
            deleteUIMessage(0)
        )
    });