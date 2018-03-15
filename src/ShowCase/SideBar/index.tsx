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

const decorate = withStyles(() => ({
  SideBar: {
    width: StylesVariables.AppSideBarWidth
  },
  ToolBar: {

  },
  Drawer: {
    width: StylesVariables.AppSideBarWidth
  }
}));

export const CCSideBar = decorate<ThisPropsType>(
  class SideBar extends React.Component<ThisPropsType & WithStyles<'SideBar' | 'Drawer' | 'ToolBar'>, ThisStateType> {
    constructor(props: ThisPropsType) {
      super(props as any);
      this.state = {
      };
    }

    render() {
      return (
        <div className={this.props.classes.SideBar}>
          <Drawer
            variant="permanent"
            classes={{
              paper: this.props.classes.Drawer
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
                <ListItemText primary="Inbox" />
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

export default connect<StateToPropsType, DispatchToPropsType>(mapStateToProps, mapDispatchToProps)(CCSideBar);
