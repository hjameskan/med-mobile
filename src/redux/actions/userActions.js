import { SET_USER_INFO, CLEAR_USER_INFO } from "../constants/actionTypes";

// Action Creators
export const setUserInfo = ({userId, username, email, roleId}) => {
    return {
        type: SET_USER_INFO,
        payload: {
            userId,
            username,
            email,
            roleId,
        }
    };
};

export const clearUserInfo = () => {
    return {
        type: CLEAR_USER_INFO
    };
};
  