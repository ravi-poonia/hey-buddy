import { LOGIN } from './actionTypes';
import * as authService from './../../services/auth';

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
