import container from '../src/inversify/ioc_config';
import TYPES from './constant/types';
import InversifyStore from './entities/Store';
import { addUIMessage, deleteUIMessage } from './store/messageActions'
import countReducer from './store/countReducer'
import {combineReducers} from 'redux';
import messageReducer from './store/messageReducer'
import {changeCount} from './store/countActions';

let injectableStore = container.get<InversifyStore>(TYPES.Store);

const countExists = () => !!injectableStore.getState().count

const createReducers = (injectedReducers) => {
    console.log('Injected reducer', injectedReducers)
    return combineReducers({
        messaging:messageReducer,
        ...injectedReducers
    })
};

const elements = {
    renderTarget:document.getElementById('messages'),
    counterIndicator:document.getElementById('countIndicator'),
    addMessage:document.getElementById('addMessage'),
    removeMessage:document.getElementById('removeMessage'),
    injectCountReducer:document.getElementById('injectCountReducer'),
    incrementCount:document.getElementById('incrementCount'),
    decrementCount:document.getElementById('decrementCount')
}
const { renderTarget, counterIndicator, addMessage, removeMessage, injectCountReducer, incrementCount, decrementCount } = elements;

console.log('Injectable store state: ', injectableStore.getState());

const target:HTMLElement = renderTarget
const counterTarget:HTMLElement = counterIndicator

function render(): any {
    let messageArray = []
    injectableStore.getState().messaging.messages.forEach((arrayItem)=>{
        messageArray.push(`${arrayItem.text} index: ${arrayItem.id},  <br/>` );
    })
    target.innerHTML = messageArray.toString().replace(/\,/g, "");
    if(countExists()){
        counterTarget.innerHTML = injectableStore.getState().count.currentCount.toString()
    } else {
       console.log('Count reducer does not yet exist on the window.')
    }
}
render();

injectableStore.subscribe(render);

let localReducers = {count:countReducer};

addMessage.addEventListener('click', function(){
    injectableStore.dispatch(
        addUIMessage('Additional Message', 'info')
    )
});
removeMessage.addEventListener('click', function(){
    injectableStore.dispatch(
        deleteUIMessage(injectableStore.getState().messaging.lastMessage)
    )
});
injectCountReducer.addEventListener('click', function () {
    injectableStore.replaceReducer(createReducers(localReducers))
    console.log('Store after injection:  ', injectableStore.getState())
});
incrementCount.addEventListener('click', function () {
    console.log('Increment');
    countExists()?injectableStore.dispatch(changeCount(1)):alert('Please inject local counter reducer')
});
decrementCount.addEventListener('click', function () {
    console.log('Decrement');
    countExists()?injectableStore.dispatch(changeCount(-1)):alert('Please inject local counter reducer')
});