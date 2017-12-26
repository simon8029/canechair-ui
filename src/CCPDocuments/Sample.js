import React from 'react';
import PropTypes from 'prop-types';
import CodeSample from './CodeSample';
// import CcpTextInputSample from '../CCPComponents/Inputs/CCP_TextInput/Samples/CCP_TextInput.Sample';

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sampleDisplayStatus: false };
    this.toggleSampleDisplayStatus = this.toggleSampleDisplayStatus.bind(this);
  }

  toggleSampleDisplayStatus(event) {
    event.preventDefault();
    console.log(`this:`);
    console.log(this);
    this.setState(prevState => {
      return { sampleDisplayStatus: !prevState.sampleDisplayStatus };
    });
  }

  render() {
    const { sampleDisplayStatus } = this.state;
    const { SampleCode, SampleDescription, SampleName, SamplePath } = this.props;
    let samplePath = SamplePath.replace(/\\/g, '/').slice(0, -3);
    // let samplePath = "../CCPComponents/Inputs/CCP_TextInput/Samples/CCP_TextInput.Sample";
    // const SampleComponent = require(`${samplePath}`).default;
    const SampleComponent = require('../CCPComponents/Inputs/CCP_TextInput/Samples/CCP_TextInput.Sample').default;

    return (
      <div className="Sample">
        {SampleName && <h4>{SampleName}</h4>}
        {SampleDescription && <h4>{SampleDescription}</h4>}

        <SampleComponent />
        {/* <CcpTextInputSample /> */}
        {/* <CcpTextInputSample /> */}

        <p>
          <a href="#" onClick={this.toggleSampleDisplayStatus}>
            {sampleDisplayStatus ? "Hide" : "Show"} Code
          </a>
        </p>

        {sampleDisplayStatus && <CodeSample>{SampleCode}</CodeSample>}
      </div>
    )
  }
}

// SampleComponent.propTypes = {
//   Sample: PropTypes.object.isRequired,
//   ComponentName: PropTypes.string.isRequired
// }

export default Sample;
