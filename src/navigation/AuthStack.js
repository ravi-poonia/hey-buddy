import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Auth/Login';

const AuthStack = createStackNavigator({
  Login: Login,
});

export default AuthStack;
