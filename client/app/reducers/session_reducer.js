import { RECEIVE_CURRENT_USER } from '../actions/auth_actions';

const defaultState = {currentUser: null};

export default (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.currentUser});
    default:
      return state;
  }
};
