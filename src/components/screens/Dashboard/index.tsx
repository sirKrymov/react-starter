import React from 'react';

import { observer } from 'mobx-react-lite';
import { nanoid } from 'nanoid';

import { Modal } from 'components/view/compound/Modal';

import { useStores } from 'hooks/useStores';

export const DashboardScreen = observer(() => {
  const { dashboardStore, modalStore, toastsStore } = useStores();

  const { increaseCount, decreaseCount, doubleCount, count } = dashboardStore;
  const { modalName, openModal, closeModal } = modalStore;
  const { addToast } = toastsStore;

  return (
    <>
      <div>
        <p>Test</p>
        <p>{count}</p>

        <p>{doubleCount}</p>

        <button onClick={() => increaseCount()}>Increase</button>
        <button onClick={() => decreaseCount()}>Decrease</button>

        <button onClick={() => openModal('dashboardModal')}>Modal</button>

        <button onClick={() => addToast({ message: nanoid() })}>
          Add toast info
        </button>
        <button
          onClick={() =>
            addToast({ message: nanoid(), type: 'warning', autohide: false })
          }
        >
          Add toast warning
        </button>
        <button
          onClick={() => addToast({ message: nanoid(), type: 'success' })}
        >
          Add toast success
        </button>
        <button
          onClick={() =>
            addToast({ message: nanoid(), type: 'error', autohide: false })
          }
        >
          Add toast error
        </button>
      </div>

      <Modal
        onClose={() => closeModal()}
        title="Modal title"
        open={modalName === 'dashboardModal'}
      >
        Test
      </Modal>
    </>
  );
});
