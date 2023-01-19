import React from 'react';
import MyLogo from '../Header/MyLogo/MyLogo';
import Attribution from './Attribution/Attribution';
import './Footer.css';
import FooterList from './FooterList/FooterList';
import SocialIcons from './FooterList/SocialIcons/SocialIcons';
import Logo from '../../../assets/Logo.png';

const Footer = () => {
   return (
      <footer id="footer">
         <div className="footer-content">
            <MyLogo Logo={Logo} />
            <div className="footer-section-content">
               <FooterList />
               <SocialIcons />
            </div>
         </div>
         <Attribution />
      </footer>
   );
};

export default Footer;
