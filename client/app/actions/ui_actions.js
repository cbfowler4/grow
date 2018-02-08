export const SHOW_LOGIN = "SHOW_LOGIN";
export const SHOW_SIGNUP = "SHOW_SIGNUP";

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
