import store from  './store/store'

console.log('Store?', store)

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