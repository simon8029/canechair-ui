import * as ActionTypes from 'Types/ActionTypes/SettingsActionTypes';

export interface ISettingsSetLanguage {
  type: ActionTypes.Settings_SetLanguage;
  Locale: string;
}

export interface ISettingsSetThemeColor {
  type: ActionTypes.Settings_SetThemeColor;
  ThemeColor: string;
}

export interface ISettingsToggleSideBarCollapse {
  type: ActionTypes.Settings_ToggleSideBarCollapse;
  isSideBarCollapsed: boolean;
}

export type ISettingsAction =
  ISettingsSetLanguage |
  ISettingsSetThemeColor |
  ISettingsToggleSideBarCollapse;

export default ISettingsAction;