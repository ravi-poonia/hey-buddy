import React, { Component } from 'react';
import { View, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../styles';
import Card from './Components/Card';


export default class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: () => (
        <View style={styles.logoContainer}>
          <Image
            source={require('./../../assets/images/logo-icon.png')}
            style={styles.headerLogo} />
        </View>
      ),
      headerRight: () => (
        <>
          <TouchableOpacity
            onPress={() => navigation.navigate('Search')}
            style={styles.headerButton}>
            <Ionicons
              name="md-search"
              size={Platform.OS === 'ios' ? 22 : 25}
              color={'#fff'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Filter')}
            style={styles.headerButton}>
            <AntDesign
              name="filter"
              size={Platform.OS === 'ios' ? 22 : 25}
              color={'#fff'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Auth')}
            style={styles.headerButton}>
            <MaterialCommunityIcons
              name="message-text-outline"
              size={Platform.OS === 'ios' ? 22 : 25}
              color={'#fff'}
            />
          </TouchableOpacity>
        </>
      ),
      headerStyle: {
        backgroundColor: Colors.primary,
      },
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Card />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerLogo: {
    height: 30,
    width: 40,
  },
  logoContainer: {
    paddingLeft: 10,
  },
  headerButton: {
    marginRight: 15,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  cardContainer: {
    width: '100%',
    borderWidth: 1,
  },
  cardHeader: {
    height: 60,
    borderWidth: 1,
  },
  cardBody: {
    height: 180,
    borderWidth: 1,
  },
  cardFooter: {
    height: 70,
    borderWidth: 1,
  },
});
