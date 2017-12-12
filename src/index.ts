import container from '../src/inversify/ioc_config';
import TYPES from './constant/types';
import InversifyStore from './entities/Store';
import {addUIMessage, deleteUIMessage} from './store/messageActions'



let injectableStore = container.get<InversifyStore>(TYPES.Store);

console.log('Injectable store state: ', injectableStore.getState().messaging);


const target:HTMLElement = document.getElementById('messages');


function render(): any {
    let messageArray = []
    injectableStore.getState().messaging.messages.forEach((arrayItem)=>{
        messageArray.push(`${arrayItem.text} index: ${arrayItem.id},  <br/>` );
    })

    target.innerHTML = messageArray.toString().replace(/\,/g, "");

}

render();
injectableStore.subscribe(render);

document.getElementById('addMessage')
    .addEventListener('click', function(){
        injectableStore.dispatch(
                addUIMessage('Additional Message', 'info')
            )
});
document.getElementById('removeMessage')
    .addEventListener('click', function(){
        injectableStore.dispatch(
            deleteUIMessage(injectableStore.getState().messaging.lastMessage)
        )
});