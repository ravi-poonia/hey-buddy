/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import SearchLayout from 'react-navigation-addon-search-layout';

export default class SearchScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    searchText: null,
  };

  _handleQueryChange = searchText => {
    this.setState({ searchText });
  };

  _executeSearch = () => {
    console.log('-----> _executeSearch');
  };

  render() {
    let { searchText } = this.state;
    console.log('-----> SearchScreen');
    return (
      <SearchLayout
        onChangeQuery={this._handleQueryChange}
        onSubmit={this._executeSearch}>
        {searchText ? (
          <RectButton
            style={{
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderBottomColor: '#eee',
              paddingVertical: 20,
              paddingHorizontal: 15,
            }}
            onPress={() =>
              this.props.navigation.navigate('Result', {
                text: this.state.searchText,
              })
            }>
            <Text style={{ fontSize: 14 }}>{searchText}!</Text>
          </RectButton>
        ) : null}
      </SearchLayout>
    );
  }
}
