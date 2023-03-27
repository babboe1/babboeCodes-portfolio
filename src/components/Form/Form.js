import React from 'react';
import Button from '../Button/Button';
import './Form.css'

const Form = (props) => {
   return (
      <form
         ref={props.formRef}
         className={props.formClassProp}
         action="https://formsubmit.co/babboecodes@gmail.com"
         method="POST"
      >
         {props.children}
         <div className="contact-button">
            <Button
               refs={props.refBtn}
               id={props.id}
               classProp={props.classProp}
               disable={ props.disable }
               click={props.click}
            >
               {props.submitText}
            </Button>
         </div>
      </form>
   );
};

export default Form;