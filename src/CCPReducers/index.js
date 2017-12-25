import { combineReducers } from 'redux';
import ccpComponentsReducer from './CCPComponentsReducer';
import ccpNavigationReducer from './CCPNavigationReducer';

const rootReducer = combineReducers({
  Components: ccpComponentsReducer,
  CurrentSelectedComponent: ccpNavigationReducer
});

export default rootReducer;
