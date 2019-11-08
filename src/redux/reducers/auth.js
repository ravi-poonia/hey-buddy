import {LOGIN} from '../actions/actionTypes';

const initialstate = {
  isLoading: false,
  isLogged: false,
  isRegistered: false,
  hasError: false,
  errorMessage: '',
  user: {},
};

export default (state = initialstate, action) => {
  console.log('-----> action.type', action.type);
  switch (action.type) {
    case `${LOGIN}_PENDING`:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        errorMessage: null,
      };
    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        errorMessage: null,
      };
    case `${LOGIN}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
