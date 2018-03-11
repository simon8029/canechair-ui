import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import PrivateRoute from 'Parts/Authentication/PrivateRoute';
import { ConnectedRouter } from 'react-router-redux';
import Store, { history } from 'Store/Store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SignIn from 'Parts/Authentication/SignIn';
import './index.css';

ReactDOM.render(
  <Provider store={Store}>
    <ConnectedRouter history={history}>
      <Switch>
        <PrivateRoute exact path="/" component={App} />
        <Route path="/SignIn" component={SignIn} />

      </Switch>
    </ConnectedRouter >
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
