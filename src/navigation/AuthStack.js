import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Auth/Login';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
});

export default AuthStack;
