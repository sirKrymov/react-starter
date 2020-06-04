// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import { AuthTemplate } from 'components/view/templates/Auth';
import { SignupScreen } from 'components/screens/Signup';

export function SignupPage(): ReactElement {
  return (
    <AuthTemplate page="signup">
      <SignupScreen />
    </AuthTemplate>
  );
}
