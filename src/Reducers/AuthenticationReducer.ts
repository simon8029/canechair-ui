import * as AuthenticationActionTypes from 'Types/ActionTypes/AuthenticationActionTypes';
import { IAuthenticationAction, IUserSignUpSuccess, IUserSignInSuccess } from 'Interfaces/ActionInterfaces/IAuthenticationAction';
import { AuthenticationStateType } from 'Types/StateTypes/AuthenticationStateType';

const INIT_STATE: AuthenticationStateType = {
  Loader: false,
  AlertMessage: '',
  ShowMessage: false,
  CurrentUser: null
};

export function AuthenticationReducer(state: typeof INIT_STATE = INIT_STATE, AuthenticationAction: IAuthenticationAction): AuthenticationStateType {
  switch (AuthenticationAction.type) {
    case AuthenticationActionTypes.AUTHENTICATION_SIGNUP_USER_SUCCESS: {
      return {
        ...state,
        Loader: false,
        CurrentUser: (AuthenticationAction as IUserSignUpSuccess).CurrentUser
      };
    }
    case AuthenticationActionTypes.AUTHENTICATION_SIGNIN_USER_SUCCESS: {
      return {
        ...state,
        Loader: false,
        CurrentUser: (AuthenticationAction as IUserSignInSuccess).CurrentUser
      };
    }
    case AuthenticationActionTypes.AUTHENTICATION_SIGNOUT_USER_SUCCESS: {
      return {
        ...state,
        Loader: false,
        CurrentUser: null,
      };
    }

    case AuthenticationActionTypes.AUTHENTICATION_SHOW_LOADER: {
      return {
        ...state,
        Loader: true
      };
    }
    case AuthenticationActionTypes.AUTHENTICATION_HIDE_LOADER: {
      return {
        ...state,
        Loader: false
      };
    }

    case AuthenticationActionTypes.AUTHENTICATION_SHOW_MESSAGE: {
      return {
        ...state,
        AlertMessage: AuthenticationAction.AuthenticationMessage,
        ShowMessage: true,
        Loader: false
      };
    }
    case AuthenticationActionTypes.AUTHENTICATION_HIDE_MESSAGE: {
      return {
        ...state,
        AlertMessage: '',
        ShowMessage: false,
        Loader: false
      };
    }
    default:
      return state;
  }
}

export default AuthenticationReducer;