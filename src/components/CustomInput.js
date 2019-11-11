
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Spacing } from '../styles';

export default function CustomInput({ icon, ...rest }) {

  return (
    <View style={styles.container}>
      {icon}
      <TextInput
        {...rest}
        style={styles.input}
        placeholderTextColor={'#bdc5cf'}
        underlineColorAndroid="transparent"
      />
    </View>
  );
}

CustomInput.defaultProps = {
  icon: <View />,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 40,
    display: 'flex',
    height: 45,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#424242',
  },
})