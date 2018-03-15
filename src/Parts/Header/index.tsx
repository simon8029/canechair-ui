import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
// import { withRouter, RouteComponentProps } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { withStyles, WithStyles } from 'material-ui/styles';
import * as StylesVariable from 'Styles/_variables';
import StoreStateType from 'Types/StateTypes/StoreStateType';
// import SearchBox from 'Parts/SearchBox';

const decorate = withStyles(() => ({
  AppBar: {
    width: window.innerWidth - StylesVariable.AppSideBarWidth,
    height: StylesVariable.AppHeaderHeight,
    marginLeft: StylesVariable.AppSideBarWidth
  },
  AppBar_SideBarCollapsed: {
    width: window.innerWidth - StylesVariable.AppSideBarWidth_Collapsed,
    height: StylesVariable.AppHeaderHeight,
    marginLeft: StylesVariable.AppSideBarWidth
  }
}));

// No export here to avoid unconnected component export.
const CCHeader = decorate<ThisPropsType>(
  class Header extends React.Component<ThisPropsType & WithStyles<'AppBar' | 'AppBar_SideBarCollapsed'>, ThisStateType> {
    constructor(props: ThisPropsType) {
      super(props as any);
      this.state = {
        isSideBarCollapsed: false
      };
      console.log(`this.props:`);
      console.log(this.props);
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
                <MenuIcon onClick={this.props.toggleSideBar} />
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
    componentWillReceiveProps(nextProps: any) {
      // this.setState({ isSideBarCollapsed: nextProps.isSideBarCollapsed });
      console.log(`nextProps:`);
      console.log(nextProps);
    }
  }
);

function mapStateToProps(state: StoreStateType, ownProps: OwnPropsType): StateToPropsType {
  console.log(`state of header:`);
  console.log(state);
  return {
    isSideBarCollapsed: state.Settings.IsSideBarCollapsed
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchToPropsType {
  return {
  };
}

type ThisStateType = {
  isSideBarCollapsed: boolean;
};

type StateToPropsType = {
  // isSideBarCollapsed: boolean;
};

type DispatchToPropsType = {
};

type OwnPropsType = {
  toggleSideBar: () => void;
};

type ThisPropsType = StateToPropsType & DispatchToPropsType & OwnPropsType;

export default connect<StateToPropsType, DispatchToPropsType, OwnPropsType>(mapStateToProps, mapDispatchToProps)(CCHeader);
// export default compose(
//   withStyles(styles),
//   connect<StateToPropsType, DispatchToPropsType>(mapStateToProps, mapDispatchToProps)
// )(CCHeader);