import * as React from 'react';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import 'react-big-calendar/lib/less/styles.less';
import 'styles/bootstrap.scss';
import 'styles/app.scss';
import ShowCase from 'ShowCase/index';

const RestrictedRoute = ({ component: Component, ...rest, authUser }: any) =>
  <Route
    {...rest} render={props => authUser
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />}
  />;

class App extends React.Component {
  render() {
    const { match, location, themeColor, isDarkTheme, locale, authUser }: any = this.props;

    if (location.pathname === '/') {
      if (authUser === null) {
        return (<Redirect to={'/signin'} />);
      } else {
        return (<Redirect to={'/app/dashboard/default'} />);
      }
    }

    return (
      <div className="show-case">
        <RestrictedRoute path={`${match.url}app`} authUser={authUser} component={ShowCase} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </div>
    );
  }
}

const mapStateToProps = ({ settings, auth }: any) => {
  const { themeColor, sideNavColor, darkTheme, locale } = settings;
  const { authUser } = auth;
  return { themeColor, sideNavColor, isDarkTheme: darkTheme, locale, authUser }
};

export default connect(mapStateToProps)(App);
