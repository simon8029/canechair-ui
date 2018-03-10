import UserModel from 'Types/ModelTypes/AuthenticationTypes/UserModel';

export type AuthenticationStateType = {
  Loader: boolean,
  AlertMessage: string,
  ShowMessage: boolean,
  CurrentUser: UserModel | null
};

export default AuthenticationStateType;