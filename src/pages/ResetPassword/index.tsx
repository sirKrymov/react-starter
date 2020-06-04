// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import { ResetPasswordScreen } from 'components/screens/ResetPassword';
import { AuthTemplate } from 'components/view/templates/Auth';

export function ResetPasswordPage(): ReactElement {
  return (
    <AuthTemplate page="resetPassword">
      <ResetPasswordScreen />
    </AuthTemplate>
  );
}
