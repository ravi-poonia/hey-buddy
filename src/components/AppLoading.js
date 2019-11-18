/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export class AppLoading extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }
}