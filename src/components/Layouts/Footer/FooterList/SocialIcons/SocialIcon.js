import React from 'react';

const SocialIcon = ({ image, href }) => {
   return (
      <a
         target="_blank"
         href={href}
         className="social-media__link"
         rel="noreferrer"
      >
         <img src={image} alt="media icon" className="social-media__image" />
      </a>
   );
};

export default SocialIcon;
