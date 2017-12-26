import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ComponentActions from '../CCPActions/CCPComponentActions';
import PropsComponent from './PropsComponent';
import Sample from './Sample';

class ComponentPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = props;
  }

  componentWillReceiveProps(props) {
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

          <h3>Sample{this.state.CurrentSelectedComponent.ComponentSamples && this.state.CurrentSelectedComponent.ComponentSamples.length > 1 && "s"}</h3>
          {console.log(`this.state.CurrentSelectedComponent.ComponentSamples:`)}
          {console.log(this.state.CurrentSelectedComponent.ComponentSamples)}
          {
            this.state.CurrentSelectedComponent.ComponentSamples && this.state.CurrentSelectedComponent.ComponentSamples.length > 0 ?
              this.state.CurrentSelectedComponent.ComponentSamples.map(sample => {
                console.log(`sample:`);
                console.log(sample);
                return <Sample key={sample.SampleName} {...sample} />
              }) :
              "No Samples exist."
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
