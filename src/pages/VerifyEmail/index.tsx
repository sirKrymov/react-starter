// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import { VerifyEmailScreen } from 'components/screens/VerifyEmail';
import { AuthTemplate } from 'components/view/templates/Auth';

export function VerifyEmailPage(): ReactElement {
  return (
    <AuthTemplate page="verify-email">
      <VerifyEmailScreen />
    </AuthTemplate>
  );
}
