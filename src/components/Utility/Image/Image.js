import React from 'react';


const Image = ( props ) => {
   const style = {
      width: '100%',
      maxWidth: props.maxWidth,
      borderRadius: props.radius
   }

   const img = {
      width: '100%',
      borderRadius: props.radius
   }
   return (
      <div style={ style }>
         <img
            style={img}
            src={props.src}
            alt={props.alt}
         />
      </div>
   );
};

export default Image;