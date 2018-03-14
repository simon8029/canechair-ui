import * as React from 'react';
import Menu, { MenuItem } from 'material-ui/Menu';
import * as IntlMessages from 'Utilities/IntlMessage';

class CardMenu extends React.Component {

  render() {
    const ITEM_HEIGHT = 40;
    const options = [
      <IntlMessages id="popup.updateData" />,
      <IntlMessages id="popup.detailedLog" />,
      <IntlMessages id="popup.statistics" />,
      <IntlMessages id="popup.clearData" />
    ];
    const { menuState, anchorEl, handleRequestClose } = this.props;
    return (
      <Menu
        anchorEl={anchorEl}
        open={menuState}
        onClose={handleRequestClose}
        style={{ maxHeight: ITEM_HEIGHT * 4.5 }}
        MenuListProps={{
          style: {
            width: 150,
            paddingTop: 0,
            paddingBottom: 0
          },
        }}>
        {options.map(option =>
          <MenuItem key={option} onClick={handleRequestClose}>
            {option}
          </MenuItem>,
        )}
      </Menu>
    );
  }

}

export default CardMenu;