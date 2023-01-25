import React, { useContext } from 'react';
import ThemeContext from '../../../../Store/ThemeContext/ThemeContext';
import './AboutSection.css';
import displayPicture from '../../../../../assets/profile-preview.png';
import AboutParagraph from './AboutParagraph/AboutParagraph';

const AboutSection = () => {
   const { theme } = useContext(ThemeContext);

   return (
      <section className={`about-section ${theme}`}>
         <div className="about-section--main">
            <div className="about-section__container desktop">
               <h2 className="about-section__title">About me</h2>
               <p className="about-section__text">
                  <span className="about-section__text-text">
                     <span className="about-section__text-text--main">
                        Hi THere 👋, I'm
                     </span>
                     <br />
                     <span className="about-section__text-text--sub">
                        ABIOLA AYODELE
                     </span>
                  </span>
               </p>
               <p className="about-section__text__paragraph">
                  SOFTWARE ENGINEER <br />
                  + <br />
                  WEB DEVELOPER
               </p>
            </div>
            {/* <!-- about image container --> */}
            <div id="about-img-id" className="about-image">
               <img
                  src={displayPicture}
                  alt="about"
                  className="about-image__image"
               />
            </div>
         </div>
         {/* <!-- about section description container --> */}
         <div className="about-section__content">
            <div className="about-section__content-main">
               <div className="about-section__container mobile">
                  <h2 className="about-section__title">About me</h2>
                  <p className="about-section__text">
                     <span className="about-section__text-text">
                        <span className="about-section__text-text--main">
                           Hi THere 👋, I'm
                        </span>
                        <br />
                        <span className="about-section__text-text--sub">
                           ABIOLA AYODELE
                        </span>
                     </span>
                  </p>
                  <p className="about-section__text__paragraph">
                     SOFTWARE ENGINEER <br />
                     + <br />
                     WEB DEVELOPER
                  </p>
               </div>
               {/* <!-- about section paragraph text --> */}
               <AboutParagraph />
            </div>

            {/* <!-- button to download cv --> */}
            <div className="about-contact-btn">
               <a
                  href="https://drive.google.com/uc?id=1Fe9mLqShw7i2NtJb0QoVZR0WX2f8fr6A&export=download"
                  className="contact-btn-link"
               >
                  Download CV 📄
               </a>
            </div>
         </div>
      </section>
   );
};

export default AboutSection;
