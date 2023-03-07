import React from 'react';
import NavItem from './NavItem/NavItem';
import { magicLine } from '../../../../../container/Container';
import './NavItems.css';
import DrawerToggle from '../DrawerToggle/DrawerToggle';

const NavItems = () => {
   return (
      <>
         <ul className="nav-bar__list">
            <NavItem
               path="/"
               item="Home"
               magicLine={() => magicLine('magic-line-left1')}
            />
            <NavItem
               path="/works"
               item="Works"
               magicLine={() => magicLine('magic-line-left2')}
            />
            <NavItem
               path="/contact"
               item="Contact"
               magicLine={() => magicLine('magic-line-left3')}
            />
         </ul>
         <DrawerToggle />
         <div className="nav-bar__list--after"></div>
      </>
   );
};

export default NavItems;
