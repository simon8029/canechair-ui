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
  type: AuthenticationActionTypes.AUTHENTICATION_SIGNOUT_USER_SUCCESS;
}

export interface IShowAuthenticationMessage {
  type: AuthenticationActionTypes.AUTHENTICATION_SHOW_MESSAGE;
  AuthenticationMessage: string;
}

export interface IHideAuthenticationMessage {
  type: AuthenticationActionTypes.AUTHENTICATION_HIDE_MESSAGE;
}

export interface IShowAuthenticationLoader {
  type: AuthenticationActionTypes.AUTHENTICATION_SHOW_LOADER;
}

export interface IHideAuthenticationLoader {
  type: AuthenticationActionTypes.AUTHENTICATION_HIDE_LOADER;
}

export type IAuthenticationAction =
  IUserSignUpSuccess |
  IUserSignInSuccess |
  IUserSignOutSuccess |
  IShowAuthenticationMessage |
  IHideAuthenticationMessage |
  IShowAuthenticationLoader |
  IHideAuthenticationLoader;

export default IAuthenticationAction;
