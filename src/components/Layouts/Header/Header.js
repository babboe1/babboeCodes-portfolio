import React from 'react';
import './Header.css';
import Logo from '../../../assets/Logo.png';
import Nav from './Nav/Nav';
import MenuModal from '../../Modals/MenuModal/MenuModal';
import ModalNav from '../../Modals/MenuModal/ModalNav/ModalNav';
import ModeToggle from './Nav/modeToggle/ModeToggle';
import MyLogo from './MyLogo/MyLogo';

const Header = () => {
   return (
      <header id="header">
         <MyLogo Logo={Logo} />
         <Nav />
         <ModeToggle />
         <MenuModal>
            <ModalNav />
         </MenuModal>
      </header>
   );
};

export default Header;
