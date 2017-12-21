import React from 'react';
import PropTypes from 'prop-types';

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }

  toggleCode(event) {
    event.preventDefault();
    this.setState(prevState => {
      return { showCode: !prevState.showCode };
    });
  }

  render() {
    const { showCode } = this.state;
    const { code, description, name } = this.props.Sample;
    // Must use CommonJS require to dynamically require because ES Modules must be statically analyzable.
    // const SampleComponent = require(`./Samples/${this.props.componentName}/${name}`).default;
    return (
      <div className="Sample">
        {/* {description && <h4>{description}</h4>}

        <SampleComponent />

        <p>
          <a href="#" onClick={this.toggleCode}>
            {showCode ? "Hide" : "Show"} Code
          </a>
        </p>

        {showCode && <CodeSample>{code}</CodeSample>} */}
      </div>
    )
  }
}

Sample.propTypes = {
  sample: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
}

export default Sample;
