import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
// import PrivateRoute from 'Parts/Authentication/PrivateRoute';
import { ConnectedRouter } from 'react-router-redux';
import Store, { history } from 'Store/Store';
import FourOhFour from 'Parts/Common/404';
import ShowCase from 'ShowCase/index';
import { PrivateRoute } from 'Parts/Authentication/PrivateRoute';
import registerServiceWorker from './registerServiceWorker';
import SignIn from 'Parts/Authentication/SignIn';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <Provider store={Store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Redirect exact from="/" to="/ShowCase" />
        <PrivateRoute path="/ShowCase" component={ShowCase} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="" component={FourOhFour} />
      </Switch>
    </ConnectedRouter >
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
