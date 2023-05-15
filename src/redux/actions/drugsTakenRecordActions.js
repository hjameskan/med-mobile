import {
  FETCH_DRUGS_TAKEN_RECORD_REQUEST,
    FETCH_DRUGS_TAKEN_RECORD_SUCCESS,
    FETCH_DRUGS_TAKEN_RECORD_FAILURE,
} from '../constants/actionTypes';
import { getDrugsTakenRecordByUserId } from "../../api/drugsTakenRecord";

export const fetchDrugsTakenRecordRequest = () => ({
  type: FETCH_DRUGS_TAKEN_RECORD_REQUEST
});

export const fetchDrugsTakenRecordSuccess = (drugsTakenRecord) => ({
  type: FETCH_DRUGS_TAKEN_RECORD_SUCCESS,
  payload: drugsTakenRecord
});

export const fetchDrugsTakenRecordFailure = (error) => ({
  type: FETCH_DRUGS_TAKEN_RECORD_FAILURE,
  payload: error
});


// Thunk
export const fetchDrugsTakenRecord = (userId) => {
    return async (dispatch) => {
        try {
          dispatch(fetchDrugsTakenRecordRequest());
          const response = await getDrugsTakenRecordByUserId({userId});
          const records = await response.json();
          dispatch(fetchDrugsTakenRecordSuccess(records));
        } catch (error) {
          dispatch(fetchDrugsTakenRecordFailure(error));
        }
    };
};