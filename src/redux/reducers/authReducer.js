import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    error: null,
    token: null,
    email: null,
    username: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                error: null,
                token: action.payload.token,
                email: action.payload.email,
                username: action.payload.username,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                error: action.payload
            };
        default:
            return state;
    }
}