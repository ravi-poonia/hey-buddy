import Axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const instance = Axios.create({
  baseURL: BASE_URL,
});