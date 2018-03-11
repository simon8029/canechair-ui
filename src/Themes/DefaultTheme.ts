import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';

const getTheme = () => {
  let overwrites = {
    'palette': {
      'primary1Color': Colors.grey800,
      'textColor': fade(Colors.lightWhite, 0.54),
      'secondaryTextColor': Colors.white,
      'alternateTextColor': fade(Colors.darkBlack, 0.87),
      'canvasColor': Colors.grey900,
      'borderColor': fade(Colors.lightWhite, 0.54),
      'disabledColor': Colors.grey700,
      'primary2Color': Colors.grey800,
      'accent1Color': Colors.grey700,
      'accent2Color': Colors.grey600,
      'accent3Color': Colors.grey700
    }
  };
  return getMuiTheme(baseTheme, overwrites);
};

export default getTheme();