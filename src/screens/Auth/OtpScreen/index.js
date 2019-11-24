import { connect } from 'react-redux';
import OtpScreen from './OtpScreen';
import * as authActions from './../../../redux/actions/authActions';
import { StackActions, NavigationActions } from 'react-navigation';

export default connect(
  state => ({
    loading: state.authStatus.isLoading,
    errorMessage: state.authStatus.errorMessage,
  }),
  dispatch => ({
    signup: (data, navigation) => {
      dispatch(authActions.signup(data))
        .then((res) => {
          const resetAction = StackActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: 'Login', params: { email: res.action.payload.email } })],
          });
          navigation.dispatch(resetAction);
        });
    },
  }),
)(OtpScreen);
