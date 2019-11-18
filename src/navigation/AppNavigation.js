import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthLoading from '../screens/Auth/AuthLoading';
import AppTabNavigator from './AppTabs';
import AuthStack from './AuthStack';

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: AppTabNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
