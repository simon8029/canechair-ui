import React from 'react';
import PropTypes from 'prop-types';
export default SampleComponent;

class SampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sampleDisplayStatus: false };
  }

  toggleSampleDisplayStatus(event) {
    event.preventDefault();
    this.setState(prevState => {
      return { sampleDisplayStatus: !prevState.sampleDisplayStatus };
    });
  }

  render() {
    const { sampleDisplayStatus } = this.state;
    const { code, description, name } = this.props.Sample;
    // Must use CommonJS require to dynamically require because ES Modules must be statically analyzable.
    // const SampleComponent = require(`./Samples/${this.props.componentName}/${name}`).default;
    return (
      <div className="Sample">
        {/* {description && <h4>{description}</h4>}

        <SampleComponent />

        <p>
          <a href="#" onClick={this.toggleSampleDisplayStatus}>
            {sampleDisplayStatus ? "Hide" : "Show"} Code
          </a>
        </p>

        {sampleDisplayStatus && <CodeSample>{code}</CodeSample>} */}
      </div>
    )
  }
}

Sample.propTypes = {
  sample: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
}

