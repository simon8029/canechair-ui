import * as React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
// import * as DarkTheme from 'Themes/darkTheme';
import * as SettingsActions from 'Actions/SettingsActions';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as StylesVariable from 'Styles/_variables';
import { withStyles, WithStyles, Theme, StyleRules } from 'material-ui/styles';
// import PrivateRoute from 'Parts/Authentication/PrivateRoute';
// import { ConnectedRouter } from 'react-router-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import StoreStateType from 'Types/StateTypes/StoreStateType';
import SideBarItems from 'ShowCase/SideBar/SideBarItems';
import DefaultTheme from 'Themes/DefaultTheme';
import CCDashboard from 'ShowCase/DashBoard';
import AccountTypes from 'ShowCase/AccountTypes';
import CCForm from 'ShowCase/CCForm';
import CCDataTable from 'ShowCase/CCDataTable';
import CCTimeLine from 'ShowCase/CCTimeLine';

const decorate = withStyles((theme: Theme) => {
  const styles: StyleRules = {
    root: {
      flexGrow: 1,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: StylesVariable.AppSideBarWidth,
      width: `calc(100% - ${StylesVariable.AppSideBarWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
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

const CCShowCase = decorate<ThisPropsType>(
  class ShowCase extends React.Component<ThisPropsType & WithStyles<'root' | 'appBar' | 'appBarShift' | 'hide' | 'drawerPaper' | 'drawerPaperClose' | 'toolbar' | 'content'>, ThisStateType> {
    constructor(props: ThisPropsType) {
      super(props as any);
      this.state = {
        Routing: this.props.Routing,
        Authentication: this.props.Authentication,
        Settings: this.props.Settings,
      };
    }
    render() {
      return (
        <MuiThemeProvider theme={DefaultTheme}>
          <div className={this.props.classes.root}>
            <AppBar
              position="absolute"
              className={`${this.props.classes.appBar} ${this.props.Settings.IsSideBarOpen && this.props.classes.appBarShift}`}
            >
              <Toolbar disableGutters={!this.props.Settings.IsSideBarOpen}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.toggleSideBar}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" noWrap>
                  CRM Core
            </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              classes={{
                paper: `${this.props.classes.drawerPaper} ${!this.props.Settings.IsSideBarOpen && this.props.classes.drawerPaperClose}`,
              }}
              open={this.props.Settings.IsSideBarOpen}
            >
              <div className={this.props.classes.toolbar}>
                <IconButton
                  onClick={this.toggleSideBar}>
                  {this.props.theme && this.props.theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </div>
              <Divider />
              <SideBarItems />
            </Drawer>
            <main className={this.props.classes.content}>
              <div className={this.props.classes.toolbar} />
              <Switch>
                <Redirect exact from="/" to="/ShowCase" />
                <Route exact path="/ShowCase" component={CCDashboard} />
                <Route path="/ShowCase/AccountTypes" component={AccountTypes} />
                <Route path="/ShowCase/Form" component={CCForm} />
                <Route path="/ShowCase/DataTable" component={CCDataTable} />
                <Route path="/ShowCase/TimeLine" component={CCTimeLine} />
              </Switch>
            </main>
          </div>
        </MuiThemeProvider >
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