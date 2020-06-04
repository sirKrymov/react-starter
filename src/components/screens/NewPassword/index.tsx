import React, { useState } from 'react';

import { observer } from 'mobx-react-lite';

import { NewPasswordForm } from './NewPasswordForm';

import { useStores } from 'hooks/useStores';

import { INewPasswordRequest } from 'types/auth.interface';

interface IProps {
  token?: string;
}

export const NewPasswordScreen = observer(({ token }: IProps) => {
  const [isSuccess, setSuccess] = useState(false);
  const { appStore } = useStores();
  const { newPassword, fetching } = appStore;

  const submitHandler = (values: INewPasswordRequest): void => {
    if (token) {
      newPassword(
        { ...values, token },
        () => setSuccess(true),
        res => console.log(res.message)
      );
    }
  };

  return (
    <>
      {!isSuccess ? (
        <NewPasswordForm submitFetching={fetching} onSubmit={submitHandler} />
      ) : (
        <div>
          <p>Success password change</p>
        </div>
      )}
    </>
  );
});
