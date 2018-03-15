import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withStyles, WithStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import red from 'material-ui/colors/red';

const decorate = withStyles(() => ({
  Avatar: {
    marginRight: 15,
    height: 44,
    width: 44,
    lineHeight: 44,
    backgroundColor: red[500]
  },
  UserName: {
    cursor: 'pointer',
  }
}));

export const CCUserInfo = decorate<ThisPropsType>(
  class UserInfo extends React.Component<ThisPropsType & WithStyles<'Avatar' | 'UserName'>, ThisStateType> {
    constructor(props: ThisPropsType) {
      super(props as any);
      this.state = {
      };
    }

    render() {
      return (
        <div>
          <Avatar
            className={this.props.classes.Avatar}
          >MD</Avatar>
          <span className={this.props.classes.UserName}>Administrator</span>
        </div >
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

export default connect<StateToPropsType, DispatchToPropsType>(mapStateToProps, mapDispatchToProps)(CCUserInfo);
