import React from 'react';
import PaginatedPages from '../../../Packages/Paginate/PaginatedPages';
import MessageSection from '../../../Utility/MessageSection/MessageSection';
import SectionTitle from '../../../Utility/SectionTitle/SectionTitle';
import SearchBar from './Search/SearchBar';

const Works = () => {
   return (
      <>
         <SectionTitle page="WORKS" title="My Awesome Projects" />
         <SearchBar />
         <PaginatedPages itemsPerPage={6} />
         <MessageSection />
      </>
   );
};

export default Works;
