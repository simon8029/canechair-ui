import * as React from 'react';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import { withRouter, Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import 'react-big-calendar/lib/less/styles.less';
import 'styles/bootstrap.scss';
import 'styles/app.scss';
import DefaultTheme from 'Themes/DefaultTheme';
import AppLocale from 'Utilities/LanguageProvider';
// import { PrivateRoute } from 'Parts/Authentication/PrivateRoute';
import SignIn from 'Parts/Authentication/SignIn';
// import SignUp from 'Parts/Authentication/SignUp';
import ShowCase from 'ShowCase/index';
import { StoreStateType } from 'Types/StateTypes/StoreStateType';

const PrivateRoute: any = ({ component: Component, isAuthenticated }: any) =>
  <Route
    render={props =>
      isAuthenticated
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: '/SignIn',
            state: { from: props.location }
          }}
        />}
  />;
class App extends React.Component<ThisPropsType, ThisStateType> {

  render() {
    // if (location.pathname === '/') {
    //   if (this.props.Authentication.CurrentUser === null) {
    //     return (<Redirect to={'/SignIn'} />);
    //   } else {
    //     return (<Redirect to={'/ShowCase'} />);
    //   }
    // }
    const { match } = this.props;
    const currentAppLocale = AppLocale[this.props.Settings.Locale];
    console.log(`this.props:`);
    console.log(this.props);
    console.log(`match:`);
    console.log(match);
    console.log(`currentAppLocale:`);
    console.log(currentAppLocale);
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(DefaultTheme)}>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <div className="app-main">
            app
              <PrivateRoute path="/ShowCase" component={ShowCase} />
            <Route path="/SignIn" component={SignIn} />
            {/* <Route path="/signup" component={SignUp} /> */}
          </div>
        </IntlProvider>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state: StoreStateType): StateToPropsType {
  console.log(`state:`);
  console.log(state);
  return {
    Authentication: state.Authentication,
    Routing: state.Routing,
    Settings: state.Settings
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

type StateToPropsType = StoreStateType;

type DispatchToPropsType = {
  actions: {
  }
};

type OwnProps = RouteComponentProps<any>;

export default withRouter(connect<StateToPropsType, DispatchToPropsType, OwnProps>(mapStateToProps, mapDispatchToProps)(App));
