import React, { useReducer } from 'react';
import ModalContext from './ModalContext';

const ModalProvider = ({ children }) => {
   const initialState = {
      showModal: false,
      menuModal: false,
      showBackdrop: false,
      loader: false,
   };

   const reducerFn = (state, action) => {
      switch (action.type) {
         case 'SHOW_MODAL':
            return {
               ...state,
               showModal: true,
            };
         case 'HIDE_MODAL':
            return {
               ...state,
               showModal: false,
            };
         case 'SHOW_BACKDROP':
            return {
               ...state,
               showBackdrop: true,
            };
         case 'HIDE_BACKDROP':
            return {
               ...state,
               showBackdrop: false,
            };
         case 'SHOW_MENU_MODAL':
            return {
               ...state,
               menuModal: !state.menuModal,
            };
         case 'HIDE_MENU_MODAL':
            return {
               ...state,
               menuModal: false,
            };
         case 'SHOW_LOADER':
            return {
               ...state,
               loader: true,
            };
         default:
            return state;
      }
   };

   const [modalStates, dispatchFn] = useReducer(reducerFn, initialState);

   const showBackdropHandler = () => {
      dispatchFn({ type: 'SHOW_BACKDROP' });
      document.body.classList.add('StopScroll');
   };
   const hideBackdropHandler = () => {
      dispatchFn({ type: 'HIDE_BACKDROP' });
      document.body.classList.remove('StopScroll');
   };

   const showModalHandler = () => {
      dispatchFn({ type: 'SHOW_MODAL' });
      showBackdropHandler();
   };

   const hideModalHandler = () => {
      dispatchFn({ type: 'HIDE_MODAL' });
      hideBackdropHandler();
   };

   const showMenuModal = () => {
      dispatchFn( { type: 'SHOW_MENU_MODAL' } );
      
      if (modalStates.menuModal) {
         hideBackdropHandler();
      } else {
         showBackdropHandler();
      }
   };

   const removeMenuModal = () => {
      dispatchFn({ type: 'HIDE_MENU_MODAL' });
      hideBackdropHandler();
   };

   const removeBackDrop = () => {
      hideModalHandler();
      removeMenuModal();
   };

   const removeGratitude = (validate, submit, formFn) => {
      if (validate & submit) {
         formFn();
         dispatchFn({ type: 'SHOW_LOADER' });
      }
      // removeBackDrop();
   };

   const value = {
      showModal: modalStates.showModal,
      menuModal: modalStates.menuModal,
      showBackdrop: modalStates.showBackdrop,
      showLoader: modalStates.loader,
      setShowModal: () => {
         dispatchFn({ type: 'SHOW_MODAL' });
      },
      showModalHandler,
      hideModalHandler,
      showMenuModal,
      removeMenuModal,
      removeBackDrop,
      showBackdropHandler,
      removeGratitude,
   };

   return (
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
   );
};

export default ModalProvider;
