import { instance } from './init';

export const login = (data) => {
  return instance.post('/login', data);
};
