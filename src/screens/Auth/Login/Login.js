/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, ScrollView, Text, Image, Picker, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Spacing } from '../../../styles';
import CustomInput from '../../../components/CustomInput';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import CustomPicker from '../../../components/CustomPicker';

export default class Login extends Component {

  state = {
    selectedTab: 'login',
    formData: {
      email: 'yash@yomail.com',
      password: '12345678',
    },
  }

  renderTabs = () => {
    const { selectedTab } = this.state;

    const TABS = [
      {
        label: 'LOGIN',
        value: 'login',
      },
      {
        label: 'SIGNUP',
        value: 'signup',
      },
    ];

    return (
      <View style={styles.navContainer}>
        {TABS.map(tab => {
          const activeTab = tab.value === selectedTab;
          const tabContainer = activeTab ? [styles.tab, styles.activeTab] : styles.tab;
          const tabText = activeTab ? styles.activeTabText : styles.tabText;

          return (
            <TouchableOpacity
              onPress={() => this.setState({ selectedTab: tab.value })}
              style={tabContainer}
              key={tab.value}>
              <Text style={tabText}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  handleTextChange = (id, value) => {
    let { formData } = this.state;
    formData[id] = value;
    this.setState({ formData });
  }

  renderLoginContent = () => {
    const { formData } = this.state;
    return (
      <>
        <CustomInput
          icon={
            <MaterialIcon
              style={styles.inputIcon}
              name="person-outline"
              size={25}
              color="#bdc5cf" />
          }
          value={formData.email}
          onChangeText={(value) => this.handleTextChange('email', value)}
          placeholder="Username"
        />
        <CustomInput
          icon={
            <FeatherIcon
              style={styles.inputIcon}
              name="lock"
              size={20}
              color="#bdc5cf" />
          }
          value={formData.password}
          type="password"
          onChangeText={(value) => this.handleTextChange('password', value)}
          placeholder="Password"
        />
      </>
    );
  }

  handleCourseChange = (id, value) => {
    const { formData } = this.state;
    formData[id] = value;
    this.setState({ formData });
  }

  renderSignUpContent = () => {
    const { formData } = this.state;
    return (
      <>
        <CustomInput
          icon={
            <MaterialIcon
              style={styles.inputIcon}
              name="person-outline"
              size={25}
              color="#bdc5cf" />
          }
          placeholder="First Name"
        />
        <CustomInput
          icon={
            <MaterialIcon
              style={styles.inputIcon}
              name="person-outline"
              size={25}
              color="#bdc5cf" />
          }
          placeholder="Last Name"
        />
        <CustomInput
          icon={
            <FeatherIcon
              style={styles.inputIcon}
              name="lock"
              size={20}
              color="#bdc5cf" />
          }
          placeholder="Password"
        />
        <CustomInput
          icon={
            <FeatherIcon
              style={styles.inputIcon}
              name="phone"
              size={20}
              color="#bdc5cf" />
          }
          placeholder="Phone number"
        />
        <CustomPicker
          icon={
            <SimpleLineIcons
              style={styles.inputIcon}
              name="graduation"
              size={20}
              color="#bdc5cf" />
          }
          id="course"
          value={formData.course}
          onChange={this.handleCourseChange}
          options={[
            {
              label: 'Engineering',
              value: 'Engineering',
            },
            {
              label: 'Medical',
              value: 'Medical',
            },
          ]}
        />

      </>
    );
  }

  handleButtonPress = () => {
    const { selectedTab, formData } = this.state;
    const { email, password } = formData;

    if (selectedTab === 'login') {
      this.props.login({ email, password });
    }
  }

  renderButton = () => {
    return (
      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={this.handleButtonPress}>
        <ImageBackground
          style={styles.gradientImage}
          source={require('./../../../assets/images/loginButton.png')} />
      </TouchableOpacity>
    );
  }

  render() {
    const { selectedTab } = this.state;
    return (
      <ImageBackground
        source={require('./../../../assets/images/login-background.png')}
        style={styles.imageTopContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.topContainer}>
              <Image
                source={require('./../../../assets/images/logo.png')}
                resizeMode="contain"
                style={styles.logo} />
            </View>
            <View >
              <View style={styles.bodyContainer}>
                <View style={styles.boxContainer}>
                  {this.renderTabs()}
                  {
                    selectedTab === 'login' ?
                      this.renderLoginContent()
                      :
                      this.renderSignUpContent()
                  }
                </View>
              </View>
              {this.renderButton()}
            </View>
            <View style={styles.bottomContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.orText}>OR </Text>
                <Text style={styles.boldText}>
                  {
                    selectedTab === 'login' ?
                      ' SignIn with'
                      :
                      ' SignUp with'
                  }
                </Text>
              </View>
              <TouchableOpacity style={styles.googleButton}>
                <Text style={styles.googleText}>Google</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground >
    );
  }
}

const styles = StyleSheet.create({
  imageTopContainer: {
    width: '100%',
    zIndex: -10,
    height: Spacing.dimensions.fullHeight,
  },
  scrollView: {
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  //Top Logo Container
  topContainer: {
    marginVertical: -40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '40%',
  },
  //Middle input container
  bodyContainer: {
    display: 'flex',
    zIndex: 1,
    paddingVertical: 5,
    paddingBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 50,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },
  navContainer: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
  },
  activeTab: {
    borderBottomColor: '#d6af11',
    borderBottomWidth: 2,
  },
  tab: {
  },
  activeTabText: {
    color: '#1748ad',
  },
  tabText: {
    color: '#cccccc',
  },
  inputIcon: {
    marginHorizontal: 10,
  },
  buttonWrapper: {
    zIndex: 20,
    borderRadius: 200,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: 80,
    height: 80,
  },
  gradientImage: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    borderColor: '#fff',
    borderWidth: 7,
  },
  //bottom container
  bottomContainer: {
    marginVertical: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  orText: {
    color: '#333333',
    fontWeight: '400',
  },
  boldText: {
    fontWeight: 'bold',
  },
  googleButton: {
    marginVertical: 10,
    backgroundColor: '#e1493b',
    borderRadius: 60,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  googleText: {
    color: '#fff',
  },
});
