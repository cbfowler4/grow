import * as HabitUtil from '../util/habit_util';

export const RECEIVE_HABIT = 'RECEIVE_HABIT';
export const RECEIVE_HABIT_ERRORS = 'RECEIVE_HABIT_ERRORS';

export const receiveHabit = (habit) => {
  return {
    type: RECEIVE_HABIT,
    habit
  };
};

export const receiveHabitErrors = (errors) => {
  return {
    type: RECEIVE_HABIT_ERRORS,
    errors
  };
};

export const addHabit = (habit) => {
  return (dispatch) => {
      HabitUtil.addHabit(habit).then((response)=>{
        dispatch(receiveHabit(response));
      },
      (errors) => {
        dispatch(receiveHabitErrors(errors));
      });
  };
};
