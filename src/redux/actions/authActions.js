import { LOGIN, LOGOUT, SIGN_UP, GET_COURSE_LIST } from './actionTypes';
import * as authService from './../../services/auth';
import AsyncStorage from '@react-native-community/async-storage';

export const login = (data) => ({
  type: LOGIN,
  payload: new Promise(async (resolve, reject) => {
    try {
      let response = await authService.login(data);
      if (response) {
        const { token } = response.data.data;
        return resolve({ authToken: token, user: response.data.data });
      }
      return reject(new Error({
        data: 'An error occurred. Please try again.',
      }));
    } catch (error) {
      let message = error.response ? error.response.data.message : 'An error occurred. Please try again.';
      return reject(message);
    }
  }),
});
export const signup = (userData) => ({
  type: SIGN_UP,
  payload: new Promise(async (resolve, reject) => {
    try {
      let response = await authService.signup(userData);
      if (response) {
        const { data, error } = response.data;
        if (data) {
          return resolve(data);
        }
        else {
          const errorMessage = error[Object.keys(error)[0]][0];
          return reject(errorMessage);
        }
      }
      return reject(new Error({
        data: 'An error occurred. Please try again.',
      }));
    } catch (error) {
      let message = error.response ? error.response.data.message : 'An error occurred. Please try again.';
      return reject({ data: message });
    }
  }),
});

export const getCourseList = () => ({
  type: GET_COURSE_LIST,
  payload: new Promise(async (resolve, reject) => {
    try {
      let response = await authService.getCourseList();
      if (response) {
        return resolve(response.data.data);
      }
      return reject(new Error({
        data: 'An error occurred. Please try again.',
      }));
    } catch (error) {
      let message = error.response ? error.response.data.message : 'An error occurred. Please try again.';
      return reject({ data: message });
    }
  }),
});

export const logout = () => ({
  type: LOGOUT,
  payload: new Promise(async (resolve, reject) => {
    try {
      await AsyncStorage.clear();
      return resolve();
    } catch (error) {
      return reject(new Error({ error: error.message ? error.message : 'An error occurred. Please try again.' }));
    }
  }),
});
