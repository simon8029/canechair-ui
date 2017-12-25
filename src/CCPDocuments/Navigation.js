import React from 'react';
import PropTypes, { element } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NavigationActions from '../CCPActions/CCPNavigationActions';


class Navigation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = props;
    // this.onComponentNameClicked = this.onComponentNameClicked.bind(this);
    console.log(`this.state from navigation constructor:`);
    console.log(this.state);
  }

  onComponentNameClicked(component) {
    console.log(`component.ComponentName:`);
    console.log(component.ComponentName);
    console.log(`this.state.CurrentSelectedComponent.ComponentName:`);
    console.log(this.state.CurrentSelectedComponent.ComponentName);
    if (component.ComponentName !== this.state.CurrentSelectedComponent.ComponentName) {
      this.state.actions.reloadComponent(component);
    }
  };

  componentWillReceiveProps(props) {
    console.log(`componentWillReceiveProps == props:`);
    console.log(props);
    this.setState({ CurrentSelectedComponent: props.CurrentSelectedComponent, components: props.components });
  }

  render() {
    return (
      <div>
        <ul className="navigation">
          {
            this.state.Components.map((component) => {
              return (
                <li key={component.ComponentName}>
                  <span onClick={() => this.onComponentNameClicked(component)}>{component.ComponentName}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}



Navigation.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    Components: state.Components,
    CurrentSelectedComponent: state.CurrentSelectedComponent
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NavigationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
