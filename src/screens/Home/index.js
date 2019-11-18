import { connect } from 'react-redux';
import Home from './Home';
import * as authActions from './../../redux/actions/authActions';
import navigationServices from '../../utils/navigationServices';

export default connect(
  state => ({
  }),
  dispatch => ({
    logout: () => {
      dispatch(authActions.logout())
        .then(() => navigationServices.navigate('Auth'));
    },
  }),
)(Home);
