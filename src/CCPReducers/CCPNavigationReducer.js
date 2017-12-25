import { RELOAD_COMPONENT } from '../CCPActions/CCPActionTypes';

export default function ccpNavigationReducer(state = {}, action) {
  switch (action.type) {
    case RELOAD_COMPONENT:
      // return Object.assign({}, state.currentSelectedComponent, action.currentSelectedComponent);
      return { ...state.currentSelectedComponent, ...action.currentSelectedComponent }
    default:
      return state;
  }
}
