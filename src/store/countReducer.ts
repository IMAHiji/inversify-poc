import { AppState, CountState } from '../store-typings/type-appState';
import {Action, handleActions} from 'redux-actions';
import {ChangeCountPayload} from '../interfaces/interface-actions';
import {changeCount} from './countActions';


const initialState:AppState = {
    count: {
        currentCount:0
    }
}


const countReducer = handleActions<CountState, ChangeCountPayload>(
    {
        [changeCount.toString()]:(state, action: Action<ChangeCountPayload>): CountState =>({
            ...state,
            currentCount:state.currentCount + (action.payload.amount)
        })
    },
    initialState.count
)

export default countReducer;