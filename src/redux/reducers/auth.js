import { LOGIN, GET_COURSE_LIST, SIGN_UP } from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  isLogged: false,
  isRegistered: false,
  hasError: false,
  authToken: null,
  errorMessage: '',
  courseList: [],
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN}_PENDING`:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        errorMessage: null,
      };
    case `${LOGIN}_FULFILLED`:
      const { authToken, user } = action.payload;
      return {
        ...state,
        isLoading: false,
        hasError: false,
        authToken: authToken,
        user: user,
        errorMessage: null,
      };
    case `${LOGIN}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorMessage: action.payload,
      };
    case `${SIGN_UP}_PENDING`:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        errorMessage: null,
      };
    case `${SIGN_UP}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        errorMessage: null,
      };
    case `${SIGN_UP}_REJECTED`:
      console.log('-----> errorMessage', action.payload);
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorMessage: action.payload,
      };
    case `${GET_COURSE_LIST}_PENDING`:
      return {
        ...state,
      };
    case `${GET_COURSE_LIST}_FULFILLED`:
      return {
        ...state,
        courseList: action.payload,
      };
    case `${GET_COURSE_LIST}_REJECTED`:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
