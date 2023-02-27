// import { AsyncStorage } from 'react-native';
import { loginUser } from "../../api/auth";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./types";
import { useNavigation } from '@react-navigation/native';

// Action Creators
export const loginRequest = () => ({
    type: LOGIN_REQUEST,
});

export const loginSuccess = ({ token, email, username }) => ({
    type: LOGIN_SUCCESS,
    payload: {
        token,
        email,
        username,
    },
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

// Async Action Creator
export const login = (username, password) => async (dispatch) => {
    dispatch(loginRequest());

    try {
        const resp = await loginUser({ username, password });

        if (resp.ok) {
            const respJSON = await resp.json();
            dispatch(loginSuccess(respJSON));
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        // Dispatch failure action with error message
        dispatch(loginFailure(error.message));
    }
};
