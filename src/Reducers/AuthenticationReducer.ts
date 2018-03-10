import * as AuthenticationActionTypes from 'Types/ActionTypes/AuthenticationActionTypes';
import { IAuthenticationAction } from 'Interfaces/ActionInterfaces/IAuthenticationAction';
import { UserModel } from 'Types/ModelTypes/AuthenticationTypes/UserModel';
import { AuthenticationStateType } from 'Types/StateTypes/AuthenticationStateType';

const INIT_STATE: AuthenticationStateType = {
  Loader: false,
  AlertMessage: '',
  ShowMessage: false,
  CurrentUser: new UserModel()
};

export function AuthenticationReducer(state: typeof INIT_STATE = INIT_STATE, AuthenticationAction: IAuthenticationAction): AuthenticationStateType {
  switch (AuthenticationAction.type) {
    case AuthenticationActionTypes.AUTHENTICATION_SIGNUP_USER_SUCCESS: {
      return {
        ...state,
        Loader: false,
        CurrentUser: AuthenticationAction.CurrentUser
      };
    }
    case AuthenticationActionTypes.AUTHENTICATION_SIGNIN_USER_SUCCESS: {
      return {
        ...state,
        Loader: false,
        CurrentUser: AuthenticationAction.CurrentUser
      };
    }
    case AuthenticationActionTypes.AUTHENTICATION_SIGNOUT_USER_SUCCESS: {
      return {
        ...state,
        authUser: null,
        loader: false
      }
    }

    case AuthenticationActionTypes.AUTHENTICATION_SIGNIN_GOOGLE_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      }
    }
    case AuthenticationActionTypes.AUTHENTICATION_SIGNIN_FACEBOOK_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      }
    }
    case AuthenticationActionTypes.AUTHENTICATION_SIGNIN_TWITTER_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      }
    }
    case AuthenticationActionTypes.AUTHENTICATION_SIGNIN_GITHUB_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      }
    }
    case AuthenticationActionTypes.AUTHENTICATION_ON_SHOW_LOADER: {
      return {
        ...state,
        loader: true
      }
    }
    case AuthenticationActionTypes.AUTHENTICATION_ON_HIDE_LOADER: {
      return {
        ...state,
        loader: false
      }
    }

    case AuthenticationActionTypes.AUTHENTICATION_SHOW_MESSAGE: {
      return {
        ...state,
        alertMessage: action.payload,
        showMessage: true,
        loader: false
      }
    }
    case AuthenticationActionTypes.AUTHENTICATION_HIDE_MESSAGE: {
      return {
        ...state,
        alertMessage: '',
        showMessage: false,
        loader: false
      }
    }
    default:
      return state;
  }
}
}