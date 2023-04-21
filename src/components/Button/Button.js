import React from 'react';

const Button = (props) => {
   return (
      <button
         ref={props.refs}
         id={props.id}
         className={props.classProp}
         disabled={props.disable}
         onClick={ props.click }
         type-={props.type}
      >
         {props.children}
      </button>
   );
};

export default Button;
