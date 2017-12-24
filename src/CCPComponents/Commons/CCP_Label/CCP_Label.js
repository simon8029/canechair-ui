import React from 'react';
import PropTypes from 'prop-types';

export default CCP_Label;
/** Label element. */
// function CCP_Label({ displayFor, displayValue }) {
//   return (
//     <label style={{ display: 'block' }} htmlFor={displayFor}>
//       {displayValue}
//     </label>
//   )
// }
class CCP_Label extends React.Component {
  render() {
    return (
      <label style={{ display: 'block' }} htmlFor={displayFor}>
        {displayValue}
      </label>
    )
  }
}

CCP_Label.propTypes = {
  /** The associated element's id */
  displayFor: PropTypes.string.isRequired,

  /** Label's display value' */
  displayValue: PropTypes.string.isRequired
};

