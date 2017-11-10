const ADD_USER = 'app/users/ADD_USER';

export interface User {
    name: string,
    email: string
}

export interface Action {
    type: string;
    user?: User;
}

export function addUser(user: User): Action {
    return {
        type: ADD_USER,
        user: user
    };
}

export interface UsersState {
    users: User[]
}

function initialState(): UsersState {
    return {
        users: [

        ]
    };
}

export default function reducer(state: UsersState = initialState(), action: Action = {type: null}): UsersState {
    switch(action.type) {
        default: return state;
        case ADD_USER:
            const users = state.users.slice();
            users.push(action.user);
            return Object.assign({}, state, {users: users});
    }
}