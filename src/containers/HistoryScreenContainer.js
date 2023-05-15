import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import HistoryScreen from '../screens/HistoryScreen';
import { fetchDrugsTakenRecord } from '../redux/actions/drugsTakenRecordActions';

const HistoryScreenContainer = ({ drugsTakenRecord, fetchDrugsTakenRecord }) => {
//   useEffect(() => {
//     fetchDrugsTakenHistory();
//   }, [fetchDrugsTakenHistory]);
    console.log("drugsTakenRecord", drugsTakenRecord);
    return <HistoryScreen drugsTakenRecord={drugsTakenRecord} />;
};

const mapStateToProps = (state) => ({
    drugsTakenRecord: state.drugsTakenRecord.drugsTakenRecord,
});

const mapDispatchToProps = {
    fetchDrugsTakenRecord,
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreenContainer);
