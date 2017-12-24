import React from 'react';
import { Provider } from 'react-redux';
import DocumentPage from './CCPDocuments/DocumentPage';

const App = ({ store }) =>
  <Provider store={store}>
    <div>
      <h1>CaneChair.Parts</h1>
      <DocumentPage />
    </div>
  </Provider>

export default App;
