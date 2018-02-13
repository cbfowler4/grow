import * as HabitUtil from '../util/habit_util';

export const RECEIVE_HABIT = 'RECEIVE_HABIT';
export const REMOVE_HABIT = 'REMOVE_HABIT';
export const RECEIVE_HABIT_ERRORS = 'RECEIVE_HABIT_ERRORS';

export const receiveHabit = (habit) => {
  return {
    type: RECEIVE_HABIT,
    habit
  };
};

export const removeHabit = (habit) => {
  return {
    type: REMOVE_HABIT,
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

export const removeHabit = (habit) => {
  return (dispatch) => {
      HabitUtil.removeHabit(habit).then((response)=>{
        dispatch(removeHabit(response));
      },
      (errors) => {
        dispatch(receiveHabitErrors(errors));
      });
  };
};
