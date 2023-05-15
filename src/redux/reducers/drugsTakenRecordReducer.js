import { 
    FETCH_DRUGS_TAKEN_RECORD_REQUEST, 
    FETCH_DRUGS_TAKEN_RECORD_SUCCESS, 
    FETCH_DRUGS_TAKEN_RECORD_FAILURE 
  } from '../constants/actionTypes';
  
  const initialState = {
    loading: false,
    drugsTakenRecord: [],
    error: ''
  };
  
  const drugsTakenRecordReducer = (state = initialState, action) => {
    console.log("drugsTakenRecordReducer action", action);
    switch (action.type) {
      case FETCH_DRUGS_TAKEN_RECORD_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_DRUGS_TAKEN_RECORD_SUCCESS:
        return {
          loading: false,
          drugsTakenRecord: action.payload,
          error: ''
        };
      case FETCH_DRUGS_TAKEN_RECORD_FAILURE:
        return {
          loading: false,
          drugsTakenRecord: [],
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default drugsTakenRecordReducer;
  