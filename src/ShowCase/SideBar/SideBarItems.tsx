import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Link } from 'react-router-dom';
import { withStyles, WithStyles, StyleRules, Theme } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';

const decorate = withStyles((theme: Theme) => {
  const styles: StyleRules = {
    root: {
      flexGrow: 1,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
    },
    listItem: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main
      },
    },
    nestedItem: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main
      },
      paddingLeft: theme.spacing.unit * 4,
    },
  };
  return styles;
}, { withTheme: true });

export const SideBarItems = decorate<ThisPropsType>(
  class InnerClass extends React.Component<ThisPropsType & WithStyles<'root' | 'listItem' | 'nestedItem'>, ThisStateType> {
    constructor(props: ThisPropsType) {
      super(props as any);
      this.state = {
        IsItemGroupOpen_Dashboard: true,
        IsItemGroupOpen_CustomerManagement: false
      };
      const dashboard = document.getElementById('dashboard');
      dashboard!.focus();
    }

    render() {
      return (
        <div className={this.props.classes.root}>
          <div>
            <List>
              <ListItem id="dashboard" component={props => <Link to="/ShowCase" {...props} />} className={this.props.classes.listItem} onClick={this.onItemGroupClick.bind(this, 'dashboard')}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem component={props => <Link to="/ShowCase" {...props} />} button className={this.props.classes.listItem} onClick={this.onItemGroupClick.bind(this, 'customerManagement')}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="Customer Management" />
              </ListItem>
              <Collapse in={this.state.IsItemGroupOpen_CustomerManagement} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem component={props => <Link to="/ShowCase/AccountTypes" {...props} />} button className={this.props.classes.nestedItem}>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary="Account Types" />
                  </ListItem>
                </List>
              </Collapse>
              <ListItem button onClick={this.onItemGroupClick.bind(this, 'a')} className={this.props.classes.listItem}>
                <ListItemIcon><StarIcon /></ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
              <ListItem button onClick={this.onItemGroupClick.bind(this, 'b')} className={this.props.classes.listItem}>
                <ListItemIcon><SendIcon /></ListItemIcon>
                <ListItemText primary="Send mail" />
              </ListItem>
              <ListItem button onClick={this.onItemGroupClick.bind(this, 'c')} className={this.props.classes.listItem}>
                <ListItemIcon><DraftsIcon /></ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItem></List>
            <Divider />
            <List>
              <ListItem button onClick={this.onItemGroupClick.bind(this, 'd')} className={this.props.classes.listItem}>
                <ListItemIcon><MailIcon /></ListItemIcon>
                <ListItemText primary="All mail" />
              </ListItem>
              <ListItem button onClick={this.onItemGroupClick.bind(this, 'e')} className={this.props.classes.listItem}>
                <ListItemIcon><DeleteIcon /></ListItemIcon>
                <ListItemText primary="Trash" />
              </ListItem>
              <ListItem button onClick={this.onItemGroupClick.bind(this, 'f')} className={this.props.classes.listItem}>
                <ListItemIcon><ReportIcon /></ListItemIcon>
                <ListItemText primary="Spam" />
              </ListItem></List>
          </div>
        </div>
      );
    }

    onItemGroupClick = (moduleName: string) => {
      this.cleanCollapseStatus();

      switch (moduleName) {
        case 'dashboard':
          this.setState({ IsItemGroupOpen_Dashboard: true });
          break;
        case 'customerManagement':
          this.setState({ IsItemGroupOpen_CustomerManagement: true });
          break;

        default:
          break;
      }
    }

    cleanCollapseStatus = () => {
      this.setState({
        IsItemGroupOpen_CustomerManagement: false
      });
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
  IsItemGroupOpen_Dashboard: boolean;
  IsItemGroupOpen_CustomerManagement: boolean;
};

type StateToPropsType = {
};

type DispatchToPropsType = {
};

type ThisPropsType = StateToPropsType & DispatchToPropsType;

export default connect<StateToPropsType, DispatchToPropsType>(mapStateToProps, mapDispatchToProps)(SideBarItems);