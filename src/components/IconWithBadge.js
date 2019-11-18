/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';

export default class IconWithBadge extends React.Component {
  render() {
    const { badgeCount, icon } = this.props;

    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        {icon}
        {badgeCount > 0 && (
          <View
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              backgroundColor: 'red',
              borderRadius: 50,
              width: 15,
              height: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}