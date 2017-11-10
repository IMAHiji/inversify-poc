
/**
 * Counter Reducer
 */
import { Reducer, Action } from 'redux';
import { StateInterface } from './interface-state';
import {
    INCREMENT,
    DECREMENT
} from './actions';

const initialState: StateInterface = { count: 0 };

// Create our reducer that will handle changes to the state
export const counterReducer: Reducer<StateInterface> =
    (state: StateInterface = initialState, action: Action): StateInterface => {
        switch (action.type) {
            case INCREMENT:
                return Object.assign({}, state, { count: state.count + 1 });
            case DECREMENT:
                return Object.assign({}, state, { count: state.count - 1 });
            default:
                return state;
        }
    };