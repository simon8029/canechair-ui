import * as React from 'react';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import { withRouter, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import 'react-big-calendar/lib/less/styles.less';
import 'styles/bootstrap.scss';
import 'styles/app.scss';
import DefaultTheme from 'Themes/DefaultTheme';
import AppLocale from 'Utilities/LanguageProvider';
import { StoreStateType } from 'Types/StateTypes/StoreStateType';
import DashBoard from 'ShowCase/DashBoard/index';
import BBB from 'bbb';

class ShowCase extends React.Component<ThisPropsType, ThisStateType> {
  render() {
    const { match } = this.props;
    const currentAppLocale = AppLocale[this.props.Settings.Locale];
    console.log(`match:`);
    console.log(match);
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(DefaultTheme)}>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <div className="app-main">
            <Switch>
              <Route path={`${match.url}/DashBoard`} component={DashBoard} />
              <Route path={`${match.url}/bbb`} component={BBB} />
              <Route path="" component={DashBoard} />
            </Switch>
          </div>
        </IntlProvider>
      </MuiThemeProvider>
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