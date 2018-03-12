import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import TextField from 'material-ui/TextField';
// import IconButton from 'material-ui/IconButton';
// import FlatButton from 'material-ui/FlatButton';
// const NotificationContainer = require('react-notifications');
// const NotificationManager = require('react-notifications');
import AuthenticationStateType from 'Types/StateTypes/AuthenticationStateType';
// import { FormattedMessage } from 'react-intl';
// import { CircularProgress } from 'material-ui/CircularProgress';
import * as AuthenticationActions from 'Actions/AuthenticationActions';

class SignIn extends React.Component<ThisPropsType, ThisStateType> {
  constructor(props: ThisPropsType) {
    super(props);
    this.state = {
      email: 'demo@example.com',
      password: 'demo#123'
    };
  }

  componentDidUpdate() {
    if (this.props.ShowMessage) {
      setTimeout(() => {
        this.props.actions.AuthenticationActions.HideAuthenticationMessage();
      }, 100);
    }
    if (this.props.CurrentUser !== null) {
      this.props.history.push('/');
    }
  }

  render() {
    // const {
    //   email,
    //   password
    // } = this.state;
    // const { showMessage, loader, alertMessage } = this.props;
    console.log(`signin tsx:`);
    return (
      // <div
      //   className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
      //   <div className="app-login-main-content">

      //     <div className="app-logo-content d-flex align-items-center justify-content-center">
      //       <Link className="logo-lg" to="/" title="Jambo">
      //         <img src="http://via.placeholder.com/177x65" alt="jambo" title="jambo" />
      //       </Link>
      //     </div>

      //     <div className="app-login-content">
      //       <div className="app-login-header mb-4">
      //         <h1><FormattedMessage id="appModule.email" /></h1>
      //       </div>

      //       <div className="app-login-form">
      //         <form>
      //           <fieldset>
      //             <TextField
      //               id="required"
      //               floatingLabelText={<FormattedMessage id="appModule.email" />}
      //               fullWidth
      //               onChange={(event: any) => this.setState({ email: event.target.value })}
      //               defaultValue={email}
      //               className="mt-1 my-sm-3"
      //             />
      //             <TextField
      //               type="password"
      //               id="required"
      //               floatingLabelText={<FormattedMessage id="appModule.password" />}
      //               fullWidth
      //               onChange={(event: any) => this.setState({ password: event.target.value })}
      //               defaultValue={password}
      //               className="mt-1 my-sm-3"
      //             />

      //             <div className="mb-3 d-flex align-items-center justify-content-between">
      //               <FlatButton onClick={() => {
      //                 this.props.actions.AuthenticationActions.ShowAuthenticationLoader();
      //                 let newUser = Object.assign({}, this.props.CurrentUser, { email, password });
      //                 this.props.actions.AuthenticationActions.userSignIn(newUser);
      //               }} backgroundColor="primary">
      //                 <FormattedMessage id="appModule.signIn" />
      //               </FlatButton>

      //               <Link to="/signup">
      //                 <FormattedMessage id="signIn.signUp" />
      //               </Link>
      //             </div>

      //             <div className="app-social-block my-1 my-sm-3">
      //               <FormattedMessage
      //                 id="signIn.connectWith" />
      //               <ul className="social-link">
      //                 <li>
      //                   <IconButton className="icon"
      //                     onClick={() => {
      //                       this.props.actions.AuthenticationActions.ShowAuthenticationLoader();
      //                       // this.props.userFacebookSignIn();
      //                     }}>
      //                     <i className="zmdi zmdi-facebook" />
      //                   </IconButton>
      //                 </li>

      //                 <li>
      //                   <IconButton className="icon"
      //                     onClick={() => {
      //                       this.props.actions.AuthenticationActions.ShowAuthenticationLoader();
      //                       // this.props.userTwitterSignIn();
      //                     }}>
      //                     <i className="zmdi zmdi-twitter" />
      //                   </IconButton>
      //                 </li>

      //                 <li>
      //                   <IconButton className="icon"
      //                     onClick={() => {
      //                       this.props.actions.AuthenticationActions.ShowAuthenticationLoader();
      //                       // this.props.userGoogleSignIn();

      //                     }}>
      //                     <i className="zmdi zmdi-google-plus" />
      //                   </IconButton>
      //                 </li>

      //                 <li>
      //                   <IconButton className="icon"
      //                     onClick={() => {
      //                       this.props.actions.AuthenticationActions.ShowAuthenticationLoader();
      //                       // this.props.userGithubSignIn();
      //                     }}>
      //                     <i className="zmdi zmdi-github" />
      //                   </IconButton>
      //                 </li>
      //               </ul>
      //             </div>

      //           </fieldset>
      //         </form>
      //       </div>
      //     </div>

      //   </div>
      //   {
      //     this.props.Loader &&
      //     <div className="loader-view">
      //       <CircularProgress />
      //     </div>
      //   }
      //   {this.props.ShowMessage && NotificationManager.error(this.props.AlertMessage)}
      //   <NotificationContainer 
      //   />
      // </div>
      <div>aaa</div>
    );
  }
}

function mapStateToProps(state: AuthenticationStateType): StateToPropsType {
  return {
    CurrentUser: state.CurrentUser,
    Loader: false,
    ShowMessage: false,
    AlertMessage: ''
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchToPropsType {
  return {
    actions: {
      AuthenticationActions: bindActionCreators(AuthenticationActions, dispatch)
    }
  };
}

type ThisPropsType = StateToPropsType & DispatchToPropsType & OwnProps;

type ThisStateType = {
  email: string,
  password: string
};

type StateToPropsType = AuthenticationStateType;

type DispatchToPropsType = {
  actions: {
    AuthenticationActions: typeof AuthenticationActions
  }
};

type OwnProps = RouteComponentProps<any>;

export default withRouter(connect<StateToPropsType, DispatchToPropsType, OwnProps>(mapStateToProps, mapDispatchToProps)(SignIn));
