import * as SettingsActionTypes from 'Types/ActionTypes/SettingsActionTypes';
import { ISettingsSetLanguage, ISettingsSetThemeColor, ISettingsToggleSideBarCollapse } from 'Interfaces/ActionInterfaces/ISettingsAction';

export function SetLanguage(locale: string): ISettingsSetLanguage {
  return { type: SettingsActionTypes.Settings_SetLanguage, Locale: locale };
}

export function SetThemeColor(color: string): ISettingsSetThemeColor {
  return { type: SettingsActionTypes.Settings_SetThemeColor, ThemeColor: color };
}

export function ToggleSideBarCollapse(isSideBarCollapsed: boolean): ISettingsToggleSideBarCollapse {
  return { type: SettingsActionTypes.Settings_ToggleSideBarCollapse, isSideBarCollapsed: !isSideBarCollapsed };
}