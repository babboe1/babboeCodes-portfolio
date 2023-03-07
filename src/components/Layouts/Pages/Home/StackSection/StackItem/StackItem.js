import React from 'react';

const StackItem = ( { title, icon, theme } ) => {
   return (
      <div className="stack-section__content--item">
         <div className="stack-section__content--item--icon">
            <img src={icon} alt="icon" />
         </div>
         <div className="stack-section__content--item--text">
            <h3 className={`${theme}`}>{title}</h3>
         </div>
      </div>
   );
};

export default StackItem;
