import * as React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

const InjectMassage: any = (props: any): any => {
  return <FormattedMessage { ...props } />
};

export default injectIntl(InjectMassage, {
  withRef: false
});
