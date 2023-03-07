import React, { useContext } from 'react';
import ModalContext from '../../../../Store/ModalContext/ModalContext';
import Backdrop from '../../../../Modals/Backdrop/Backdrop';

import './DrawerToggle.css';

const DrawerToggle = (props) => {
   const { menuModal, showMenuModal } =
      useContext(ModalContext);
   const backdrop = menuModal ? <Backdrop /> : null;
   return (
      <div className={`DrawerToggle ${menuModal}`} onClick={showMenuModal}>
         <div className="line1"></div>
         <div className="line2"></div>
         <div className="line3"></div>
         {backdrop}
      </div>
   );
};

export default DrawerToggle;
