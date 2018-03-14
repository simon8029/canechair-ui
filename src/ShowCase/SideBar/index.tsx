import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import StoreStateType from 'Types/StateTypes/StoreStateType';
// import { Config } from 'constants/ThemeColors';
import SideBarItems from './SideBarItems';
import UserInfo from 'Parts/UserInfo';
// import { COLLAPSED_DRAWER, FIXED_DRAWER } from 'constants/ActionTypes';
// import { updateWindowWidth } from 'actions/Setting';

class SideBar extends React.PureComponent<ThisPropsType, ThisStateType> {

  componentDidMount() {
    // window.addEventListener('resize', () => {
    //   this.props.updateWindowWidth($(window).width());
    // });
  }

  render() {
    // const { navCollapsed, drawerType, width, locale }: any = this.props;
    // const drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'd-xl-flex' : drawerType.includes(COLLAPSED_DRAWER) ? '' : 'd-flex';
    let type = 'permanent';
    // if (drawerType.includes(COLLAPSED_DRAWER) || (drawerType.includes(FIXED_DRAWER) && width < 1200)) {
    //   type = 'temporary';
    // }

    return (
      <div className={`app-sidebar d-none`}>
        <Drawer className="app-sidebar-content"
          open={type.includes('temporary') ? this.props.Settings.IsSideBarCollapsed : true}
        >
          <UserInfo />
          <SideBarItems />
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state: StoreStateType): StateToPropsType {
  console.log(`state:`);
  console.log(state);
  return {
    Authentication: state.Authentication,
    Routing: state.Routing,
    Settings: state.Settings
  };
}

// const mapStateToProps = ({ settings }: any) => {
//   const { navCollapsed, drawerType, width, locale } = settings;
//   return { navCollapsed, drawerType, width, locale };
// };

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchToPropsType {
  return {
    actions: {
    }
  };
}

type ThisPropsType = StateToPropsType & DispatchToPropsType & OwnProps;

type ThisStateType = {
};

type StateToPropsType = StoreStateType;

type DispatchToPropsType = {
};

type OwnProps = RouteComponentProps<any>;

export default withRouter(connect<StateToPropsType, DispatchToPropsType, OwnProps>(mapStateToProps, mapDispatchToProps)(SideBar));
