import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
// import * as DarkTheme from 'Themes/darkTheme';
import * as SettingsActions from 'Actions/SettingsActions';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
// import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
// import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import { withStyles, WithStyles, Theme, StyleRules } from 'material-ui/styles';
import * as StylesVariable from 'Styles/_variables';
import StoreStateType from 'Types/StateTypes/StoreStateType';
import SideBarItems from 'ShowCase/SideBar/SideBarItems';

const decorate = withStyles((theme: Theme) => {
  const styles: StyleRules = {
    root: {
      flexGrow: 1,
    },
    appFrame: {
      height: 430,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      width: '100%',
    },
    appBar: {
      position: 'absolute',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${StylesVariable.AppSideBarWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    'appBarShift-left': {
      marginLeft: StylesVariable.AppSideBarWidth,
    },
    'appBarShift-right': {
      marginRight: StylesVariable.AppSideBarWidth,
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
    hide: {
      display: 'none',
    },
    drawerPaper: {
      position: 'relative',
      width: StylesVariable.AppSideBarWidth,
    },
    drawerHeader: {
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
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    'content-left': {
      marginLeft: -StylesVariable.AppSideBarWidth,
    },
    'content-right': {
      marginRight: -StylesVariable.AppSideBarWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    'contentShift-left': {
      marginLeft: 0,
    },
    'contentShift-right': {
      marginRight: 0,
    }
  };
  return styles;
}, { withTheme: true });

const CCShowCase = decorate<ThisPropsType>(
  class ShowCase extends React.Component<ThisPropsType & WithStyles<'root' | 'appFrame' | 'appBar' | 'appBarShift' | 'menuButton' | 'hide' | 'drawerHeader' | 'drawerPaper' | 'drawerPaperClose' | 'toolbar' | 'content'>, ThisStateType> {

    render() {
      // const drawer = (
      //   <Drawer
      //     variant="persistent"
      //     open={this.props.Settings.IsSideBarOpen}
      //     classes={{
      //       paper: this.props.classes.drawerPaper,
      //     }}
      //   >
      //     <div className={this.props.classes.drawerHeader}>
      //       <IconButton onClick={this.toggleSideBar}>
      //         {this.props.theme && this.props.theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      //       </IconButton>
      //     </div>
      //     <Divider />
      //     <SideBarItems />
      //   </Drawer>
      // );

      return (
        <MuiThemeProvider theme={createMuiTheme()}>
          <div className={this.props.classes.root}>
            <div className={this.props.classes.appFrame}>
              <AppBar
                className={`${this.props.classes.appBar} ${this.props.Settings.IsSideBarOpen && this.props.classes.appBarShift}`}
              >
                <Toolbar disableGutters={this.props.Settings.IsSideBarOpen}>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.toggleSideBar}
                    className={`${this.props.classes.menuButton} `}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="title" color="inherit" noWrap>
                    CRM Core
              </Typography>
                </Toolbar>
              </AppBar>
              <Drawer
                variant="persistent"
                open={this.props.Settings.IsSideBarOpen}
                classes={{
                  paper: this.props.classes.drawerPaper,
                }}
              >
                <div className={this.props.classes.drawerHeader}>
                  {/* <IconButton onClick={this.toggleSideBar}>
                    {this.props.theme && this.props.theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                  </IconButton> */}
                  Drawer Header
                </div>
                <Divider />
                <SideBarItems />
              </Drawer>
              <main className={this.props.classes.content}>
                <div className={this.props.classes.drawerHeader} />
                <Typography>{'Dashboard content.'}</Typography>
              </main>

            </div>
          </div>
        </MuiThemeProvider>
      );
    }
    toggleSideBar = () => {
      this.props.actions.ToggleSideBarCollapse(this.props.Settings.IsSideBarOpen);
    }
  }
);

function mapStateToProps(state: StoreStateType): StateToPropsType {
  return {
    Authentication: state.Authentication,
    Routing: state.Routing,
    Settings: state.Settings
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchToPropsType {
  return {
    actions: bindActionCreators(SettingsActions, dispatch)
  };
}

type StateToPropsType = StoreStateType;

type DispatchToPropsType = {
  actions: typeof SettingsActions;
};

type OwnProps = RouteComponentProps<any>;

type ThisPropsType = StateToPropsType & DispatchToPropsType & OwnProps;

type ThisStateType = StoreStateType;

export default withRouter(connect<StateToPropsType, DispatchToPropsType, OwnProps>(mapStateToProps, mapDispatchToProps)(CCShowCase));