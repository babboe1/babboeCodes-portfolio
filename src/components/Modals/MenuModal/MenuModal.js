import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Context from '../../Store/ModalContext/ModalContext';
import classes from './MenuModal.module.css';

const MenuModal = ({ children }) => {
   const context = useContext(Context);

   const holder = (
      <div
         className={classes['Modal']}
         style={{
            position: 'fixed',
            top: '0',
            right: '0',
            transform: context.menuModal
               ? 'translateY(70px)'
               : 'translateY(-100%)',
            opacity: context.menuModal ? 1 : 0,
            zIndex: context.menuModal ? 10 : -10,
            pointerEvents: context.menuModal ? 'all' : 'none',
         }}
      >
         {children}
      </div>
   );

   return ReactDOM.createPortal(holder, document.getElementById('modal-root'));
};

export default MenuModal;
