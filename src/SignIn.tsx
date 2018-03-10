import * as React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
// import { NotificationContainer, NotificationManager } from 'react-notifications';
const NotificationContainer = require('react-notifications');
const NotificationManager = require('react-notifications');
import StoreStateType from 'Types/StateTypes/StoreStateType';
import AuthenticationStateType from 'Types/StateTypes/AuthenticationStateType';
import IntlMessages from 'Utilities/IntlMessages';
import { CircularProgress } from 'material-ui/CircularProgress';
import UserModel from 'Types/ModelTypes/AuthenticationTypes/UserModel';
// import {
//     hideMessage,
//     showAuthLoader,
//     userFacebookSignIn,
//     userGithubSignIn,
//     userGoogleSignIn,
//     userSignIn,
//     userTwitterSignIn
// } from 'actions/Auth';

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
                this.props.actions.AuthenticationActions.hideMessage();
            }, 100);
        }
        if (this.props.CurrentUser !== null) {
            this.props.history.push('/');
        }
    }

    render() {
        const {
            email,
            password
        } = this.state;
        const { showMessage, loader, alertMessage } = this.props;
        return (
            <div
                className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
                <div className="app-login-main-content">

                    <div className="app-logo-content d-flex align-items-center justify-content-center">
                        <Link className="logo-lg" to="/" title="Jambo">
                            <img src="http://via.placeholder.com/177x65" alt="jambo" title="jambo" />
                        </Link>
                    </div>

                    <div className="app-login-content">
                        <div className="app-login-header mb-4">
                            <h1><IntlMessages id="appModule.email" /></h1>
                        </div>

                        <div className="app-login-form">
                            <form>
                                <fieldset>
                                    <TextField
                                        id="required"
                                        floatingLabelText={<IntlMessages id="appModule.email" />}
                                        fullWidth
                                        onChange={(event) => this.setState({ email: event.target.value })}
                                        defaultValue={email}
                                        className="mt-1 my-sm-3"
                                    />
                                    <TextField
                                        type="password"
                                        id="required"
                                        floatingLabelText={<IntlMessages id="appModule.password" />}
                                        fullWidth
                                        onChange={(event) => this.setState({ password: event.target.value })}
                                        defaultValue={password}
                                        className="mt-1 my-sm-3"
                                    />

                                    <div className="mb-3 d-flex align-items-center justify-content-between">
                                        <FlatButton onClick={() => {
                                            this.props.showAuthLoader();
                                            this.props.userSignIn({ email, password });
                                        }} variant="raised" color="primary">
                                            <IntlMessages id="appModule.signIn" />
                                        </FlatButton>

                                        <Link to="/signup">
                                            <IntlMessages id="signIn.signUp" />
                                        </Link>
                                    </div>

                                    <div className="app-social-block my-1 my-sm-3">
                                        <IntlMessages
                                            id="signIn.connectWith" />
                                        <ul className="social-link">
                                            <li>
                                                <IconButton className="icon"
                                                    onClick={() => {
                                                        this.props.showAuthLoader();
                                                        this.props.userFacebookSignIn();
                                                    }}>
                                                    <i className="zmdi zmdi-facebook" />
                                                </IconButton>
                                            </li>

                                            <li>
                                                <IconButton className="icon"
                                                    onClick={() => {
                                                        this.props.showAuthLoader();
                                                        this.props.userTwitterSignIn();
                                                    }}>
                                                    <i className="zmdi zmdi-twitter" />
                                                </IconButton>
                                            </li>

                                            <li>
                                                <IconButton className="icon"
                                                    onClick={() => {
                                                        this.props.showAuthLoader();
                                                        this.props.userGoogleSignIn();

                                                    }}>
                                                    <i className="zmdi zmdi-google-plus" />
                                                </IconButton>
                                            </li>

                                            <li>
                                                <IconButton className="icon"
                                                    onClick={() => {
                                                        this.props.showAuthLoader();
                                                        this.props.userGithubSignIn();
                                                    }}>
                                                    <i className="zmdi zmdi-github" />
                                                </IconButton>
                                            </li>
                                        </ul>
                                    </div>

                                </fieldset>
                            </form>
                        </div>
                    </div>

                </div>
                {
                    loader &&
                    <div className="loader-view">
                        <CircularProgress />
                    </div>
                }
                {showMessage && NotificationManager.error(alertMessage)}
                <NotificationContainer />
            </div>
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

type ThisStateType = {
    email: string,
    password: string
};

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchToPropsType {
    return {
        actions: {
            AuthenticationActions: bindActionCreators(AuthenticationActions, dispatch)
        }
    };
}

type StateToPropsType = AuthenticationStateType;

type DispatchToPropsType = {
    actions: {
        AuthenticationActions: typeof AuthenticationActions
    }
};

type OwnProps = RouteComponentProps<any>;

type ThisPropsType = StateToPropsType & DispatchToPropsType & OwnProps;

export default withRouter(connect<StateToPropsType, DispatchToPropsType, OwnProps>(mapStateToProps, mapDispatchToProps)(SignIn));
