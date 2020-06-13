import { useState } from 'react';

export const useModal = (): Record<string, any> => {
  const [modal, handleModalToggle] = useState();

  return {
    handleModalToggle,
    modal
  };
};
