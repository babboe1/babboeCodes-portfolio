import React from 'react';
import { useState } from 'react';
import ModalContext from './ModalContext';

const ModalProvider = ({ children }) => {
   const [showModal, setShowModal] = useState(false);
   const [showBackdrop, setShowBackdrop] = useState(false);
   const [menuModal, setMenuModal] = useState(false);

   const showBackdropHandler = () => {
      setShowBackdrop(true);
      document.body.classList.add('StopScroll');
   };
   const hideBackdropHandler = () => {
      setShowBackdrop(false);
      document.body.classList.remove('StopScroll');
   };

   const showModalHandler = () => {
      setShowModal(true);
      showBackdropHandler();
   };

   const hideModalHandler = () => {
      setShowModal(false);
      hideBackdropHandler();
   };

   const showMenuModal = () => {
      setMenuModal(!menuModal);

      if (!menuModal) {
         showBackdropHandler();
      } else {
         hideBackdropHandler();
      }
   };

   const removeMenuModal = () => {
      setMenuModal(false);
      hideBackdropHandler();
   };

   const removeBackDrop = (validate, submit, formFn) => {
      hideModalHandler();
      removeMenuModal();
      if (validate & submit) {
         formFn();
      }
   };

   const value = {
      showModal,
      setShowModal,
      showModalHandler,
      hideModalHandler,
      menuModal,
      showMenuModal,
      removeMenuModal,
      removeBackDrop,
      showBackdrop,
      showBackdropHandler,
   };

   return (
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
   );
};

export default ModalProvider;
