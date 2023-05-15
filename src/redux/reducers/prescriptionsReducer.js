import { FETCH_PRESCRIPTIONS_REQUEST, FETCH_PRESCRIPTIONS_SUCCESS, FETCH_PRESCRIPTIONS_FAILURE } from '../constants/actionTypes';

const initialState = {
  loading: false,
  prescriptions: [],
  error: ''
};

const prescriptionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRESCRIPTIONS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_PRESCRIPTIONS_SUCCESS:
            return {
                loading: false,
                prescriptions: action.payload,
                error: ''
            };
        case FETCH_PRESCRIPTIONS_FAILURE:
            return {
                loading: false,
                prescriptions: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export default prescriptionsReducer;
