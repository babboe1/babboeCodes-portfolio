import React from 'react';
import AboutSection from './AboutSection/AboutSection';
import HeroSection from './HeroSection/HeroSection';
import RecentProject from './RecentProjectSection/RecentProject';
import ServiceSection from './ServiceSection/ServiceSection';
import StackSection from './StackSection/StackSection';
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
      </>
   );
};

export default Home;
