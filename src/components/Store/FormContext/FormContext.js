import React from 'react';

const FormContext = React.createContext( {
   submitForm: false,
   setSubmitForm: () => { },
   submitFormHandler: () => { },
} );

export default FormContext;