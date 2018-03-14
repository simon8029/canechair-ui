import * as React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

const InjectMassage = (props: any) => <FormattedMessage { ...props } />;

export default injectIntl(InjectMassage, {
  withRef: false
});
