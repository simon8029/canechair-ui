import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
class App extends React.Component<ThisPropsType, ThisStateType> {
  render() {
    return (
      <div >
        <div className="app-main-container">
          <div className="app-header">
            {/* <Header drawerType={drawerType} onToggleCollapsedNav={this.onToggleCollapsedNav} /> */}
            show case.
          </div>

          <main className="app-main-content-wrapper">
            <div className="app-main-content" />
          </main>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any): StateToPropsType {
  return {
  };
}

type ThisStateType = {
  email: string,
  password: string
};

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchToPropsType {
  return {
    actions: {
    }
  };
}

type StateToPropsType = {};

type DispatchToPropsType = {
  actions: {
  }
};

type OwnProps = RouteComponentProps<any>;

type ThisPropsType = StateToPropsType & DispatchToPropsType & OwnProps;

export default withRouter(connect<StateToPropsType, DispatchToPropsType, OwnProps>(mapStateToProps, mapDispatchToProps)(App));
