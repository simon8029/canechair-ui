import * as React from 'react';
import { Dispatch, connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import StoreStateType from 'Types/StateTypes/StoreStateType';
class DefaultDashBoard extends React.Component<ThisPropsType, ThisStateType> {

  render() {
    return (
      <div className="dashboard animated slideInUpTiny animation-duration-3">
        Default Dashboard
      </div>
    );
  }
}

function mapStateToProps(state: StoreStateType): StateToPropsType {
  console.log(`state:`);
  console.log(state);
  return {
    Authentication: state.Authentication,
    Routing: state.Routing,
    Settings: state.Settings
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchToPropsType {
  return {
    actions: {
    }
  };
}

type ThisPropsType = StateToPropsType & DispatchToPropsType & OwnProps;

type ThisStateType = {
  email: string,
  password: string
};

type StateToPropsType = StoreStateType;

type DispatchToPropsType = {
  actions: {
  }
};

type OwnProps = RouteComponentProps<any>;

export default withRouter(connect<StateToPropsType, DispatchToPropsType, OwnProps>(mapStateToProps, mapDispatchToProps)(DefaultDashBoard));