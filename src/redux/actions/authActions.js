// import { AsyncStorage } from 'react-native';
import { loginUser } from "../../api/auth";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants/actionTypes";
import { setUserInfo } from "./userActions";

// Action Creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = ({ token, email, username, userId }) => ({
  type: LOGIN_SUCCESS,
  payload: {
    token,
    email,
    username,
    userId,
  },
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Thunk action creator
// Async Action Creator
export const login = (username, password) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const resp = await loginUser({ username, password });

    if (resp.ok) {
      const respJSON = await resp.json();
      console.log("respJSON", respJSON);
      const userRoleId2 = respJSON.roles.reduce((prev, current) => {
        return prev.id === 2 ? prev : current;
      }).id;
      console.log("respJSON roles", respJSON.roles);
      console.log("userRoleId2", userRoleId2);
      
      // store auth info
      dispatch(loginSuccess(respJSON));

      // parse for user info
      const { userId, email, username, roles } = respJSON;
      const userRoleId = roles.reduce((prev, current) => {
        return prev.id === 2 ? prev : current;
      }).id;
      console.log("userRoleId", userRoleId);
      console.log("userId", userId);
      dispatch(setUserInfo({ userId, email, username, roleId: userRoleId }));
      return userId;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    // Dispatch failure action with error message
    dispatch(loginFailure(error.message));
  }
};
