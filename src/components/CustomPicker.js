
import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';

export default function CustomPicker({ id = '', icon, getRef, value, onChange, options, ...rest }) {

  return (
    <View style={styles.container}>
      {icon}
      <RNPickerSelect
        {...rest}
        ref={getRef}
        onValueChange={(newValue, index) => onChange(id, newValue, index)}
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
  );
}

CustomPicker.defaultProps = {
  icon: <View />,
  mode: 'dialog',
  getRef: null,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 40,
    flex: 1,
    height: 45,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: '#cccccc',
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
