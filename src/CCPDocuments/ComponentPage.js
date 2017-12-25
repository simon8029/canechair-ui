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
  }

  render() {
    if (this.state.Errors && this.state.Errors.length > 0) {
      return (
        <div id="" className="">
          {this.state.Errors}
        </div>
      );
    } else {
      return (
        <div>
          <h2>{this.state.ComponentMetaData.props.hasErrors.description}</h2>
          <h2>{this.state.ComponentName}</h2>
          <p>{this.state.ComponentMetaData.description}</p>

          <h3>Sample{this.state.ComponentMetaData.ComponentSamples && this.state.ComponentMetaData.ComponentSamples.length > 1 && "s"}</h3>
          {
            this.state.ComponentMetaData.ComponentSamples && this.state.ComponentMetaData.ComponentSamples.length > 0 ?
              this.state.ComponentMetaData.ComponentSamples.map(SampleComponent => <SampleComponent key={Samplethis.state.SampleComponentName} SampleComponent={SampleComponent} componentName={ComponentName} />) :
              "No SampleComponents exist."
          }

          <h3>Props</h3>
          {
            this.state.ComponentMetaData.props ?
              <PropsComponent Props={this.state.ComponentMetaData.props} /> :
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

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ComponentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentPage);
