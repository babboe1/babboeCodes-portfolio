import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layouts = ({ children }) => {
   return (
      <>
         <Header />
         <main id="main">{children}</main>
         <Footer />
      </>
   );
};

export default Layouts;
