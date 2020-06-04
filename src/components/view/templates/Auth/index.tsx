// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactNode, ReactElement } from 'react';

import { AuthHeader } from './AuthHeader';

import './styles.scss';

interface IProps {
  children: ReactNode;
  page?: 'signin' | 'signup' | 'resetPassword' | 'newPassword' | 'verify-email';
}

export function AuthTemplate({ children, page }: IProps): ReactElement {
  return (
    <div className="auth-template">
      <AuthHeader page={page} />

      <main>{children}</main>
    </div>
  );
}
