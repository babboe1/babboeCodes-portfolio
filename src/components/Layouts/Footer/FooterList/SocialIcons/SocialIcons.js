import React from 'react';
import Github from '../../../../../assets/icons/github.svg';
import LinkedIn from '../../../../../assets/icons/linkedIn.svg';
import Twitter from '../../../../../assets/icons/twitter.svg';
import Whatsapp from '../../../../../assets/icons/whatsapp.svg';
import SocialIcon from './SocialIcon';
import './SocialIcons.css';

const SocialIcons = () => {
   const mediaIconData = [
      {
         image: Github,
         href: 'https://github.com/babboe1',
      },
      {
         image: LinkedIn,
         href: 'https://www.linkedin.com/in/abiola-ayodele/',
      },
      {
         image: Twitter,
         href: 'https://twitter.com/ausstinab',
      },
      {
         image: Whatsapp,
         href: 'https://wa.me/2349012207356?text=Hello,%20I%20would%20like%20to%20be%20your%20friend!!',
      },
   ];
   const mediaIcons = mediaIconData.map((icon, idx) => (
      <SocialIcon key={idx} image={icon.image} href={icon.href} />
   ));

   return <div className="social-media">{mediaIcons}</div>;
};

export default SocialIcons;
