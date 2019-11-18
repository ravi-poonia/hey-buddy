/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ActivityIndicator, Modal } from 'react-native';
import { Colors } from '../styles';

export class AppLoading extends React.Component {
  render() {
    const { isVisible } = this.props;
    return (
      <View>
        <Modal
          animationType={'none'}
          onRequestClose={() => this._handleOnRequestClose()}
          supportedOrientations={['landscape', 'portrait']}
          transparent
          visible={isVisible}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.25)' }}>
            <ActivityIndicator size="large" color={Colors.statusBar} />
          </View>
        </Modal>
      </View>
    );
  }
}
