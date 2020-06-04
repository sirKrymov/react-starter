import React from 'react';

import { observer } from 'mobx-react-lite';

import { Toasts } from 'components/view/compound/Toasts';

import { useStores } from 'hooks/useStores';

export const ToastsContainer = observer(() => {
  const { toastsStore } = useStores();
  const { removeToast, toasts, state } = toastsStore;

  return toastsStore.toasts ? (
    <Toasts removeToast={removeToast} toasts={toasts} toastsState={state} />
  ) : null;
});
