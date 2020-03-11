import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
// /////////////////////////////////////////

export const Portal = ({ children }) => {
  let modalRoot = document.getElementById('modal');

  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal');
    document.body.appendChild(modalRoot);
  }

  const modalElement = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(modalElement);
    return () => modalRoot.removeChild(modalElement);
  });

  return createPortal(children, modalElement);
};

const useModal = () => {
  const [open, onOpenModal] = useState(false);
  const [close, onCloseModal] = useState(false);

  const openModal = () => {
    onOpenModal(true);
  };

  const closeModal = () => {
    onCloseModal(true);
    onOpenModal(false);
  };

  return { open, close, openModal, closeModal };
};

export default useModal;
