import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ResultScreen extends Component {
  static navigationOptions = {
    title: 'Result',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.navigation.getParam('text')} result!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});