import React, { ComponentType } from 'react';

import { Route, Router } from 'react-router-dom';
import { History } from 'history';

export function AppRouter(component: ComponentType, history: History) {
  return () => (
    <Router history={history}>
      <Route component={component} />
    </Router>
  );
}
