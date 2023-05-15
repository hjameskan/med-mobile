import { connect } from 'react-redux';
import PrescriptionsScreen from '../screens/PrescriptionsScreen';
import { fetchPrescriptions } from '../redux/actions/prescriptionsActions';

const mapStateToProps = state => ({
    prescriptions: state.userPrescription.prescriptions
});

const mapDispatchToProps = dispatch => ({
  // Map your needed dispatch functions here
  fetchPrescriptions: () => dispatch(fetchPrescriptions())
});

export default connect(mapStateToProps, mapDispatchToProps)(PrescriptionsScreen);
