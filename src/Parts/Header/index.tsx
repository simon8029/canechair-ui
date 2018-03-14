import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import StoreStateType from 'Types/StateTypes/StoreStateType';
// import { withStyles } from 'material-ui';
// import SearchBox from 'Parts/SearchBox';

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   flex: {
//     flex: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
// };

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
      <AppBar className="app-main-header">
        <Toolbar className="app-header-toolbar" >
          <IconButton className="marginLeft: -12,    marginRight: 20," color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className="float-right">
            Title
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
  }

  componentWillMount() {
    //
  }

  componentDidMount() {
    //
  }

  componentWillReceiveProps(nextProps: StateToPropsType) {
    //
  }

  componentDidUpdate() {
    //
  }

  onAppNotificationSelect = () => {
    //
  }
  onMailNotificationSelect = () => {
    //
  }
  onLangSwitcherSelect = (event: any) => {
    //
  }
  onSearchBoxSelect = () => {
    //
  }
  handleRequestClose = () => {
    //
  }

  updateSearchText = (event: any) => {
    //
  }
}

function mapStateToProps(state: StoreStateType): StateToPropsType {
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
  // withStyles(styles),
  // connect<StateToPropsType, DispatchToPropsType>(mapStateToProps, mapDispatchToProps)
// )(CCHeader);