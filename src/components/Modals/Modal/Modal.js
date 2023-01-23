import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import ModalContext from '../../Store/ModalContext/ModalContext';

const Modal = ({ children }) => {
   const { showModal } = useContext(ModalContext);
   const style = {
      transition: '1s',
      position: 'fixed',
      top: '50%',
      left: '50%',
      boxShadow: ' 0 2px 8px rgba(0, 0, 0, 0.26)',
      borderRadius: '10px',
      transform: showModal ? 'translate(-50%, -50%)' : 'translate(-50%, -200%)',
      opacity: showModal ? 1 : 0,
      zIndex: showModal ? 10 : -10,
      pointerEvents: showModal ? 'all' : 'none',
      padding: '2rem 1rem 0',
   };
   return ReactDOM.createPortal(
      <div style={style} className="gratitude">
         {children}
      </div>,
      document.getElementById('modal-root'),
   );
};

export default Modal;
