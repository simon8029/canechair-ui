import * as AuthenticationActionTypes from 'Types/ActionTypes/AuthenticationActionTypes';
import { IAuthenticationAction } from 'Interfaces/ActionInterfaces/IAuthenticationAction';
import { beginAjaxCall, ajaxCallError } from './CommonActions';
import { Dispatch } from 'react-redux';
import AuthenticationService from 'Services/AuthenticationServices';
import { UserModel } from 'Types/ModelTypes/AuthenticationTypes/UserModel';
import { AuthenticationStateType } from 'Types/StateTypes/AuthenticationStateType';

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
    type: AuthenticationActionTypes.AUTHENTICATION_SIGNOUT_USER_SUCCES,
  };
};

export const showAuthMessage = (message: string): IAuthenticationAction => {
  return {
    type: AuthenticationActionTypes.AUTHENTICATION_SHOW_MESSAGE,
    payload: message
  };
};

export const showAuthLoader = () => {
  return {
    type: ON_SHOW_LOADER,
  };
};

export const hideMessage = () => {
  return {
    type: HIDE_MESSAGE,
  };
};
export const hideAuthLoader = () => {
  return {
    type: ON_HIDE_LOADER,
  };
};