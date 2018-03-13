import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import { withRouter, RouteComponentProps } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
// import Menu, { MenuItem } from 'material-ui/Menu';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
// import { COLLAPSED_DRAWER, FIXED_DRAWER } from 'constants/ActionTypes';
import SearchBox from 'Parts/SearchBox';
import MailNotification from '../MailNotification/index';
import AppNotification from '../AppNotification/index';
import CardHeader from 'Parts/Cards/CardHeader/index';
// import { switchLanguage } from 'actions/Setting';
import StoreStateType from 'Types/StateTypes/StoreStateType';
// const ITEM_HEIGHT = 34;

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
    // const { onToggleCollapsedNav, drawerType, locale } = this.props;
    const drawerStyle = !this.props.Settings.IsDrawerCollapsed ? 'd-block d-xl-none' : 'd-block';

    return (
      <AppBar className="app-main-header">
        <Toolbar className="app-toolbar" >
          <IconButton className={`jr-menu-icon ${drawerStyle}`} aria-label="Menu">
            <span className="menu-icon" />
          </IconButton>

          <Link className="app-logo" to="/">
            <img src="assets/images/logo.png" alt="Jambo" title="Jambo" />
          </Link>

          <SearchBox styleName="d-none d-sm-block" placeholder=""
            onChange={this.updateSearchText}
            value={this.state.searchText} />

          <ul className="header-notifications list-inline ml-auto">
            <li className="d-inline-block d-sm-none list-inline-item">
              <Dropdown
                className="quick-menu nav-searchbox"
                isOpen={this.state.searchBox}
                toggle={this.onSearchBoxSelect}>

                <DropdownToggle
                  className="d-inline-block"
                  tag="span"
                  data-toggle="dropdown">
                  <IconButton className="icon-btn size-30">
                    <i className="zmdi zmdi-search zmdi-hc-fw" />
                  </IconButton>
                </DropdownToggle>

                <DropdownMenu right className="p-0">
                  <SearchBox styleName="search-dropdown" placeholder=""
                    onChange={this.updateSearchText}
                    value={this.state.searchText} />
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className="list-inline-item">
              <div className="user-name"
                onClick={this.onLangSwitcherSelect}>
                <div className="d-flex align-items-center pointer">
                  <i className={`flag flag-32 flag-${this.props.Settings.Locale}`} />
                  <h4 className="mb-0 ml-1">{this.props.Settings.Locale}</h4>
                </div>
              </div>
            </li>
            <li className="list-inline-item app-tour">
              <Dropdown
                className="quick-menu"
                isOpen={this.state.appNotification}
                toggle={this.onAppNotificationSelect}>

                <DropdownToggle
                  className="d-inline-block"
                  tag="span"
                  data-toggle="dropdown">
                  <IconButton className="icon-btn size-30">
                    <i className="zmdi zmdi-notifications-active icon-alert animated infinite wobble" />
                  </IconButton>
                </DropdownToggle>

                <DropdownMenu right>
                  <CardHeader styleName="align-items-center" heading="Notifications" />
                  <AppNotification />
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className="list-inline-item mail-tour">
              <Dropdown
                className="quick-menu"
                isOpen={this.state.mailNotification}
                toggle={this.onMailNotificationSelect}
              >
                <DropdownToggle
                  className="d-inline-block"
                  tag="span"
                  data-toggle="dropdown">

                  <IconButton className="icon-btn size-30">
                    <i className="zmdi zmdi-comment-alt-text icon-alert zmdi-hc-fw" />
                  </IconButton>
                </DropdownToggle>

                <DropdownMenu right>
                  <CardHeader styleName="align-items-center" heading="Messages" />
                  <MailNotification />
                </DropdownMenu>
              </Dropdown>
              {/* <Menu
                id="label-menu"
                anchorEl={this.state.anchorEl}
                open={this.state.langSwitcher}
                onClose={this.handleRequestClose}
                style={{ maxHeight: ITEM_HEIGHT * 6 }}
                MenuListProps={{
                  style: {
                    width: 180,
                  },
                }}>

                {languages.map((language, index) =>
                  <MenuItem key={index} value={language.languageId} onClick={() => {
                    this.handleRequestClose();
                    // this.props.switchLanguage(language);
                  }}>
                    <div className="d-flex user-name manage-margin align-items-center">
                      <i className={`flag flag-32 flag-${language.icon}`} />
                      <h4>{language.name}</h4>
                    </div>
                  </MenuItem>
                )}

              </Menu> */}
            </li>
          </ul>
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
    this.setState({
      appNotification: !this.state.appNotification
    });
  }
  onMailNotificationSelect = () => {
    this.setState({
      mailNotification: !this.state.mailNotification
    });
  }
  onLangSwitcherSelect = (event: any) => {
    this.setState({
      langSwitcher: !this.state.langSwitcher, anchorEl: event.currentTarget
    });
  }
  onSearchBoxSelect = () => {
    this.setState({
      searchBox: !this.state.searchBox
    });
  }
  handleRequestClose = () => {
    this.setState({ langSwitcher: false, mailNotification: false, appNotification: false, searchBox: false });
  }

  updateSearchText = (event: any) => {
    this.setState({
      searchText: event.target.value,
    });
  }
}

function mapStateToProps(state: StoreStateType): StateToPropsType {
  return {
    Authentication: state.Authentication,
    Routing: state.Routing,
    Settings: state.Settings
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

type StateToPropsType = StoreStateType;

type DispatchToPropsType = {};

type ThisPropsType = StateToPropsType & DispatchToPropsType;

export default connect<StateToPropsType, DispatchToPropsType>(mapStateToProps, mapDispatchToProps)(CCHeader);

const languages = [
  {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us',
  },
  {
    languageId: 'chinese',
    locale: 'zh',
    name: 'Chinese',
    icon: 'cn',
  },
  {
    languageId: 'french',
    locale: 'fr',
    name: 'French',
    icon: 'fr',
  }

];