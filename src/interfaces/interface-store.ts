

interface InterfaceStore {
    dispatch(action:object):any
    getState():object
    subscribe(listener: any):void
    replaceReducer():any
}

export default InterfaceStore;