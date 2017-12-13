import React from 'react';
import PropTypes from 'prop-types';

/** Label element. */
function CCP_Label({ displayFor, displayValue }) {
  return (
    <label style={{ display: 'block' }} htmlFor={displayFor}>
      {displayValue}
    </label>
  )
}

Label.propTypes = {
  /** The associated element's id */
  displayFor: PropTypes.string.isRequired,

  /** Label's display value' */
  displayValue: PropTypes.string.isRequired
};

export default CCP_Label;
