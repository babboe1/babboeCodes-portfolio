import React, { useRef, useContext } from 'react';
import FormContext from '../../Store/FormContext/FormContext';
import cartoon from '../../../assets/mobile/cartoon-pic2.png';
import './messageSection.css';

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
            <form
               ref={formRef}
               className="message-section--form"
               action="https://formsubmit.co/babboecodes@gmail.com"
               method="POST"
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
               {/* <!-- submit button --> */}
               <button
                  ref={submitBtn}
                  id="submitBtn"
                  className={`${validate}`}
                  disabled={!validate ? true : false}
                  onClick={formClickHandler}
               >
                  Be my friend
               </button>
            </form>
         </div>
         <div className="cartoon-pic2">
            <img src={cartoon} alt="cartoon" />
         </div>
      </section>
   );
};

export default MessageSection;
