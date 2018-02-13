import * as HabitUtil from '../util/habit_util';

export const RECEIVE_HABIT = 'RECEIVE_HABIT';

export const receiveHabit = (habit) => {
  return {
    type: RECEIVE_HABIT,
    habit
  };
};

export const addHabit = (habit) => {
  return (dispatch) => {
      HabitUtil.addHabit(habit).then((response)=>{
        dispatch(receiveHabit(response));
      });
  };
};
