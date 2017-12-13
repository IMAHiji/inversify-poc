import { createAction } from 'redux-actions';
import { ChangeCountPayload } from '../store-typings/type-actions';
import ActionTypeKeys from '../store-typings/actionTypeKeys';

export const changeCount = createAction<ChangeCountPayload, number>(
    ActionTypeKeys.CHANGE_COUNT, (amount) => ({amount:amount})
)

