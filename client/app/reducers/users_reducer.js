import { RECEIVE_HABITS } from '../actions/user_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_HABITS:
      return merge({}, state, {[action.response._id]: action.response.habits});
    default:
      return state;
  }
};
