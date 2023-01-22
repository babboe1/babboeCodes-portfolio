import React from 'react';
import { Link } from 'react-router-dom';
import "./MyLogo.css"


const MyLogo = ({Logo}) => {
   return (
      <div className="image-logo">
         <Link to={'/'}>
            <img src={Logo} alt="Logo" className="image-logo__image" />
         </Link>
      </div>
   );
};

export default MyLogo;