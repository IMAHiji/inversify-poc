interface InterfaceStore {
    dispatch(action:object):any
    getState():object
    subscribe(listener)
    replaceReducer(nextReducer:Function):any
}

export default InterfaceStore;