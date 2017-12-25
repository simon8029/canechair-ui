import { RELOAD_COMPONENT } from './CCPActionTypes';

export const reloadComponent = (currentSelectedComponent) => {
  return {
    type: RELOAD_COMPONENT,
    currentSelectedComponent
  }
}
