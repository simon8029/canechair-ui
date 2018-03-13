import SettingsStateType from 'Types/StateTypes/SettingsStateType';
import ISettingsAction from 'Interfaces/ActionInterfaces/ISettingsAction';
import * as SettingsActionTypes from 'Types/ActionTypes/SettingsActionTypes';
// import * as Colors from 'material-ui/styles/colors';
// import amber from 'material-ui/color/amber';

const InitState: SettingsStateType = {
  NavCollapsed: false,
  Locale: 'en',
  ThemeColor: 'grey',
  IsSideBarCollapsed: false,
  IsDrawerCollapsed: false
};

export function SettingsReducer(state: SettingsStateType = InitState, SettingsAction: ISettingsAction): SettingsStateType {
  switch (SettingsAction.type) {
    case SettingsActionTypes.Settings_SetLanguage:
      return { ...state, Locale: SettingsAction.Locale };

    case SettingsActionTypes.Settings_SetThemeColor:
      return { ...state, ThemeColor: SettingsAction.ThemeColor };

    case SettingsActionTypes.Settings_ToggleSideBarCollapse:
      return { ...state, IsSideBarCollapsed: SettingsAction.isSideBarCollapsed };

    default:
      return state;
  }
}