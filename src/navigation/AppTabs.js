import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, StackViewTransitionConfigs } from 'react-navigation-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';
import { Colors } from '../styles';
import IconWithBadge from '../components/IconWithBadge';
import Search from '../screens/Search';
import ResultScreen from '../screens/Result/Result';

let SearchStack = createStackNavigator(
  {
    Home: Home,
    Search: Search,
  },
  {
    transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
    navigationOptions: {
      header: null,
    },
    defaultNavigationOptions: {
      gesturesEnabled: false,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: Colors.primary,
      },
    },
  }
);

const HomeStack = createStackNavigator(
  {
    Home: SearchStack,
    Result: ResultScreen,
    Details: Home,
  }, {
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: Colors.primary,
    },
  },
}
);


const AppTabNavigator = createBottomTabNavigator(
  {
    HOME: HomeStack,
    BOOK: Home,
    'APP FEED': Home,
    NOTIFICATION: Home,
    PROFILE: Home,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'HOME') {
          return <AntDesign name={'home'} size={25} color={tintColor} />;
        }
        else if (routeName === 'BOOK') {
          return <Feather name={'book'} size={25} color={tintColor} />;
        }
        else if (routeName === 'APP FEED') {
          return <SimpleLineIcons name={'pencil'} size={22} color={tintColor} />;
        }
        else if (routeName === 'NOTIFICATION') {
          return <IconWithBadge
            icon={<Ionicons name={'ios-notifications-outline'} size={30} color={tintColor} />}
            badgeCount={3} />;
        }
        else if (routeName === 'PROFILE') {
          return <MaterialIcons name={'person-outline'} size={30} color={tintColor} />;
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: Colors.primary,
      inactiveTintColor: Colors.secondary,
    },
  }
);

export default AppTabNavigator;
