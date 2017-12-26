import React from 'react';
import CCP_TextInput from '../../../CCPComponents/Inputs/CCP_TextInput';

/** Required TextBox with error */
export default class CCP_TextInputSample extends React.Component {
  render() {
    return (
      <CCP_TextInput
        textInputId="ccp_textInput1"
        textInputLabel="User Name"
        textInputName="username"
        onChangeFunctionName={() => { }}
        required
        hasErrors="User name is required."
      />
    )
  }
}
