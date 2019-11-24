/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import CustomPicker from '../../../components/CustomPicker';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import CustomInput from '../../../components/CustomInput';
import Entypo from 'react-native-vector-icons/dist/Entypo';

export default class SignUp extends Component {

  inputs = {};

  focusTheField = (id) => {
    this.inputs[id].focus();
  }

  render() {
    const { formProps, styles, courseList } = this.props;
    const { values, setFieldValue, handleSubmit, errors, handleChange } = formProps;
    let courseOptions = courseList.map(course => ({ label: course.name, value: course.id }));
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
          onSubmitEditing={() => { this.focusTheField('last_name'); }}
          enablesReturnKeyAutomatically={true}
          returnKeyType={'next'}
          autoFocus={true}
          value={values.first_name}
          error={errors.first_name}
          onChangeText={handleChange('first_name')}
          placeholder="First Name"

        />
        <CustomInput
          getRef={input => { this.inputs.last_name = input; }}
          icon={
            <MaterialIcon
              style={styles.inputIcon}
              name="person-outline"
              size={25}
              color="#bdc5cf" />
          }
          onSubmitEditing={() => { this.focusTheField('username'); }}
          enablesReturnKeyAutomatically={true}
          returnKeyType={'next'}
          value={values.last_name}
          error={errors.last_name}
          onChangeText={handleChange('last_name')}
          placeholder="Last Name"
        />
        <CustomInput
          getRef={input => { this.inputs.username = input; }}
          icon={
            <MaterialIcon
              style={styles.inputIcon}
              name="person-outline"
              size={25}
              color="#bdc5cf" />
          }
          onSubmitEditing={() => { this.focusTheField('email'); }}
          enablesReturnKeyAutomatically={true}
          returnKeyType={'next'}
          value={values.username}
          error={errors.username}
          onChangeText={handleChange('username')}
          placeholder="Username"
        />
        <CustomInput
          getRef={input => { this.inputs.email = input; }}
          icon={
            <Entypo
              style={styles.inputIcon}
              name="email"
              size={22}
              color="#bdc5cf" />
          }
          onSubmitEditing={() => { this.focusTheField('phone_number'); }}
          enablesReturnKeyAutomatically={true}
          returnKeyType={'next'}
          value={values.email}
          error={errors.email}
          onChangeText={handleChange('email')}
          placeholder="Email"
        />
        <CustomInput
          getRef={input => { this.inputs.phone_number = input; }}
          icon={
            <FeatherIcon
              style={styles.inputIcon}
              name="phone"
              size={20}
              color="#bdc5cf" />
          }
          enablesReturnKeyAutomatically={true}
          returnKeyType={'next'}
          blurOnSubmit={true}
          value={values.phone_number}
          error={errors.phone_number}
          onChangeText={handleChange('phone_number')}
          placeholder="Phone number"
        />
        <CustomPicker
          getRef={this.picker}
          icon={
            <SimpleLineIcons
              style={styles.inputIcon}
              name="graduation"
              size={20}
              color="#bdc5cf" />
          }
          id="course_id"
          placeholder={{
            label: 'Select a course...',
            value: null,
            color: '#9EA0A4',
          }}
          options={courseOptions}
          value={values.course_id}
          error={errors.course_id}
          onChange={(value) => setFieldValue('course_id', value)}
        />
        <CustomInput
          id="blood_group"
          icon={
            <SimpleLineIcons
              style={styles.inputIcon}
              name="drop"
              size={20}
              color="#bdc5cf" />
          }
          onSubmitEditing={() => { this.focusTheField('password'); }}
          enablesReturnKeyAutomatically={true}
          returnKeyType={'next'}
          value={values.blood_group}
          error={errors.blood_group}
          onChangeText={handleChange('blood_group')}
          placeholder="Blood Group"
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
          onSubmitEditing={() => { this.focusTheField('confirm_password'); }}
          enablesReturnKeyAutomatically={true}
          returnKeyType={'next'}
          error={errors.password}
          onChangeText={handleChange('password')}
          secureTextEntry={true}
          value={values.password}
          placeholder="Password"
        />
        <CustomInput
          getRef={input => { this.inputs.confirm_password = input; }}
          icon={
            <FeatherIcon
              style={styles.inputIcon}
              name="lock"
              size={20}
              color="#bdc5cf" />
          }
          onSubmitEditing={handleSubmit}
          enablesReturnKeyAutomatically={true}
          error={errors.confirm_password}
          onChangeText={handleChange('confirm_password')}
          secureTextEntry={true}
          value={values.confirm_password}
          placeholder="Confirm Password"
        />
      </>
    );
  }
}
