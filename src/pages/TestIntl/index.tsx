import React from 'react';
import {useIntl, FormattedMessage} from 'umi';

const TestIntl = () => {
  const intl = useIntl();
  const msg = intl.formatMessage({id: 'test.intl.hello.world'});
  return <h1><FormattedMessage id="test.intl.hello.world"/></h1>
};

export default TestIntl;
