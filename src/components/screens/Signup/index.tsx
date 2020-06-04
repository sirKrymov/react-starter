import React, { useState } from 'react';

import { observer } from 'mobx-react-lite';

import { SignupForm } from './SignupForm';

import { useStores } from 'hooks/useStores';

import { ISignupRequest } from 'types/auth.interface';

export const SignupScreen = observer(() => {
  const [isSuccess, setSuccess] = useState(false);
  const { appStore } = useStores();
  const { fetching, signup } = appStore;

  const submitHandler = (values: ISignupRequest): void => {
    signup(
      { ...values },
      () => setSuccess(true),
      res => console.log(res.message)
    );
  };

  return (
    <>
      {!isSuccess ? (
        <SignupForm submitFetching={fetching} onSubmit={submitHandler} />
      ) : (
        <div>
          <p>Success sign up</p>
        </div>
      )}
    </>
  );
});
