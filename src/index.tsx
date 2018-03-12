import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
// import PrivateRoute from 'Parts/Authentication/PrivateRoute';
import { ConnectedRouter } from 'react-router-redux';
import Store, { history } from 'Store/Store';
import AAA from 'Parts/aaa';
import BBB from 'bbb';
import XXX1 from 'Parts/xxx1';
import FourOhFour from 'Parts/Common/404';
import ShowCase from 'ShowCase/index';
// import PrivateRoute from 'Parts/Authentication/PrivateRoute';
// const PrivateRoute = require('Parts/Authentication/PrivateRoute');
import registerServiceWorker from './registerServiceWorker';
import SignIn from 'Parts/Authentication/SignIn';
import './index.css';

// const RestrictedRoute = ({ component: Component, IsAuthenticated, ...rest }: any) => {
//   return <Route
//     {...rest}
//     render={props =>

//       IsAuthenticated
//         ? <Component {...props} />
//         : <Redirect
//           to={{
//             pathname: '/signin',
//             state: { from: props.location }
//           }}
//         />}
//   />;
// };

ReactDOM.render(
  <Provider store={Store}>
    <ConnectedRouter history={history}>
      {/* <PrivateRoute Path="/" Component={App} IsAuthenticated={false} /> */}
      {/* <PrivateRoute Path={`${match.url}/ShowCase`} Component={ShowCase} IsAuthenticated={false} /> */}
      <Switch>
        <Route Path="/aaa" component={AAA} >
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignIn1" component={SignIn} />
          <Route Path="/bbb" component={BBB} />
          <Route path="/ShowCase" component={ShowCase} />
          <Route path="/ShowCase1" component={ShowCase} />
          <Route path="/404" component={FourOhFour} />
          <Route path="/ShowCase2" component={ShowCase} />
          <Route Path="/xxx1" component={XXX1} />
          <Route path="" component={FourOhFour} />
        </Route >
      </Switch>
    </ConnectedRouter >
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
