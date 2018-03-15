import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { withStyles, WithStyles } from 'material-ui/styles';
import * as StylesVariable from 'Styles/_variables';
// import StoreStateType from 'Types/StateTypes/StoreStateType';
// import SearchBox from 'Parts/SearchBox';

const decorate = withStyles(() => ({
  AppBar: {
    width: window.innerWidth - StylesVariable.AppSideBarWidth,
    height: StylesVariable.AppHeaderHeight,
    marginLeft: StylesVariable.AppSideBarWidth
  }
}));

export const CCHeader = decorate<ThisPropsType>(
  class Header extends React.Component<ThisPropsType & WithStyles<'AppBar'>, ThisStateType> {
    constructor(props: ThisPropsType) {
      super(props as any);
      this.state = {
      };
    }

    render() {
      return (
        <div className="ccp-app-header-root">
          <AppBar
            position="sticky"
            className={this.props.classes.AppBar}
          >
            <Toolbar >
              <IconButton color="inherit" aria-label="Menu" className="ccp-app-header-menuButton">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className="ccp-app-header-title" >
                CRM Core
          </Typography>
              <Button color="inherit" >Login</Button>
            </Toolbar>
          </ AppBar>
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

type DispatchToPropsType = {};

type ThisPropsType = StateToPropsType & DispatchToPropsType;

export default connect<StateToPropsType, DispatchToPropsType>(mapStateToProps, mapDispatchToProps)(CCHeader);
// export default compose(
//   withStyles(styles),
//   connect<StateToPropsType, DispatchToPropsType>(mapStateToProps, mapDispatchToProps)
// )(CCHeader);