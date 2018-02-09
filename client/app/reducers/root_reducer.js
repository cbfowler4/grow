import { combineReducers } from 'redux';
import uiReducer from './ui_reducer';
import sessionReducer from './session_reducer';

export default combineReducers({
  ui: uiReducer,
  session: sessionReducer
});
