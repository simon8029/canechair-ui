import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withStyles, WithStyles } from 'material-ui/styles';
import { StoreStateType } from 'Types/StateTypes/StoreStateType';

const decorate = withStyles(() => ({
  root: {
  },
}));

export const CCTestWithStyles = decorate<ThisPropsType>(
  class TestWithStyles extends React.Component<ThisPropsType & WithStyles<'root'>, ThisStateType> {
    constructor(props: ThisPropsType) {
      super(props as any);
      this.state = {
      };
    }

    render() {
      return (
        <div>
          TestWithStyles works.
        </div>
      );
    }
  }
);

function mapStateToProps(state: StoreStateType): StateToPropsType {
  console.log(`state of test withStyles:`);
  console.log(state);
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

export default connect<StateToPropsType, DispatchToPropsType>(mapStateToProps, mapDispatchToProps)(CCTestWithStyles);
