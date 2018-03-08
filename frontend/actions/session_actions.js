import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const clearErrors = (errors) => {
  return {
    type: CLEAR_ERRORS,
    errors: []
  };
};

export const receiveCurrentUser = (user) =>{
  return {
    type: RECEIVE_CURRENT_USER,
    user: user
  };
};

export const receiveErrors = (errors) =>{
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const signup = (user) => (dispatch) => {
  return APIUtil.signup(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors))
  );
};

export const login = (user) => (dispatch) => {
  return APIUtil.login(user).then(
  (user) => dispatch(receiveCurrentUser(user)),
  (errors) => dispatch(receiveErrors(errors)));
};

export const logout = () => (dispatch) => {
  return APIUtil.logout().then(dispatch(receiveCurrentUser(null)));
};
