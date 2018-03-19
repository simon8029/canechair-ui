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
import { withStyles, WithStyles, Theme, StyleRules } from 'material-ui/styles';
import * as StylesVariable from 'Styles/_variables';
import StoreStateType from 'Types/StateTypes/StoreStateType';
// import SearchBox from 'Parts/SearchBox';

const decorate = withStyles((theme: Theme) => {
  const styles: StyleRules = {
    HeaderRoot: {
      flexGrow: 1,
      height: 430,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
    },
    AppBar: {
      marginLeft: StylesVariable.AppSideBarWidth,
      width: `calc(100% - ${StylesVariable.AppSideBarWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawerPaper: {
      position: 'relative',
      width: StylesVariable.AppSideBarWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing.unit * 7,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 9,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
    },
  };
  return styles;
}, { withTheme: true });

// No export here to avoid unconnected component export.
const CCHeader = decorate<ThisPropsType>(
  class Header extends React.Component<ThisPropsType & WithStyles<any>, ThisStateType> {
    constructor(props: ThisPropsType) {
      super(props as any);
      this.state = {
        isSideBarOpen: false
      };
    }

    render() {
      return (
        <div className={this.props.classes.HeaderRoot}>
          <AppBar
            position="sticky"
            className={this.props.classes.AppBar}
          >
            <Toolbar disableGutters={this.state.isSideBarOpen} >
              <IconButton
                color="inherit"
                aria-label="Menu"
                className="ccp-app-header-menuButton"
                onClick={this.props.toggleSideBar}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className="ccp-app-header-title" >
                {this.props.title}
              </Typography>
              <Button color="inherit" >Login</Button>
            </Toolbar>
          </ AppBar>
        </div>
      );
    }
    componentWillReceiveProps(nextProps: any) {
      //
    }
  }
);

function mapStateToProps(state: StoreStateType, ownProps: OwnPropsType): StateToPropsType {
  return {
    title: ownProps.title,
    isSideBarOpen: state.Settings.IsSideBarOpen
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchToPropsType {
  return {
  };
}

type ThisStateType = {
  isSideBarOpen: boolean;
};

type StateToPropsType = {
  // isSideBarOpen: boolean;
};

type DispatchToPropsType = {
};

type OwnPropsType = {
  title: string;
  toggleSideBar: () => void;
};

type ThisPropsType = StateToPropsType & DispatchToPropsType & OwnPropsType;

export default connect<StateToPropsType, DispatchToPropsType, OwnPropsType>(mapStateToProps, mapDispatchToProps)(CCHeader);
// export default compose(
//   withStyles(styles),
//   connect<StateToPropsType, DispatchToPropsType>(mapStateToProps, mapDispatchToProps)
// )(CCHeader);