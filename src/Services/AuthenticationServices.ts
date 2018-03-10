import delay from './delay'; // For testing async call. Set to 0 on prod.
import { UserModel } from 'Types/ModelTypes/AuthenticationTypes/UserModel';
// import { BaseUrl } from '../app.settings';
// import axios, { AxiosResponse } from 'axios';

// let httpRequest = axios.create({
//     baseURL: BaseUrl,
//     timeout: 3000
// });

class AuthenticationService {
  static UserSignUp(currentUser: UserModel): Promise<UserModel> {
    // const endPoint = 'signUp';
    currentUser = Object.assign({}, currentUser); // To avoid manipulating object passed in
    let result: Promise<UserModel> = new Promise((resolve, reject) => {
      setTimeout(() => {
        // httpRequest.post(endPoint, currentUser).then((res: AxiosResponse) => {
        //     return resolve(res.data);
        // });
        return currentUser;
      }, delay);
    });
    return result;
  }

  static UserSignIn(currentUser: UserModel): Promise<UserModel> {
    // const endPoint = 'signIn';
    currentUser = Object.assign({}, currentUser); // To avoid manipulating object passed in
    let result: Promise<UserModel> = new Promise((resolve, reject) => {
      setTimeout(() => {
        // httpRequest.post(endPoint, currentUser).then((res: AxiosResponse) => {
        //     return resolve(res.data);
        // });
        return currentUser;
      }, delay);
    });
    return result;
  }

  static UserSignOut(currentUser: UserModel): Promise<UserModel> {
    // const endPoint = 'signOut';
    currentUser = Object.assign({}, currentUser); // To avoid manipulating object passed in
    let result: Promise<UserModel> = new Promise((resolve, reject) => {
      setTimeout(() => {
        // httpRequest.post(endPoint, currentUser).then((res: AxiosResponse) => {
        //     return resolve(res.data);
        // });
        return currentUser;
      }, delay);
    });
    return result;
  }
}

export default AuthenticationService;
