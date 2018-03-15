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
  root: {
    width: window.innerWidth - StylesVariable.AppDrawerWidth
  },
}));
export const DecoratedCCHeader = decorate<ThisPropsType>(
  class CCHeader extends React.Component<ThisPropsType & WithStyles<'root'>, ThisStateType> {
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
            className="ccp-app-header"
            classes={this.props.classes}
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

export default connect<StateToPropsType, DispatchToPropsType>(mapStateToProps, mapDispatchToProps)(DecoratedCCHeader);
// export default compose(
//   withStyles(styles),
//   connect<StateToPropsType, DispatchToPropsType>(mapStateToProps, mapDispatchToProps)
// )(CCHeader);