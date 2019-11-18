import { LOGIN, LOGOUT } from './actionTypes';
import * as authService from './../../services/auth';
import AsyncStorage from '@react-native-community/async-storage';

export const login = (data) => ({
  type: LOGIN,
  payload: new Promise(async (resolve, reject) => {
    try {
      let response = await authService.login(data);
      if (response) {
        const { token } = response.data;
        return resolve({ authToken: token, user: {} });
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
