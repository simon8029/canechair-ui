import React from 'react';
import PropTypes from 'prop-types';

const Props = ({ Props }) => {
  return (
    <table className="props">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(Props).map(key => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{Props[key].description}</td>
                <td>{Props[key].type.name}</td>
                <td>{Props[key].defaultValue && Props[key].defaultValue.value}</td>
                <td>{Props[key].required && "X"}</td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  )
}

Props.propTypes = {
  Props: PropTypes.object.isRequired
};

export default Props;
