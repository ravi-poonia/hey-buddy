import { LOGIN } from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  isLogged: false,
  isRegistered: false,
  hasError: false,
  authToken: null,
  errorMessage: '',
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
    default:
      return state;
  }
};
