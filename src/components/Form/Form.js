import React from 'react';
import Button from '../Button/Button';
import './Form.css'

const Form = (props) => {
   return (
      <form className='contact-form-action'>
         { props.children }
         <div className="contact-button">
            <Button classProp="contact-button-link">
               {props.submitText}
            </Button>
         </div>
      </form>
   );
};

export default Form;