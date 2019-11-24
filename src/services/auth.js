import { instance } from './init';

export const login = (data) => {
  return instance.post('/login', data);
};
export const signup = (data) => {
  return instance.post('/register', data);
};
export const getCourseList = () => {
  return instance.get('/courselist');
};
