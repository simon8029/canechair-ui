// import React from 'react';
// import Navigation from './Navigation.js';
// import ComponentPage from './ComponentPage';
// import CCPComponentMetaData from '../../CCPSettings/CCPComponentsMetaData.js';

// class DocumentPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       components: getComponents(),
//       route: window.location.hash.substr(1)
//     }
//   }

//   componentDidMount() {
//     window.addEventListener('hashchange', () => {
//       this.setState({ route: window.location.hash.substr(1) });
//     })
//   }



//   render() {
//     const { route } = this.state;
//     const component = route ? CCPComponentMetaData.filter(c => c.name === route)[0] : CCPComponentMetaData[0];

//     debugger;
//     return (
//       <div id="" className="">
//         <Navigation components={components} />
//         <ComponentPage component={component} />
//       </div>

//     )
//   }
// }

// function getComponents() {
//   let components = JSON.parse(CCPComponentMetaData);
//   debugger;
//   return components;
// }

// export default DocumentPage;


import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DocumentPageActions from '__filePathOfActions__';
class DocumentPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
DocumentPage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(DocumentPageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentPage);
