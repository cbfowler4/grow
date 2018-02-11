import * as AuthUtil from '../util/auth_util';

export const RECEIVE_AUTH_ERRORS = "RECEIVE_AUTH_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";


export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_AUTH_ERRORS,
    errors
  };
};

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const logoutCurrentUser = () => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: null
  };
};

export const signup = (user) => {
  return (dispatch) => {
    AuthUtil.signup(user).then((response)=> {
      dispatch(receiveCurrentUser(user));
    },
    (errors) => {
      dispatch(receiveErrors(errors));
    });
  };
};

export const login = (user) => {
  return (dispatch) => {
    AuthUtil.login(user).then((response)=> {
      dispatch(receiveCurrentUser(user));
    },
    (errors) => {
      dispatch(receiveErrors(errors));
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    AuthUtil.logout().then((response)=> {
      dispatch(logoutCurrentUser());
    },
    (errors) => {
      dispatch(receiveErrors(errors));
    });
  };
};
