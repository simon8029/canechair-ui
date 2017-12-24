import { combineReducers } from 'redux';
import ccpComponentsReducer from './CCPComponentsReducer';

const rootReducer = combineReducers({
  Components: ccpComponentsReducer
});

export default rootReducer;
