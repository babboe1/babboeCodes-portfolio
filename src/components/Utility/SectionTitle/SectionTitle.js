import React from 'react';
import './SectionTitle.css'
import cartoon from '../../../assets/mobile/leGNIwyP_male_2_cartoon20.png';

const SectionTitle = ({page, title}) => {
   return (
      <section className="main-section--title">
         <h1 className="section-h1">
            <span className="main-section--title__sub">
               <span className="home-text">HOME</span> / {page}
            </span>
            <div className="main-section--title__main">{ title }</div>
         </h1>

         <div className="cartoon-pic">
            <img
               src={cartoon}
               alt="cartoon"
            />
         </div>
      </section>
   );
};

export default SectionTitle;