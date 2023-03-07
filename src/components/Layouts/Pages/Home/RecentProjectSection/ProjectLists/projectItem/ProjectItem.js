import React from 'react';
import './ProjectItem.css';

const ProjectItem = ({ id, title, description, preview, href }) => {
   return (
      <div className={`flip-card box${id}`}>
         <div className="flip-card-inner">
            {/* <!-- flip card front side container --> */}
            <div className="flip-card-front side">
               <div className="blur bg-2"></div>
               <div className="flip-card__content">
                  <div className="flip-card__image-box">
                     <img
                        src={preview}
                        alt="project"
                        className="flip-card__image"
                     />
                  </div>
               </div>
            </div>

            {/* <!-- flip card back side container --> */}
            <div className="flip-card-back side">
               <div className="blur"></div>
               <div className="flip-card__content">
                  <h3 className="flip-card__title">
                     {title}
                  </h3>
                  <p className="flip-card__text">
                     {description}
                  </p>
                  <a
                     rel="noreferrer"
                     target="_blank"
                     className="flip-card__action"
                     href={href}
                  >
                     View Project
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProjectItem;
