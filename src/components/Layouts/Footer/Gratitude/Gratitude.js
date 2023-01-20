import React, { useContext } from 'react';
import './Gratitude.css';
import minion from '../../../../assets/mobile/thank-you-emoji-16.jpg';
import FormContext from '../../../Store/FormContext/FormContext';
import ModalContext from '../../../Store/ModalContext/ModalContext';
import Backdrop from '../../../Modals/Backdrop/Backdrop';
import Spinner from '../../../Loader/Spinner/Spinner';

const Gratitude = () => {
   const { validate, submitForm, submitFormHandler } = useContext(FormContext);
   const { showModal, removeGratitude, showLoader } = useContext( ModalContext );
   
   const unMountGratitude = () => removeGratitude(validate, submitForm, submitFormHandler)

   const holder =
      validate && showModal ? (
         <div className="gratitude">
            <div className="gratitude__image-box">
               <img src={minion} alt="Logo" className="gratitude__image" />
            </div>
            <p className="gratitude__text">
               Thank you for Sending a message 🙏
               <br />
               we Promise to reach out to you as soon as possible
               <br />
               you will now be redirected to a new page
            </p>
            <div className="gratitude__btn-box">
               <button
                  className="gratitude__button"
                  type="submit"
                  onClick={unMountGratitude}
               >
                  Got It!
               </button>
            </div>
         </div>
      ) : null;
      
   const backdrop =
      validate && showModal ? <Backdrop click={unMountGratitude} /> : null;
   
   const loader = showLoader ? <Spinner /> : holder;
   return (
      <>
         { backdrop }
         {loader}
      </>
   );
};

export default Gratitude;
