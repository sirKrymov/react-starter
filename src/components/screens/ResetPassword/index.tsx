import React, { useState } from 'react';

import { observer } from 'mobx-react-lite';

import { ResetPasswordForm } from './ResetPasswordForm';
import { FormSuccessBlock } from 'components/view/compound/Form';

import { useStores } from 'hooks/useStores';

import urls from 'constants/urls';

import { IResetPasswordRequest } from 'types/auth.interface';

export const ResetPasswordScreen = observer(() => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const { appStore } = useStores();
  const { resetPassword, fetching } = appStore;

  const submitHandler = (values: IResetPasswordRequest): void => {
    resetPassword(
      { ...values },
      () => setSuccess(true),
      res => setError(res.message)
    );
  };

  return (
    <>
      {success ? (
        <FormSuccessBlock
          text="Email sended successfully"
          backLink={urls.auth.signin}
        />
      ) : (
        <ResetPasswordForm
          submitFetching={fetching}
          onSubmit={submitHandler}
          error={error}
        />
      )}
    </>
  );
});
