import React from 'react';
import CCP_TextInput from '../CCP_TextInput';

/** Required TextBox with error */
export default class CCP_TextInputSample extends React.Component {
  render() {
    return (
      <CCP_TextInput
        textInputId="ccp_textInput2"
        textInputLabel="Password"
        textInputName="password"
        onChangeFunctionName={() => { }}
        required
        hasErrors="Password is required."
      />
    )
  }
}
