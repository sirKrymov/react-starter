// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { useEffect, useState, ReactElement } from 'react';

import { NewPasswordScreen } from 'components/screens/NewPassword';
import { AuthTemplate } from 'components/view/templates/Auth';

import urls from 'constants/urls';

import { History } from 'history';

interface IProps {
  history: History;
}

export function NewPasswordPage({ history }: IProps): ReactElement {
  const [token, setToken] = useState('');

  useEffect(() => {
    const token = history.location.pathname.split('/')[3];

    if (token) {
      setToken(token);
    } else {
      history.push(urls.auth.signin);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthTemplate page="newPassword">
      <NewPasswordScreen token={token} />
    </AuthTemplate>
  );
}
