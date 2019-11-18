import { connect } from 'react-redux';
import AuthLoading from './AuthLoading';

export default connect(
  state => ({
    authToken: state.auth.authToken,
  }),
  dispatch => ({}),
)(AuthLoading);
