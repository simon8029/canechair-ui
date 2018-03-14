import * as React from 'react';
// import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import { withRouter, Route, RouteComponentProps, Switch, Redirect } from 'react-router-dom';
import { connect, Dispatch } from 'react-redux';
import { IntlProvider } from 'react-intl';
// import 'react-big-calendar/lib/less/styles.less';
// import 'styles/bootstrap.scss';
// import 'Styles/app.scss';
import 'Styles/app.css';
// import DefaultTheme from 'Themes/DefaultTheme';
import AppLocale from 'Utilities/LanguageProvider';
import { StoreStateType } from 'Types/StateTypes/StoreStateType';
import DashBoard from 'ShowCase/DashBoard/index';
import BBB from 'bbb';
import Sidebar from 'ShowCase/SideBar/index';
import { CCHeader } from 'Parts/Header';
class ShowCase extends React.Component<ThisPropsType, ThisStateType> {
  render() {
    const { match } = this.props;
    const currentAppLocale = AppLocale[this.props.Settings.Locale];

    return (
      // <MuiThemeProvider muiTheme={getMuiTheme(DefaultTheme)}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <div className="app-main">
          <Sidebar />
          <div className="main-container">
            <div className="app-header">
              <CCHeader
                Authentication={this.props.Authentication}
                Routing={this.props.Routing}
                Settings={this.props.Settings} />
            </div>
          </div>
          <Switch>
            <Redirect exact from={`${match.url}`} to={`${match.url}/DashBoard`} />
            <Route path={`${match.url}/DashBoard`} component={DashBoard} />
            <Route path={`${match.url}/bbb`} component={BBB} />
            {/* <Route path="" component={DashBoard} /> */}
          </Switch>
        </div>
      </IntlProvider >
      // </MuiThemeProvider>
    );
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
    actions: {
    }
  };
}

type ThisPropsType = StateToPropsType & DispatchToPropsType & OwnProps;

type ThisStateType = {
  email: string,
  password: string
};

type StateToPropsType = StoreStateType;

type DispatchToPropsType = {
  actions: {
  }
};

type OwnProps = RouteComponentProps<any>;

export default withRouter(connect<StateToPropsType, DispatchToPropsType, OwnProps>(mapStateToProps, mapDispatchToProps)(ShowCase));