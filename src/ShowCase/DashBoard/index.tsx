// import * as React from 'react';
// import { Redirect, Route, Switch } from 'react-router-dom';
// import DefaultDashboard from 'ShowCase/DashBoard/Default/index';

// const Dashboard = ({ match }: any) => (
//   <div className="app-wrapper">
//     <Switch>
//       <Redirect exact from={`${match.url}/`} to={`${match.url}/default`} />
//       <Route path={`${match.url}/default`} component={DefaultDashboard} />
//     </Switch>
//   </div>
// );

// export default Dashboard;

import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withStyles, WithStyles } from 'material-ui/styles';
import MDUsersCards from 'ShowCase/DashBoard/Cards/MDUsersCards';

const decorate = withStyles(() => ({
  root: {
  },
}));

export const CCDashboard = decorate<ThisPropsType>(
  class Dashboard extends React.Component<ThisPropsType & WithStyles<'root'>, ThisStateType> {
    constructor(props: ThisPropsType) {
      super(props as any);
      this.state = {
      };
    }

    render() {
      return (
        <div>
          <MDUsersCards />
        </div>
      );
    }
  }
);

function mapStateToProps(state: StateToPropsType): StateToPropsType {
  return {
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchToPropsType {
  return {
  };
}

type ThisStateType = {
};

type StateToPropsType = {
};

type DispatchToPropsType = {
};

type ThisPropsType = StateToPropsType & DispatchToPropsType;

export default connect<StateToPropsType, DispatchToPropsType>(mapStateToProps, mapDispatchToProps)(CCDashboard);
