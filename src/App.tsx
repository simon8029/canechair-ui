import * as React from 'react';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import { withRouter, Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import UserModel from 'Types/ModelTypes/AuthenticationTypes/UserModel';
import 'react-big-calendar/lib/less/styles.less';
import 'styles/bootstrap.scss';
import 'styles/app.scss';
import DefaultTheme from 'Themes/DefaultTheme';
import AppLocale from 'Utilities/LanguageProvider';
import PrivateRoute from 'Parts/Authentication/PrivateRoute';
import SignIn from 'Parts/Authentication/SignIn';
// import SignUp from 'Parts/Authentication/SignUp';
import ShowCase from 'ShowCase/index';

class App extends React.Component<ThisPropsType, ThisStateType> {

  render() {
    // const { match, location, authUser, locale } = this.props;
    if (location.pathname === '/') {
      if (this.props.CurrentUser === null) {
        return (<Redirect to={'/SignIn'} />);
      } else {
        return (<Redirect to={'/ShowCase'} />);
      }
    }

    console.log('connecting with ');
    console.log(`this.props:`);
    console.log(this.props);
    const currentAppLocale = AppLocale[this.props.locale.locale];
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(DefaultTheme)}>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <div className="app-main">
            <PrivateRoute path="/" component={ShowCase} />
            <Route path="/SignIn" component={SignIn} />
            {/* <Route path="/signup" component={SignUp} /> */}
          </div>
        </IntlProvider>
      </MuiThemeProvider>
    );
  }
}

// const mapStateToProps = ({ settings, auth }) => {
//   const { sideNavColor, locale } = settings;
//   const { authUser } = auth;
//   return { sideNavColor, locale, authUser }
// };

function mapStateToProps(state: StateToPropsType): StateToPropsType {
  return {
    CurrentUser: state.CurrentUser,
    match: state.match,
    location: state.location,
    locale: state.locale
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchToPropsType {
  return {
    actions: {
    }
  };
}

type ThisPropsType = StateToPropsType & DispatchToPropsType & OwnProps;

type ThisStateType = {
  email: string,
  password: string
};

type StateToPropsType = {
  match: any,
  location: any,
  CurrentUser: UserModel,
  locale: any
};

type DispatchToPropsType = {
  actions: {
  }
};

type OwnProps = RouteComponentProps<any>;

export default withRouter(connect<StateToPropsType, DispatchToPropsType, OwnProps>(mapStateToProps, mapDispatchToProps)(App));
