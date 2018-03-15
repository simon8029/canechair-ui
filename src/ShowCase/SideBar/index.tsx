import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withStyles, WithStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';
import * as StylesVariables from 'Styles/_variables';
import UserInfo from 'Parts/UserInfo';
import { StoreStateType } from 'Types/StateTypes/StoreStateType';

const decorate = withStyles(() => ({
  SideBar: {
    width: StylesVariables.AppSideBarWidth
  },
  ToolBar: {

  },
  Drawer: {
    width: StylesVariables.AppSideBarWidth
  },
  DrawerPaper: {
    // position: 'relative',
    width: StylesVariables.AppSideBarWidth,
    // transition: theme.transitions.create('width', {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
  },
  DrawerPaperClose: {
    // overflowX: 'hidden',
    // transition: theme.transitions.create('width', {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
    width: 50,
    // [theme.breakpoints.up('sm')]: {
    //   width: theme.spacing.unit * 9,
    // },
  }
}));

export const CCSideBar = decorate<ThisPropsType>(
  class SideBar extends React.Component<ThisPropsType & WithStyles<'SideBar' | 'Drawer' | 'DrawerPaper' | 'DrawerPaperClose' | 'ToolBar'>, ThisStateType> {
    constructor(props: ThisPropsType) {
      super(props as any);
      this.state = {
        DrawOpen: true
      };
    }

    render() {
      return (
        <div className={this.props.classes.SideBar}>
          <Drawer
            variant="permanent"
            classes={{
              paper: `${this.props.classes.Drawer} ${this.props.Settings.IsSideBarCollapsed && this.props.classes.DrawerPaperClose}`
            }}
          >
            <UserInfo />
            <div className={this.props.classes.ToolBar} />
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Customer Management" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Send mail" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItem></List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="All mail" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary="Trash" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <ReportIcon />
                </ListItemIcon>
                <ListItemText primary="Spam" />
              </ListItem></List>
          </Drawer>
        </div>
      );
    }
  }
);

function mapStateToProps(state: StoreStateType): StateToPropsType {
  return {
    Authentication: state.Authentication,
    Routing: state.Routing,
    Settings: state.Settings,
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchToPropsType {
  return {
  };
}

type ThisStateType = {
};

type StateToPropsType = {
} & StoreStateType;

type DispatchToPropsType = {
};

type ThisPropsType = StateToPropsType & DispatchToPropsType;

export default connect<StateToPropsType, DispatchToPropsType>(mapStateToProps, mapDispatchToProps)(CCSideBar);
