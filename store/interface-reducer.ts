import { Action } from './interface-actions';

export interface Reducer<T> {
    (state: T, action: Action): T;
}
