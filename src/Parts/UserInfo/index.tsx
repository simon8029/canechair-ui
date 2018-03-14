
import * as React from 'react';
import Avatar from 'material-ui/Avatar';
import { connect } from 'react-redux';
// import Menu, { MenuItem } from 'material-ui/Menu';
// import { userSignOut } from 'actions/Auth';
// import IntlMessages from 'Utilities/IntlMessage';

class UserInfo extends React.Component {

  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = (event: any) => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  }

  handleRequestClose = () => {
    this.setState({ open: false });
  }

  render() {
    return (
      <div className="user-profile d-flex flex-row align-items-center">
        <Avatar
          alt="..."
          src="http://via.placeholder.com/150x150"
          className="user-avatar "
        />
        <div className="user-detail">
          <h4 className="user-name" onClick={this.handleClick}>CRM Core <i
            className="zmdi zmdi-caret-down zmdi-hc-fw align-middle" />
          </h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ settings }: any) => {
  // const { locale } = settings;
  // return { locale };
};
export default connect(mapStateToProps, {})(UserInfo);
