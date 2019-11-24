/* eslint-disable react-native/no-inline-styles */

import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default class CustomInput extends Component {
  render() {
    const { icon, getRef, error, ...rest } = this.props;
    return (
      <View style={styles.container}>
        <View style={[styles.inputContainer, {
          borderColor: error ? 'red' : '#cccccc',
        }]}>
          {icon}
          <TextInput
            ref={getRef}
            {...rest}
            style={styles.input}
            placeholderTextColor={'#bdc5cf'}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.errorContainer}>
          {error && <Text style={styles.error}>{error}</Text>}
        </View>
      </View>
    );
  }
}

CustomInput.defaultProps = {
  icon: <View />,
  blurOnSubmit: false,
  getRef: null,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 40,
    display: 'flex',
    height: 45,
    paddingRight: 20,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#424242',
  },
  errorContainer: {
    width: '100%',
    height: 15,
    paddingLeft: 20,
  },
  error: {
    color: 'red',
    fontSize: 12,
    lineHeight: 15,
  },
});
