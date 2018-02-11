import { merge } from 'lodash';
import {
  SHOW_LOGIN,
  SHOW_SIGNUP,
  SHOW_ADD_HABIT,
  HIDE_ADD_HABIT } from '../actions/ui_actions.js';

const defaultState = {
  auth: "signup",
  addHabit: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_LOGIN:
      return merge({}, state, {auth: "login"});
    case SHOW_SIGNUP:
      return merge({}, state, {auth: "signup"});
    case SHOW_ADD_HABIT:
      return merge({}, state, {addHabit: true});
    case HIDE_ADD_HABIT:
      return merge({}, state, {addHabit: false});
    default:
      return state;
  }
};
