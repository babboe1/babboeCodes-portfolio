import React, { useRef, useContext } from 'react';
import FormContext from '../../Store/FormContext/FormContext';
import cartoon from '../../../assets/mobile/cartoon-pic2.png';
import './messageSection.css';
import Form from '../../Form/Form';

const MessageSection = () => {
   const submitBtn = useRef(null);
   const { onChangeHandler, validate, formClickHandler, formRef, msgInput } =
      useContext(FormContext);

   return (
      <section className="message-section">
         <div className="message-section__content">
            <h3 className="message-section--title">
               <label htmlFor="email-id">
                  Let's create something together!
               </label>
            </h3>
            {/* <!-- create form --> */}
            <Form
               formRef={formRef}
               formClassProp="message-section--form"
               refBtn={submitBtn}
               id="submitBtn"
               classProp={`contact-button-link ${validate}`}
               disable={!validate ? true : false}
               click={formClickHandler}
               submitText="Be my friend"
            >
               <input
                  ref={msgInput}
                  type="email"
                  name="email-address"
                  placeholder="Enter your email"
                  id="email-id"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  onChange={(e) => onChangeHandler(e, submitBtn.current)}
                  required
               />
            </Form>
         </div>
         <div className="cartoon-pic2">
            <img src={cartoon} alt="cartoon" />
         </div>
      </section>
   );
};

export default MessageSection;
