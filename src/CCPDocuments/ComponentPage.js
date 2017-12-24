import React from 'react';
import PropTypes from 'prop-types';
// import SampleComponent from './SampleComponent';
// import PropsComponent from './PropsComponent';

const ComponentPage = ({ component }) => {
  console.log(`component:`);
  console.log(component);
  if (component.Errors && component.Errors.length > 0) {
    return (
      <div id="" className="">
        {component.Errors}
      </div>
    );
  } else {
    return (
      <div className="componentpage">
        <h2>{component.ComponentName}</h2>
        <p>{component.ComponentMetadata.ComponentDescription}</p>

        <h3>Sample{component.ComponentMetadata.ComponentSampleComponents && component.ComponentMetadata.ComponentSampleComponent.length > 1 && "s"}</h3>
        {
          component.ComponentMetadata.ComponentSampleComponents && component.ComponentMetadata.ComponentSampleComponents.length > 0 ?
            component.ComponentMetadata.ComponentSampleComponents.map(SampleComponent => <SampleComponent key={SampleComponent.SampleComponentName} SampleComponent={SampleComponent} componentName={ComponentName} />) :
            "No SampleComponents exist."
        }

        <h3>Props</h3>
        {
          component.ComponentMetadata.Props ?
            <PropsComponent Props={component.ComponentMetadata.Props} /> :
            "This component accepts no Props."
        }
      </div>
    )
  }
};

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired
};

export default ComponentPage;
