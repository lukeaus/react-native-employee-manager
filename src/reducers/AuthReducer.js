// this reducer should handle all auth stuff
import {
  EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_START
} from '../actions/types';

// idea here is to be a reminder of what this reducer is handling
// this is not required, but lets you easily see what is going on
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication failed', password: '', loading: false };
    case LOGIN_USER_START:
      return { ...state, error: '', loading: true };
    default:
      return state;
  }
};
