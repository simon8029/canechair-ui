import * as AuthenticationActionTypes from 'Types/ActionTypes/AuthenticationActionTypes';
import { UserModel } from 'Types/ModelTypes/AuthenticationTypes/UserModel';

export interface IUserSignUpSuccess {
  type: AuthenticationActionTypes.AUTHENTICATION_SIGNUP_USER_SUCCESS;
  CurrentUser: UserModel;
}

export interface IUserSignInSuccess {
  type: AuthenticationActionTypes.AUTHENTICATION_SIGNIN_USER_SUCCESS;
  CurrentUser: UserModel;
}

export interface IUserSignOutSuccess {
  type: AuthenticationActionTypes.AUTHENTICATION_SIGNOUT_USER_SUCCES;
}

export type IAuthenticationAction =
  IUserSignUpSuccess |
  IUserSignInSuccess |
  IUserSignOutSuccess;

export default IAuthenticationAction;
