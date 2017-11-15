import { Action } from 'redux';

export interface Reducer<T> {
    (state: T, action: Action): T;
}
