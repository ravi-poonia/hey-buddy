
import React from 'react';
import { View, Picker, StyleSheet } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';

export default function CustomPicker({ id = '', icon, value, onChange, options, ...rest }) {

  return (
    <View style={styles.container}>
      {icon}
      <Picker
        {...rest}
        selectedValue={value}
        style={styles.picker}
        itemStyle={styles.item}
        onValueChange={(newValue, index) => onChange(id, newValue, index)}>
        {options.map((option, index) => <Picker.Item style={styles.item} key={index} {...option} />)}
      </Picker>
      <EntypoIcon
        style={styles.inputIcon}
        name="chevron-thin-down"
        size={25}
        color="#bdc5cf" />
    </View>
  );
}

CustomPicker.defaultProps = {
  icon: <View />,
  mode: 'dialog',
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
  picker: {
    flex: 1,
    height: 42,
    marginVertical: 5,
    backgroundColor: '#fff',
  },
  item: {
    color: '#424242',
  }
})