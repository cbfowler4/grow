import * as UserUtil from '../util/user_util';

export const RECEIVE_HABITS = 'RECEIVE_HABITS';
export const RECEIVE_HABITS_ERRORS = 'RECEIVE_HABITS_ERRORS';

export const receiveHabits = (response) => {
  return ({
    type: RECEIVE_HABITS,
    response
  });
};

export const receiveHabitsErrors = (errors) => {
  return ({
    type: RECEIVE_HABITS_ERRORS,
    errors
  });
};

export const getUserHabits = (userId) => {
  return (dispatch) => {
    UserUtil.getUserHabits(userId).then((response) => {
      dispatch(receiveHabits(response));
    },
    (errors) => {
      dispatch(receiveHabitsErrors(errors));
    });
  };
};
