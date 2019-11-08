import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../screens/Home';

const AppTabNavigator = createBottomTabNavigator({
  Home: Home,
  Profile: Home,
});

export default AppTabNavigator;
