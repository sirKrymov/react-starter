import React from 'react';

import { observer } from 'mobx-react-lite';

import { SigninForm } from './SigninForm';

import { useStores } from 'hooks/useStores';

export const SigninScreen = observer(() => {
  const { appStore } = useStores();
  const { fetching, login } = appStore;

  return <SigninForm submitFetching={fetching} onSubmit={login} />;
});
