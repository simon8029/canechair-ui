import React from 'react';
import PropTypes from 'prop-types';
import CCP_Label from '../../Commons/CCP_Label';

/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required Input marker. */
function CCP_TextInput({ textInputId, textInputType = "text", textInputName, textInputLabel, isRequired = false, onChangeFunctionName, textInputPlaceholder, textInputValue, hasErrors, textInputChildren, ...props }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <CCP_Label DisplayFor={textInputId} DisplayValue={textInputName} />
      <input
        id={textInputId}
        type={textInputType}
        name={textInputName}
        placeholder={textInputPlaceholder}
        value={textInputValue}
        onChange={onChangeFunctionName}
        style={hasErrors && { border: 'solid 1px red' }}
        {...props} />
      {textInputChildren}
      {hasErrors && <div className="error" style={{ color: 'red' }}>{hasErrors}</div>}
    </div>
  );
};

CCP_TextInput.propTypes = {
  /** The textInputs's id. */
  textInputId: PropTypes.string.isRequired,

  /** the textInput's name. */
  textInputName: PropTypes.string.isRequired,

  /** The label for textInput. */
  textInputLabel: PropTypes.string.isRequired,

  /** The textInput's type. (default: text) */
  textInputType: PropTypes.string,

  /** Mark if the textInputs is required. */
  isRequired: PropTypes.bool,

  /** The textInput's onChange function name */
  onChangeFunctionName: PropTypes.func.isRequired,

  /** The textInput's placeholder */
  textInputPlaceholder: PropTypes.string,

  /** The textInput's value */
  textInputValue: PropTypes.any,

  /** Use for check if the textInput has error */
  hasErrors: PropTypes.string,

  /** The textInput's child components */
  textInputChildren: PropTypes.node
};

export default CCP_TextInput;
