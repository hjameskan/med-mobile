import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import prescriptionsReducer from './prescriptionsReducer';
import drugsTakenRecordReducer from './drugsTakenRecordReducer';

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    userPrescription: prescriptionsReducer,
    drugsTakenRecord: drugsTakenRecordReducer,
});