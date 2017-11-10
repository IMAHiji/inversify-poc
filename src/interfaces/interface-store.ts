

interface InterfaceStore {
    dispatch(action:object):any
    getState():object
    subscribe(listener)
    replaceReducer():any
}

export default InterfaceStore;