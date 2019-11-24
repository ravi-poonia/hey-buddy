import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Auth/Login';
import OtpScreen from '../screens/Auth/OtpScreen';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  OtpScreen: {
    screen: OtpScreen,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
},
  {
    initialRouteName: 'Login',
  },
);

export default AuthStack;
