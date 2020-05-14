import React from 'react';
import {useIntl} from 'umi';

const TestIntl = () => {
  const intl = useIntl();
  const msg = intl.formatMessage({id: 'test.intl.hello.world'});
  return <h1>{msg}</h1>
};

export default TestIntl;
