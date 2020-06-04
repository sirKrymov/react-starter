import React, { ReactElement } from 'react';
import { configure } from 'mobx';

import { ToastsContainer } from 'components/containers/Toasts';
import { RootRouter } from 'router/RootRouter';

configure({ enforceActions: 'observed' });

export default function App(): ReactElement {
  return (
    <>
      <RootRouter />
      <ToastsContainer />
    </>
  );
}
