import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
// import PrivateRoute from 'Parts/Authentication/PrivateRoute';
import { ConnectedRouter } from 'react-router-redux';
import Store, { history } from 'Store/Store';
// import App from './App1';
import FourOhFour from 'Parts/Common/404';
import ShowCase from 'ShowCase/index';
// import PrivateRoute from 'Parts/Authentication/PrivateRoute';
// const PrivateRoute = require('Parts/Authentication/PrivateRoute');
import registerServiceWorker from './registerServiceWorker';
import SignIn from 'Parts/Authentication/SignIn';
import './index.css';

const RestrictedRoute = ({ component: Component, IsAuthenticated, ...rest }: any) =>
  <Route
    {...rest}
    render={props =>
      IsAuthenticated
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location }
          }}
        />}
  />;

ReactDOM.render(
  <Provider store={Store}>
    <ConnectedRouter history={history}>
      <Switch>
        {/* <PrivateRoute Path="/" Component={App} IsAuthenticated={false} /> */}
        {/* <PrivateRoute Path={`${match.url}/ShowCase`} Component={ShowCase} IsAuthenticated={false} /> */}
        <Route path="/SignIn" component={SignIn} />
        {/* <Route exact Path="/app" component={App} /> */}
        <RestrictedRoute path="/ShowCase" IsAuthenticated={false} component={ShowCase} />
        <Route path="/404" component={FourOhFour} />
        <Route path="" component={FourOhFour} />
      </Switch>
    </ConnectedRouter >
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
