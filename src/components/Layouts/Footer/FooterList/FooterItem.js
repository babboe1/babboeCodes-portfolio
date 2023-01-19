import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterItem = ({ title, path }) => {
   return (
      <li className="footer-list__item">
         <NavLink to={`/${path}`} className="footer-item__link">
            {title}
         </NavLink>
      </li>
   );
};

export default FooterItem;
