import * as React from 'react';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import 'react-big-calendar/lib/less/styles.less';
import 'styles/bootstrap.scss';
import 'styles/app.scss';

class App extends React.Component {
  render() {
    const { match, location, themeColor, isDarkTheme, locale, authUser } = this.props;

    if (location.pathname === '/') {
      if (authUser === null) {
        return (<Redirect to={'/signin'} />);
      } else {
        return (<Redirect to={'/app/dashboard/default'} />);
      }
    }

    const currentAppLocale = AppLocale[locale.locale];
    return (
      <div className="app-main">
        <RestrictedRoute path={`${match.url}app`}
          authUser={authUser} component={MainApp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </div>
    );
  }
}

const mapStateToProps = ({ settings, auth }) => {
  const { themeColor, sideNavColor, darkTheme, locale } = settings;
  const { authUser } = auth;
  return { themeColor, sideNavColor, isDarkTheme: darkTheme, locale, authUser }
};

export default connect(mapStateToProps)(App);
