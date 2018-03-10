import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import Store, { history } from 'Store/Store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={Store}>
    <ConnectedRouter history={history}>
      <div>
        <Link to="/singleComponentGenerator">Single Component | </Link>
        <Link to="/schemas">Schemas</Link>
        <Switch>
          <Route exact path="/" component={App} />
          {/* <Route exact path="/schemas" component={SchemaMain} />
          <Route exact path="/schema" component={SchemaDetail} />
          <Route exact path="/schema/:schemaId" component={SchemaDetail} />
          <Route exact path="/schema/:schemaId/table" component={TableDetail} />
          <Route exact path="/schema/:schemaId/table/:tableId" component={TableDetail} />
          <Route exact path="/schema/:schemaId/table/:tableId/property" component={PropertyDetail} />
          <Route exact path="/schema/:schemaId/table/:tableId/property/:propertyId" component={PropertyDetail} />
          <Route exact path="/templates" component={TemplateManagementMain} />
          <Route exact path="/template" component={TemplateDetail} />
          <Route exact path="/template/:TemplateId" component={TemplateDetail} />
          <Route exact path="/templateGroups" component={TemplateGroupMain} />
          <Route exact path="/templateGroup" component={TemplateGroupDetail} />
          <Route exact path="/templateGroup/:TemplateGroupId" component={TemplateGroupDetail} />
          <Route exact path="/templateTypes" component={TemplateTypeMain} />
          <Route exact path="/templateType" component={TemplateTypeDetail} />
          <Route exact path="/templateType/:TemplateTypeId" component={TemplateTypeDetail} />
          <Route exact path="/singleComponentGenerator" component={SingleComponentGenerator} />
          <Route exact path="" component={FourOhFour} /> */}
        </Switch>
      </div>
    </ConnectedRouter >
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
