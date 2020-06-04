// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import { AuthTemplate } from 'components/view/templates/Auth';
import { SigninScreen } from 'components/screens/Signin';

export function SigninPage(): ReactElement {
  return (
    <AuthTemplate page="signin">
      <SigninScreen />
    </AuthTemplate>
  );
}
