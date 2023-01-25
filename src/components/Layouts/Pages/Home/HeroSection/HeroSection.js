import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../../../../../assets/icons/memoji_Image.png';
import ThemeContext from '../../../../Store/ThemeContext/ThemeContext';
import './HeroSection.css';

const HeroSection = () => {
   const { theme } = useContext(ThemeContext);

   return (
      <section className={`hero-section ${theme}`}>
         <div className="hero-section__content">
            <h1 className="hero-section__title">
               <span className="hero-section__title-text">
                  <span className="hero-section__title-text--main">
                     Building Digital
                  </span>
                  <span className="hero-section__title-text--sub">
                     Products & brands
                  </span>
               </span>
            </h1>
            <p className="hero-section__text">
               <span className="hero-section__text-text">
                  I am a software engineer + web developer. I specialize in
                  building Responsive Mobile & web applications, Front-end
                  Development using HTML, CSS, JavaScript, React and more...
               </span>
            </p>
            <div className="contact-btn">
               <Link to={'/contact'} className="contact-btn-link" role="button">
                  Let's talk👋
               </Link>
            </div>
         </div>
         <div className="hero-image">
            <img src={HeroImage} alt="display" className="hero-image__image" />
         </div>
      </section>
   );
};

export default HeroSection;
