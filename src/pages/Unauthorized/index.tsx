// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import { ContentLimiter } from 'components/view/layouts/ContentLimiter';

export function UnauthorizedPage(): ReactElement {
  return <ContentLimiter>Unauthorized page</ContentLimiter>;
}
