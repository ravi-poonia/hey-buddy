import { connect } from 'react-redux';
import Login from './Login';
import * as authActions from './../../../redux/actions/authActions';
import navigationServices from '../../../utils/navigationServices';

export default connect(
  state => ({
    loading: state.auth.isLoading,
  }),
  dispatch => ({
    login: (data) => {
      dispatch(authActions.login(data))
        .then(() => {
          navigationServices.navigate('App');
        });
    },
    getCourseList: () => {
      dispatch(authActions.getCourseList());
    },
  }),
)(Login);
