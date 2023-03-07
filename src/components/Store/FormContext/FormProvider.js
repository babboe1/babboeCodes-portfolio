import React, { useState, useContext, useRef } from 'react';
import ModalContext from '../ModalContext/ModalContext';
import FormContext from './FormContext';

const FormProvider = ( { children } ) => {
   const formRef = useRef( null );
   const msgInput = useRef(null);
   
   const {showModalHandler} = useContext(ModalContext)
   const [ submitForm, setSubmitForm ] = useState( false );
   const [validate, setValidate] = useState(false);
   
   const submitFormHandler = () => {
      formRef.current.requestSubmit();
      msgInput.current.value = '';
   };
   
   const formClickHandler = (e) => {
      e.preventDefault();
      setSubmitForm( true );
      showModalHandler( true );
   }
   
   const onChangeHandler = (e, btn) => {
      if (e.target.value.match(e.target.pattern)) {
         setValidate(true);
      } else {
         setValidate(false);
      }
   }

   const value = {
      submitForm,
      submitFormHandler,
      validate,
      setValidate,
      formClickHandler,
      onChangeHandler,
      formRef,
      msgInput
   };
   return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormProvider;
