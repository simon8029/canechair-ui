import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { AuthenticationReducer } from 'Reducers/AuthenticationReducer';
import { SettingsReducer } from 'Reducers/SettingsReducer';

const rootReducer = combineReducers({
  Routing: routerReducer,
  Authentication: AuthenticationReducer,
  Settings: SettingsReducer
});

export default rootReducer;