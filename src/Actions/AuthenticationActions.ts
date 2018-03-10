import * as AuthenticationActionTypes from 'Types/ActionTypes/AuthenticationActionTypes';
import { IAuthenticationAction } from 'Interfaces/ActionInterfaces/IAuthenticationAction';
import { beginAjaxCall, ajaxCallError } from './CommonActions';
import { Dispatch } from 'react-redux';
import AuthenticationService from 'Services/AuthenticationServices';
import { UserModel } from 'Types/ModelTypes/AuthenticationTypes/UserModel';

export const UserSignUp = (currentUser: UserModel) => {
  return function (dispatch: Dispatch<IAuthenticationAction>) {
    dispatch(beginAjaxCall());
    return AuthenticationService.UserSignUp(currentUser)
      .then((res: UserModel) => {
        dispatch(UserSignUpSuccess(res));
      }).catch((error: Error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
};

export const userSignIn = (currentUser: UserModel) => {
  return function (dispatch: Dispatch<IAuthenticationAction>) {
    dispatch(beginAjaxCall());
    return AuthenticationService.UserSignIn(currentUser)
      .then((res: UserModel) => {
        dispatch(UserSignInSuccess(res));
      }).catch((error: Error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
};
export const UserSignOut = (currentUser: UserModel) => {
  return function (dispatch: Dispatch<IAuthenticationAction>) {
    dispatch(beginAjaxCall());
    return AuthenticationService.UserSignOut(currentUser)
      .then(() => {
        dispatch(UserSignOutSuccess());
      }).catch((error: Error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
};
export const UserSignUpSuccess = (currentUser: UserModel): IAuthenticationAction => {
  return {
    type: AuthenticationActionTypes.AUTHENTICATION_SIGNUP_USER_SUCCESS,
    CurrentUser: currentUser
  };
};

export const UserSignInSuccess = (currentUser: UserModel): IAuthenticationAction => {
  return {
    type: AuthenticationActionTypes.AUTHENTICATION_SIGNIN_USER_SUCCESS,
    CurrentUser: currentUser
  };
};

export const UserSignOutSuccess = (): IAuthenticationAction => {
  return {
    type: AuthenticationActionTypes.AUTHENTICATION_SIGNOUT_USER_SUCCESS,
  };
};

export const ShowAuthenticationMessage = (message: string): IAuthenticationAction => {
  return {
    type: AuthenticationActionTypes.AUTHENTICATION_SHOW_MESSAGE,
    AuthenticationMessage: message
  };
};

export const ShowAuthenticationLoader = (): IAuthenticationAction => {
  return {
    type: AuthenticationActionTypes.AUTHENTICATION_SHOW_LOADER
  };
};

export const HideAuthenticationMessage = (): IAuthenticationAction => {
  return {
    type: AuthenticationActionTypes.AUTHENTICATION_HIDE_MESSAGE,
  };
};
export const HideAuthenticationLoader = (): IAuthenticationAction => {
  return {
    type: AuthenticationActionTypes.AUTHENTICATION_HIDE_LOADER,
  };
};