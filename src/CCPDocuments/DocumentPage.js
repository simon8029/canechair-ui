import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
class DocumentPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = props;
  }

  render() {
    return (
      <div id="" className="">
        <Navigation />
        <ComponentPage />
      </div>
    );
  }
}
DocumentPage.propTypes = {
  // actions: PropTypes.object.isRequired
  ownProp1: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    Components: state.Components,
    CurrentSelectedComponent: state.Components[2]
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(DocumentPageActions, dispatch)
//   };
// }

export default connect(mapStateToProps)(DocumentPage);
