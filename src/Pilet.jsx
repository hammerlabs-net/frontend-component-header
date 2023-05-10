import * as React from 'react';

import Header from './Header';
import messages from './i18n/index';

const piletSpec = {
  name: 'openEdx Header',
  version: '1.0.0',
  spec: 'v2',
  dependencies: {},
  config: {},
  basePath: '/pilets',
  setup(piralApi) {
    piralApi.mergeMessages(messages);
    piralApi.registerExtension('openedx-header', () => (
      <Header />
    ));
  },

};

export default piletSpec;
