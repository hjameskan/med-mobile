import { getPrescriptionsById } from "../../api/prescriptions";
import {FETCH_PRESCRIPTIONS_REQUEST, FETCH_PRESCRIPTIONS_SUCCESS, FETCH_PRESCRIPTIONS_FAILURE} from '../constants/actionTypes';

// Action Creators
export const fetchPrescriptionsRequest = () => ({
  type: FETCH_PRESCRIPTIONS_REQUEST
});

export const fetchPrescriptionsSuccess = (prescriptions) => ({
  type: FETCH_PRESCRIPTIONS_SUCCESS,
  payload: prescriptions
});

export const fetchPrescriptionsFailure = error => ({
  type: FETCH_PRESCRIPTIONS_FAILURE,
  payload: error
});


// Asynchronous Thunk Action Creator
export const fetchPrescriptions = (userId) => {
    return async (dispatch) => {
      dispatch(fetchPrescriptionsRequest());
        try {
          const response = await getPrescriptionsById({ userId });
          const prescriptions = await response.json();
          dispatch(fetchPrescriptionsSuccess(prescriptions));
        } catch (error) {
          console.log('error', error);
          dispatch(fetchPrescriptionsFailure(error.message));
        }
      };
};