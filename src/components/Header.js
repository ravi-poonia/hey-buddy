
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../styles';
import { Header as NavHeader } from 'react-navigation-stack';

export default function Header({ icon, children, ...rest }) {

  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

Header.defaultProps = {
  icon: <View />,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    height: NavHeader.HEIGHT,
    width: '100%',
    zIndex: 100,
    backgroundColor: Colors.primary,
  },
})