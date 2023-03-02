import React, { useRef } from 'react';


const TextInput = (props) => {
   const textInputRef = useRef(null);
   let pattern;

   switch (props.type) {
      case 'text':
         pattern = `[a-zA-Z'-'\\s]*`;
         break;
      case 'email':
         pattern = `^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$`;
         break;
      default:
         pattern = null;
   }

   return (
         <input
            ref={textInputRef}
            className={props.classProp}
            id={props.id}
            placeholder={props.placeholder}
            name={props.title}
            type={props.type}
            required
            pattern={pattern}
         />
   );
};

export default TextInput;
