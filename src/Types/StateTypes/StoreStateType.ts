import AuthenticationStateType from 'Types/StateTypes/AuthenticationStateType';
import SettingsStateType from 'Types/StateTypes/SettingsStateType';

export type StoreStateType = {
  Routing: any;
  Authentication: AuthenticationStateType;
  Settings: SettingsStateType;
};

export default StoreStateType;