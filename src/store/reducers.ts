
/**
 * Counter Reducer
 */
import { Reducer, Action } from 'redux';
import { StoreInterface } from './interface-store';
import {
    INCREMENT,
    DECREMENT
} from './actions';

const initialState: StoreInterface = { count: 0 };

// Create our reducer that will handle changes to the state
export const counterReducer: Reducer<StoreInterface> =
    (state: StoreInterface = initialState, action: Action): StoreInterface => {
        switch (action.type) {
            case INCREMENT:
                return Object.assign({}, state, { count: state.count + 1 });
            case DECREMENT:
                return Object.assign({}, state, { count: state.count - 1 });
            default:
                return state;
        }
    };