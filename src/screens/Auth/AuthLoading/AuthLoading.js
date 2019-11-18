/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { AppLoading } from '../../../components/AppLoading';
import SplashScreen from 'react-native-splash-screen';

export default class AuthLoading extends Component {

  componentDidMount() {
    const { authToken, navigation } = this.props;
    if (authToken) {
      navigation.navigate('App');
    }
    else {
      navigation.navigate('Auth');
    }
    //Hide splash screen
    SplashScreen.hide();
  }

  render() {
    return (
      <AppLoading />
    );
  }
}
