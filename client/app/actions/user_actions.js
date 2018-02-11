import * as UserUtil from '../util/user_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveUserInfo = (response) => {
  return ({
    type: RECEIVE_USER,
    response
  });
};

export const receiveUserInfoErrors = (errors) => {
  return ({
    type: RECEIVE_USER_ERRORS,
    errors
  });
};

export const getUserInfo = (userId) => {
  return (dispatch) => {
    UserUtil.getUserInfo(userId).then((response) => {
      dispatch(receiveUserInfo(response));
    },
    (errors) => {
      dispatch(receiveUserInfoErrors(errors));
    });
  };
};
