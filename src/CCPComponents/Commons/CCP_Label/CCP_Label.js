import React from 'react';
import PropTypes from 'prop-types';

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
      <label style={{ display: 'block' }} htmlFor={this.props.DisplayFor}>
        {this.props.DisplayValue}
      </label>
    )
  }
}

CCP_Label.propTypes = {
  /** The associated element's id */
  DisplayFor: PropTypes.string.isRequired,

  /** Label's display value' */
  DisplayValue: PropTypes.string.isRequired
};


export default CCP_Label;
