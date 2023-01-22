import React, { useContext }  from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.css';
import Context from '../../../../../Store/ModalContext/ModalContext';

const NavItem = ( { path, item, magicLine,  } ) => {
   const {removeBackDrop} = useContext(Context);
   
   return (
      <li className='nav-bar__item' onMouseOver={magicLine} onClick={removeBackDrop}>
         <NavLink className='nav-bar__link ' to={path}>
            {item}
         </NavLink>
      </li>
   );
};

export default NavItem;