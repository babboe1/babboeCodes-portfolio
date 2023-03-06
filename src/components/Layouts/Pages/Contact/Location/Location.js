import React from 'react';
import './Location.css';

const Location = () => {
   return (
      <section className="location-section">
         <h2 className="location__title">Locate Me</h2>
         <div className="">
            <div id="map-canvas"></div>
         </div>
      </section>
   );
};

export default Location;
