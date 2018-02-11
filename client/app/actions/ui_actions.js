export const SHOW_LOGIN = "SHOW_LOGIN";
export const SHOW_SIGNUP = "SHOW_SIGNUP";
export const HIDE_ADD_HABIT = "HIDE_ADD_HABIT";
export const SHOW_ADD_HABIT = "SHOW_ADD_HABIT";

export const showLogin = () => {
  return {
    type: SHOW_LOGIN
  };
};

export const showSignup = () => {
  return {
    type: SHOW_SIGNUP
  };
};

export const showAddHabit = () => {
  return {
    type: SHOW_ADD_HABIT
  };
};
export const hideAddHabit = () => {
  return {
    type: HIDE_ADD_HABIT
  };
};
