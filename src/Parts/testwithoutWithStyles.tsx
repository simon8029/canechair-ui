import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
// import { TestModel } from 'types/modelTypes/TestModel';
// import ITestAction from 'actions/interfaces/ITestAction';
// import * as TestActions from 'actions/TestActions';
import StoreStateType from 'Types/StateTypes/StoreStateType';
// import * as toastr from 'toastr';

class TestwithoutWithStyles extends React.Component<ThisPropsType, ThisStateType> {
  constructor(props: ThisPropsType) {
    super(props as any);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container mt-1">
        TestwithoutWithStyles works.
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
  // onTestDelete = (Test: TestModel) => {
  //    this.props.actions.deleteTest(Test)
  //    .then(() => {
  //        toastr.success('Test deleted.');
  //    });
  // }
  //
}

function mapStateToProps(storeState: StoreStateType, ownProps: OwnProps): StateToPropsType {
  console.log(`storeState of test without styles:`);
  console.log(storeState);
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

export default withRouter(connect<StateToPropsType, DispatchToPropsType, OwnProps>(mapStateToProps, mapDispatchToProps)(TestwithoutWithStyles));
