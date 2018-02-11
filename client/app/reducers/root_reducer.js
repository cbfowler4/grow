import { combineReducers } from 'redux';
import uiReducer from './ui_reducer';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';

export default combineReducers({
  entities: entitiesReducer,
  ui: uiReducer,
  session: sessionReducer
});
