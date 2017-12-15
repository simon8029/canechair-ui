import React from 'react';
import navigation from './Navigation.js';
import ComponentPage from './ComponentPage';
import CCPComponentMetaData from '../../CCPSettings/CCPComponentsMetaData.json';

class DocumentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const { route } = this.state;
    const component = route ? CCPComponentMetaData.filter(c => c.na)
    return (
      <div id="" className="">
        <Navigation components={}
      </div>
    )
  }
}

export default DocumentPage;

