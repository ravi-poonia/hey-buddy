/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';

export default function CustomPicker({ id = '', icon, error, getRef, value, onChange, options, ...rest }) {

  if (typeof value === 'string') {
    value = options.filter(option => option.value === value)[0];
  }

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, {
        borderColor: error ? 'red' : '#cccccc',
      }]}>
        {icon}
        <RNPickerSelect
          {...rest}
          ref={getRef}
          onValueChange={onChange}
          items={options}
          style={{
            ...pickerSelectStyles,
            iconContainer: {
              top: 10,
              right: 12,
            },
          }}
          useNativeAndroidPickerStyle={false}
          Icon={() => {
            return <EntypoIcon
              style={styles.inputIcon}
              name="chevron-thin-down"
              size={20}
              color="#bdc5cf" />;
          }}
        />
      </View>
      {error &&
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{error}</Text>
        </View>
      }
    </View>
  );
}

CustomPicker.defaultProps = {
  icon: <View />,
  mode: 'dialog',
  getRef: null,
};

const styles = StyleSheet.create({
  container: {
    height: 65,
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
  picker: {
    flex: 1,
    height: 42,
    marginVertical: 5,
    backgroundColor: '#fff',
  },
  item: {
    color: '#424242',
  },
  errorContainer: {
    width: '100%',
    paddingLeft: 20,
  },
  error: {
    color: 'red',
    fontSize: 12,
    lineHeight: 15,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: '#424242',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    width: 240,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    color: '#424242',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
