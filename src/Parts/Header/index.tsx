import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
// import StoreStateType from 'Types/StateTypes/StoreStateType';
// import SearchBox from 'Parts/SearchBox';

export class CCHeader extends React.Component<ThisPropsType, ThisStateType> {
  constructor(props: ThisPropsType) {
    super(props as any);
    this.state = {
      anchorEl: undefined,
      searchBox: false,
      searchText: '',
      mailNotification: false,
      langSwitcher: false,
      appNotification: false,
    };
  }

  render() {
    return (
      <AppBar
        position="sticky"
        className="ccp-app-header"
      >
        <Toolbar >
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" >
            CRM Core
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </ AppBar>
    );
  }
}

function mapStateToProps(state: StateToPropsType): StateToPropsType {
  return {
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchToPropsType {
  return {
  };
}

type ThisStateType = {
  anchorEl: any,
  searchBox: boolean;
  searchText: string,
  mailNotification: boolean;
  langSwitcher: boolean;
  appNotification: boolean;
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