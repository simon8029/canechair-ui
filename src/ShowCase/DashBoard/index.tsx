import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DefaultDashboard from 'ShowCase/DashBoard/Default/index';

const Dashboard = ({ match }: any) => (
  <div className="app-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/default`} />
      <Route path={`${match.url}/default`} component={DefaultDashboard} />
    </Switch>
  </div>
);

export default Dashboard;