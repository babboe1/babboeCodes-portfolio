import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Modal from '../Modals/Modal/Modal';
import Gratitude from './Footer/Gratitude/Gratitude';

const Layouts = ({ children }) => {
   return (
      <>
         <Header />
         <main id="main">
            {children}
            <Modal>
               <Gratitude />
            </Modal>
         </main>
         <Footer />
      </>
   );
};

export default Layouts;
