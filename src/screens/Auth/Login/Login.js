/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, ScrollView, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Spacing } from '../../../styles';
import CustomInput from '../../../components/CustomInput';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import { AppLoading } from '../../../components/AppLoading';
import { Formik } from 'formik';
import * as Yup from 'yup';
import SignUp from '../SignUp';

export default class Login extends Component {

  inputs = {};

  state = {
    selectedTab: 'login',
  }

  componentDidMount() {
    this.props.getCourseList();
  }

  renderTabs = (formProps) => {
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
              onPress={() => {
                formProps.handleReset();
                this.setState({ selectedTab: tab.value });
              }}
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

  focusTheField = (id) => {
    this.inputs[id].focus();
  }

  renderLoginContent = (formProps) => {
    const { errorMessage } = this.props;
    const { handleChange, handleBlur, errors, values, handleSubmit } = formProps;
    return (
      <>
        {
          errorMessage ?
            <Text style={styles.error}>
              {errorMessage}
            </Text>
            :
            null
        }
        <CustomInput
          icon={
            <MaterialIcon
              style={styles.inputIcon}
              name="person-outline"
              size={25}
              color="#bdc5cf" />
          }
          autoCompleteType={'email'}
          onSubmitEditing={() => { this.focusTheField('password'); }}
          blurOnSubmit={false}
          onBlur={handleBlur('email')}
          enablesReturnKeyAutomatically={true}
          keyboardType={'email-address'}
          returnKeyType={'next'}
          textContentType="username"
          value={values.email}
          error={errors.email}
          onChangeText={handleChange('email')}
          placeholder="Email"
        />
        <CustomInput
          getRef={input => { this.inputs.password = input; }}
          icon={
            <FeatherIcon
              style={styles.inputIcon}
              name="lock"
              size={20}
              color="#bdc5cf" />
          }
          onSubmitEditing={handleSubmit}
          autoCompleteType={'password'}
          onBlur={handleBlur('password')}
          textContentType={'password'}
          secureTextEntry={true}
          value={values.password}
          error={errors.password}
          onChangeText={handleChange('password')}
          placeholder="Password"
        />
      </>
    );
  }

  renderButton = (formProps) => {
    return (
      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={formProps.handleSubmit}>
        <ImageBackground
          style={styles.gradientImage}
          source={require('./../../../assets/images/loginButton.png')} />
      </TouchableOpacity>
    );
  }

  handleSubmit = (values) => {
    const { selectedTab } = this.state;
    const { email, password, phone_number } = values;

    if (selectedTab === 'login') {
      this.props.login({ email, password });
    }
    else {
      this.props.navigation.navigate('OtpScreen', { data: values, phoneNumber: phone_number });
      // this.props.signup(values);
    }
  }

  equalTo(ref, msg) {
    return Yup.mixed().test({
      name: 'equalTo',
      exclusive: false,
      message: msg || '${path} must be the same as ${reference}',
      params: {
        reference: ref.path,
      },
      test: function (value) {
        return value === this.resolve(ref);
      },
    });
  }

  render() {
    const { selectedTab } = this.state;
    const { loading } = this.props;

    const mobileRegex = /^[6-9]\d{9}$/;

    Yup.addMethod(Yup.string, 'equalTo', this.equalTo);

    const Schema = {
      login: Yup.object().shape({
        email: Yup.string()
          .email('Please enter valid email')
          .required('Please enter valid email'),
        password: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Please enter password!'),
      }),

      signup: Yup.object().shape({
        first_name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Please enter first name'),
        last_name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Please enter last name'),
        username: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Please enter username'),
        email: Yup.string()
          .email('Please enter valid email')
          .required('Please enter valid email'),
        password: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Please enter password!'),
        course_id: Yup.number()
          .required('Please select a course!'),
        phone_number: Yup.string()
          .matches(mobileRegex, 'Phone number is not valid')
          .required('Please enter phone number!'),
        blood_group: Yup.string()
          .max(4, 'Too Long!')
          .required('Please enter blood group!'),
        confirm_password: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .equalTo(Yup.ref('password'), 'Passwords must match')
          .required('Please confirm password'),
      }),
    };

    return (
      <ImageBackground
        source={require('./../../../assets/images/login-background.png')}
        style={styles.imageTopContainer}>
        <AppLoading isVisible={loading} />
        <Formik
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={Schema[selectedTab]}
          initialValues={{
            email: this.props.navigation.getParam('email'),
          }}
          onSubmit={this.handleSubmit}
        >
          {/* {({ handleChange, handleBlur, handleSubmit, values }) => ( */}
          {(formProps) => (
            //TODO:: Try Manual auto scrolling to input on focus instead of adjustPan.
            <ScrollView
              keyboardShouldPersistTaps="handled"
              keyboardDismissMode="on-drag"
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
                      {this.renderTabs(formProps)}
                      {
                        selectedTab === 'login' ?
                          this.renderLoginContent(formProps)
                          :
                          <SignUp
                            styles={styles}
                            formProps={formProps}
                          />
                      }
                    </View>
                  </View>
                  {this.renderButton(formProps)}
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
          )}
        </Formik>
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
  scrollView: {},
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
    paddingBottom: 40,
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
  tab: {},
  activeTabText: {
    color: '#1748ad',
  },
  tabText: {
    color: '#cccccc',
  },
  error: {
    paddingVertical: 10,
    color: 'red',
    textAlign: 'center',
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
