import React from 'react';
import PropTypes from 'prop-types';
import CCP_Label from '../../Commons/CCP_Label';

/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */
function CCP_TextField({ textFieldId, textFieldType = "text", textFieldName, textFieldLabel, isRequired = false, onChangeFunctionName, textFieldPlaceholder, textFieldValue, hasErrors, textFieldChildren, ...props }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <CCP_Label htmlFor={htmlId} label={label} />
      <input
        id={textFieldId}
        type={textFieldType}
        name={textFieldName}
        placeholder={textFieldPlaceholder}
        value={textFieldValue}
        onChange={onChangeFunctionName}
        style={hasErrors && { border: 'solid 1px red' }}
        {...props} />
      {textFieldChildren}
      {hasErrors && <div className="error" style={{ color: 'red' }}>{hasErrors}</div>}
    </div>
  );
};

TextInput.propTypes = {
  /** The textfields's id. */
  textFieldId: PropTypes.string.isRequired,

  /** the textField's name. */
  textFieldName: PropTypes.string.isRequired,

  /** The label for textField. */
  textFieldLabel: PropTypes.string.isRequired,

  /** The textField's type. (default: text) */
  textFieldType: PropTypes.string,

  /** Mark if the textFields is required. */
  isRequired: PropTypes.bool,

  /** The textField's onChange function name */
  onChangeFunctionName: PropTypes.func.isRequired,

  /** The textField's placeholder */
  textFieldPlaceholder: PropTypes.string,

  /** The textField's value */
  textFieldValue: PropTypes.any,

  /** Use for check if the textField has error */
  hasErrors: PropTypes.string,

  /** The textField's child components */
  textFieldChildren: PropTypes.node
};

export default CCP_TextField;
