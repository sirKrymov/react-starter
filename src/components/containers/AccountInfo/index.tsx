import React from 'react';

import { observer } from 'mobx-react-lite';

import { AccountInfo } from 'components/view/compound/AccountInfo';

import { useStores } from 'hooks/useStores';

export const AccountInfoContainer = observer(() => {
  const { themeStore, appStore } = useStores();
  const { setTheme, theme } = themeStore;
  const { account, logout } = appStore;

  return (
    <AccountInfo
      setTheme={setTheme}
      account={account}
      logout={logout}
      theme={theme}
    />
  );
});
