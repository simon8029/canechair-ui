import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropsComponent from './PropsComponent';
import * as ComponentActions from '../CCPActions/CCPComponentActions';

class ComponentPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = props;
    console.log(`this.state:`);
    console.log(this.state);
  }

  componentWillReceiveProps(props) {
    console.log(`componentWillReceiveProps == props:`);
    console.log(props);
    this.setState({ CurrentSelectedComponent: props.CurrentSelectedComponent, components: props.components });
  }

  render() {
    if (this.state.CurrentSelectedComponent.Errors && this.state.CurrentSelectedComponent.Errors.length > 0) {
      return (
        <div id="" className="">
          {this.state.CurrentSelectedComponent.Errors}
        </div>
      );
    } else {
      return (
        <div>
          <h2>{this.state.CurrentSelectedComponent.ComponentName}</h2>
          <p>{this.state.CurrentSelectedComponent.ComponentMetaData.description}</p>

          <h3>Sample{this.state.CurrentSelectedComponent.ComponentMetaData.ComponentSamples && this.state.CurrentSelectedComponent.ComponentMetaData.ComponentSamples.length > 1 && "s"}</h3>
          {
            this.state.CurrentSelectedComponent.ComponentMetaData.ComponentSamples && this.state.CurrentSelectedComponent.ComponentMetaData.ComponentSamples.length > 0 ?
              this.state.CurrentSelectedComponent.ComponentMetaData.ComponentSamples.map(SampleComponent => <SampleComponent key={Samplethis.state.CurrentSelectedComponent.SampleComponentName} SampleComponent={SampleComponent} componentName={ComponentName} />) :
              "No SampleComponents exist."
          }

          <h3>Props</h3>
          {
            this.state.CurrentSelectedComponent.ComponentMetaData.props ?
              <PropsComponent Props={this.state.CurrentSelectedComponent.ComponentMetaData.props} /> :
              "This component accepts no Props."
          }
        </div>
      )
    }
  }
}

ComponentPage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(store, ownProps) {
  console.log(`store.CurrentSelectedComponent:`);
  console.log(store.CurrentSelectedComponent);
  return {
    Components: store.Components,
    CurrentSelectedComponent: store.CurrentSelectedComponent,
    // state: store
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ComponentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentPage);
