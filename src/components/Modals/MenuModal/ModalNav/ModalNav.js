import React from 'react';
import menuPic from '../../../../assets/mobile/menu-pic.png';
import NavItem from '../../../Layouts/Header/Nav/NavItems/NavItem/NavItem';
import './ModalNav.css';

const ModalNav = () => {
   return (
      <div className="menu-opt">
         <ul className="ModalList">
            <NavItem path="/" item="Home" />
            <NavItem path="/works" item="Works" />
            <NavItem path="/contact" item="Contact" />
         </ul>
         <a href="#about-img-id" className="menu-pic">
            <img src={menuPic} alt="menu logo" />
         </a>
      </div>
   );
};

export default ModalNav;
