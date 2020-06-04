import { useState, useEffect } from 'react';

export const useModal = () => {
  const [modal, handleModalToggle] = useState();

  useEffect(() => {
    if (modal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.removeAttribute('class');
    }
  });

  return {
    handleModalToggle,
    modal
  };
};
