import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
// import { xxx1Model } from 'types/modelTypes/xxx1Model';
// import Ixxx1Action from 'actions/interfaces/Ixxx1Action';
// import * as xxx1Actions from 'actions/xxx1Actions';
// import StoreStateType from 'types/StateTypes/StoreStateType';
// import * as toastr from 'toastr';

class XXX1 extends React.Component<ThisPropsType, ThisStateType> {
  constructor(props: ThisPropsType) {
    super(props as any);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container mt-1">
        xxx1 works.
      </div>
    );
  }

  componentWillMount() {
    //
  }

  componentDidMount() {
    //
  }

  componentWillReceiveProps(nextProps: StateToPropsType) {
    //
  }

  componentDidUpdate() {
    //
  }

  // Build in delete function, remove it if not needed.
  // onxxx1Delete = (xxx1: xxx1Model) => {
  //    this.props.actions.deletexxx1(xxx1)
  //    .then(() => {
  //        toastr.success('xxx1 deleted.');
  //    });
  // }
  //
}

function mapStateToProps(storeState: any, ownProps: OwnProps): StateToPropsType {
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

type RCProps = RouteComponentProps<{ id: number }>;

type OwnProps = {
} & RCProps;

type ThisPropsType = StateToPropsType & DispatchToPropsType & OwnProps;

export default withRouter(connect<StateToPropsType, DispatchToPropsType, OwnProps>(mapStateToProps, mapDispatchToProps)(XXX1));
