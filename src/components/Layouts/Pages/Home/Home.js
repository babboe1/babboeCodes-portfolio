import React from 'react';
import Gratitude from '../../Footer/Gratitude/Gratitude';
import AboutSection from './AboutSection/AboutSection';
import HeroSection from './HeroSection/HeroSection';
import RecentProject from './RecentProjectSection/RecentProject';
import ServiceSection from './ServiceSection/ServiceSection';
import StackSection from './StackSection/StackSection';
import Modal from '../../../Modals/Modal/Modal';
import MessageSection from '../../../Utility/MessageSection/MessageSection';

const Home = () => {
   return (
      <>
         <HeroSection />
         <AboutSection />
         <ServiceSection />
         <RecentProject />
         <StackSection />
         <MessageSection />
         <Modal>
            <Gratitude />
         </Modal>
      </>
   );
};

export default Home;
