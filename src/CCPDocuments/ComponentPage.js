import React from 'react';
import PropTypes from 'prop-types';
import Sample from './Sample';
import Props from './Props';

const ComponentPage = ({ component }) => {
  debugger;

  if (component.Errors.length > 0) {
    return (
      <div id="" className="">
        {component.Errors}
      </div>
    );
  } else {
    return (
      <div className="componentpage">
        <h2>{ComponentName}</h2>
        <p>{ComponentMetadata.ComponentDescription}</p>

        <h3>Sample{ComponentMetadata.ComponentSamples.length > 1 && "s"}</h3>
        {
          ComponentMetadata.ComponentSamples.length > 0 ?
            ComponentMetadata.ComponentSamples.map(sample => <Sample key={sample.SampleName} sample={sample} componentName={ComponentName} />) :
            "No Samples exist."
        }

        <h3>Props</h3>
        {
          props ?
            <Props props={props} /> :
            "This component accepts no props."
        }
      </div>
    )
  }
};

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired
};

export default ComponentPage;
