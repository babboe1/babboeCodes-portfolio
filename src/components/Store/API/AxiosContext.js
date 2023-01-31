import React from 'react';

const AxiosContext = React.createContext({
   userData: [],
   userRepos: [],
   errorMsg: '',
});

export default AxiosContext;
