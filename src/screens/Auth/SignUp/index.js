import { connect } from 'react-redux';
import SignUp from './SignUp';

export default connect(
  state => ({
    courseList: state.auth.courseList,
  }),
  dispatch => ({}),
)(SignUp);
