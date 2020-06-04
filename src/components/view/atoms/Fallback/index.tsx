// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import './styles.scss';

export function Fallback(): ReactElement {
  return <div className="application-fallback">Loading...</div>;
}
