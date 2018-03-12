import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
// import PrivateRoute from 'Parts/Authentication/PrivateRoute';
import { ConnectedRouter } from 'react-router-redux';
import Store, { history } from 'Store/Store';
import FourOhFour from 'Parts/Common/404';
import ShowCase from 'ShowCase/index';
import DashBoard from 'ShowCase/DashBoard/index';
import { PrivateRoute } from 'Parts/Authentication/PrivateRoute';
import registerServiceWorker from './registerServiceWorker';
import SignIn from 'Parts/Authentication/SignIn';
import './index.css';

ReactDOM.render(
  <Provider store={Store}>
    <ConnectedRouter history={history}>
      {/* <PrivateRoute Path="/" Component={App} IsAuthenticated={false} /> */}
      <Switch>
        <PrivateRoute path="/ShowCase" component={ShowCase} />
        <PrivateRoute path="/ShowCase/DashBoard" component={DashBoard} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="" component={FourOhFour} />
      </Switch>
    </ConnectedRouter >
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
