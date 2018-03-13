import * as React from 'react';
import { withRouter, Route, RouteComponentProps, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import CardMenu from '../CardMenu';

class CardHeader extends React.Component {
  onOptionMenuSelect = event => {
    this.setState({ menuState: true, anchorEl: event.currentTarget });
  };
  handleRequestClose = () => {
    this.setState({ menuState: false });
  };

  constructor() {
    super();
    this.state = {
      anchorEl: undefined,
      menuState: false,
    }
  }

  render() {
    const { heading, subHeading } = this.props;
    let { styleName } = this.props;
    const { anchorEl, menuState } = this.state;
    return (
      <div className={`jr-card-header d-flex ${styleName}`}>
        <div className="mr-auto">
          <h3 className="card-heading">{heading}</h3>
          {subHeading && <p className="sub-heading">{subHeading}</p>}
        </div>

        <IconButton className="size-30" onClick={this.onOptionMenuSelect.bind(this)}>
          <i className="zmdi zmdi-chevron-down" />
        </IconButton>
        <CardMenu menuState={menuState} anchorEl={anchorEl}
          handleRequestClose={this.handleRequestClose.bind(this)} />
      </div>
    )
  }
}


function mapStateToProps(state: StoreStateType): StateToPropsType {
  return {
    Authentication: state.Authentication,
    Routing: state.Routing,
    Settings: state.Settings
  };
}

type ThisStateType = {
};

type StateToPropsType = {};

type DispatchToPropsType = {};

type ThisPropsType = StateToPropsType & DispatchToPropsType;

export default connect<StateToPropsType>(mapStateToProps)(CardHeader);
// export default CardHeader;

CardHeader.defaultProps = {
  styleName: '',
  subHeading: ''
};
