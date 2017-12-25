import React from 'react';
import { Provider } from 'react-redux';
import DocumentPage from './CCPDocuments/DocumentPage';

const App = () =>
  <div>
    <h1>CaneChair.Parts</h1>
    <DocumentPage testProp="test111" />
  </div>

export default App;
