import { LOGIN, GET_COURSE_LIST, SIGN_UP } from '../actions/actionTypes';

const initialState = {
  authToken: null,
  courseList: [],
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN}_FULFILLED`:
      const { authToken, user } = action.payload;
      return {
        ...state,
        authToken: authToken,
        user: user,
      };
    case `${GET_COURSE_LIST}_FULFILLED`:
      return {
        ...state,
        courseList: action.payload,
      };
    default:
      return state;
  }
};
