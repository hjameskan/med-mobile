import { SET_USER_INFO, CLEAR_USER_INFO } from '../constants/actionTypes';

const initialState = {
    userId: null,
    username: null,
    email: null,
    roldeId: null,
  };
  
export default userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                userId: action.payload.userId,
                username: action.payload.userId,
                email: action.payload.email,
                roldeId: action.payload.roldeId,
            };
        case CLEAR_USER_INFO:
            return {
                ...state,
                userId: null,
                username: null,
                email: null
            };
            default:
            return state;
    }
};
  