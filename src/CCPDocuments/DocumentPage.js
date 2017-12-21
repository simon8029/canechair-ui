import React from 'react';
import Navigation from './Navigation.js';
import ComponentPage from './ComponentPage';
import CCPComponentMetaData from '../../CCPSettings/CCPComponentsMetaData.js';

class DocumentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: window.location.hash.substr(1) });
    })
  }

  render() {
    const { route } = this.state;
    const component = route ? CCPComponentMetaData.filter(c => c.name === route)[0] : CCPComponentMetaData[0];
    return (
      <div id="" className="">
        <Navigation components={CCPComponentMetaData.map((component) => component.componentName)} />
        <ComponentPage component={component} />
      </div>

    )
  }
}

export default DocumentPage;
