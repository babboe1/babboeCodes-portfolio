import axios from 'axios';
import React, { useState } from 'react';
import useFetch from '../../../Hooks/useFetch';
import repos from '../../Packages/Axios/Axios';
import AxiosContext from './AxiosContext';

const AxiosProvider = ({ children }) => {
   const userData = useFetch(axios)[0];
   const userRepos = useFetch(repos)[0];
   const errorMsg = useFetch(repos)[1];

   const [readme, setReadme] = useState('');

   const value = {
      userData,
      userRepos,
      errorMsg,
      readme,
      setReadme,
   };

   return (
      <AxiosContext.Provider value={value}>{children}</AxiosContext.Provider>
   );
};

export default AxiosProvider;
