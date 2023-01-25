import React from 'react';
import './ServiceSection.css';
import webDev from '../../../../../assets/icons/webdev.png';
import webDesign from '../../../../../assets/icons/webdesign.png';
import webServices from '../../../../../assets/icons/webservice.png';

const ServiceSection = () => {
   return (
      <section className="service-section">
         <h2 className="service-section--title">What i have to offer!</h2>

         <div className="service-content-grid">
            {/* <!-- service content description --> */}
            <div className="service__content">
               <div className="service-content__image-box">
                  <img className="service-content__img" src={webDesign} alt="" />
               </div>
               <h3 className="service-content__title">Web App Design</h3>
               <p className="service-content__text">
                  I work with certain design tools to create high-fidelity Web
                  application designs and prototypes responsive across all
                  device with. I design accessible and usable web applications
                  which aid business growth.
               </p>
            </div>
            {/* <!-- service content description --> */}
            <div className="service__content">
               <div className="service-content__image-box">
                  <img className="service-content__img" src={webDev} alt="" />
               </div>
               <h3 className="service-content__title">Web App Development</h3>
               <p className="service-content__text">
                  I use latest web technologies and best practices to develop
                  attractive websites which converts visitors to customers. I
                  develop creative and responsive website layouts to ensure a
                  high-quality and functional application.
               </p>
            </div>
            {/* <!-- service content description --> */}
            <div className="service__content">
               <div className="service-content__image-box">
                  <img className="service-content__img" src={webServices} alt="" />
               </div>
               <h3 className="service-content__title">Web App Services</h3>
               <p className="service-content__text">
                  I provide web application maintenance and support services to
                  meet the needs of the client. I have experience in building
                  and maintaining custom web applications for small businesses,
                  mid-sized businesses, and large businesses.
               </p>
            </div>
         </div>
      </section>
   );
};

export default ServiceSection;
