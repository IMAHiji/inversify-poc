import store from  './store/store'

console.log('Store?', store)

const target:HTMLElement = document.getElementById('count')

function render(): any {
    target.innerText = store.getState().count.toString()
}

render()
store.subscribe(render)