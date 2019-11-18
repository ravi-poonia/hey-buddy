/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import { store, persistor } from './src/redux/Store';
import AppNavigation from './src/navigation/AppNavigation';
import { Colors } from './src/styles';
import navigationServices from './src/utils/navigationServices';
import { AppLoading } from './src/components/AppLoading';

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar
          backgroundColor={Colors.statusBar}
          barStyle="light-content"
        />
        <Provider store={store}>
          <PersistGate loading={<AppLoading isVisible={true} />} persistor={persistor}>
            <AppNavigation ref={navigatorRef => {
              navigationServices.setTopLevelNavigator(navigatorRef);
            }} />
          </PersistGate>
        </Provider>
      </>
    );
  }
}
