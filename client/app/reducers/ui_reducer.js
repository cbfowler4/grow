import { merge } from 'lodash';
import { SHOW_LOGIN, SHOW_SIGNUP} from '../actions/ui_actions.js';

const defaultState = {
  auth: "signup"
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_LOGIN:
      return merge({}, state, {auth: "login"});
    case SHOW_SIGNUP:
      return merge({}, state, {auth: "signup"});
    default:
      return state;
  }
};
