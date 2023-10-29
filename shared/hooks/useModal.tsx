'use client';
import { useState } from 'react';

type ModalReturn = [boolean, () => void, () => void, () => void];

const useModal = (initialState = false): ModalReturn => {
  const [modal, setModal] = useState<boolean>(initialState);

  const openModal = (): void => {
    setModal(true);
  };

  const closeModal = (): void => {
    setModal(false);
  };

  const toggleModal = (): void => {
    setModal((prevModal) => !prevModal);
  };

  return [modal, openModal, closeModal, toggleModal];
};

export default useModal;
