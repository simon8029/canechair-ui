import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
class DocumentPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = props;
    console.log(`this.state:`);
    console.log(this.state);
  }

  render() {
    return (
      <div id="" className="">
        <Navigation Components={this.state.Components} />
        <ComponentPage component={this.state.CurrentSelectedComponent} />
      </div>
    );
  }
}
// DocumentPage.propTypes = {
//   actions: PropTypes.object.isRequired
// };

function mapStateToProps(state, ownProps) {
  console.log(`state in document page:`);
  console.log(state);
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
