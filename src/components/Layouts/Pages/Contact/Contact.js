import React from 'react';
import MessageSection from '../../../Utility/MessageSection/MessageSection';
import SectionTitle from '../../../Utility/SectionTitle/SectionTitle';
import phoneIcon from '../../../../assets/icons/contact.svg';
import Form from '../../../Form/Form';
import TextInput from '../../../form-control/text-input/TextInput';
import './Contact.css'
import Location from './Location/Location';

const Contact = () => {
   return (
      <>
         <SectionTitle page="CONTACT" title="Reach Out To Me" />
         <section className="main-section--content">
            <div className="main-section__main">
               <a href="tel: +2349012207356" className="">
                  <img src={phoneIcon} alt="phone" />
               </a>
               <h3 className="main-section__main--heading">Contact me at</h3>
               <p className="main-section__main--paragraph">
                  <a href="tel: +2349012207356">+2349012207356</a>
               </p>
            </div>

            <Form submitText="Let's talk👋">
               <TextInput id='full-name' type="text" title="full-name" placeholder="Your Name" />
               <TextInput id="email-tag" type="email" placeholder="username@example.com" />
               <textarea
						name="user-message"
						id="user-message"
						cols="30"
						rows="10"
						placeholder="Enter your message"
						required
					/>
            </Form>
         </section>
            <Location />
         <MessageSection />
      </>
   );
};

export default Contact;
