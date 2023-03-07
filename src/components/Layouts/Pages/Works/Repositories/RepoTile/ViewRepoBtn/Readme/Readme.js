import React, { useContext, useEffect } from 'react';
import markdown from '@wcj/markdown-to-html';
import AxiosContext from '../../../../../../../Store/API/AxiosContext';
import { readMe } from '../../../../../../../Packages/Axios/Axios';
import Spinner from '../../../../../../../Loader/Spinner/Spinner';
import { useParams } from 'react-router-dom';

const decode = (str) => {
   return decodeURIComponent(escape(window.atob(str)));
};

const Readme = (props) => {
   const { readme, setReadme } = useContext( AxiosContext );
   const {repoName} = useParams()

   useEffect(() => {
      const body = document.getElementById('readme');
      readMe
         .get(`/${repoName}/contents/README.md`)
         .then((res) => {
            body.innerHTML = markdown( decode( res.data.content ) );
            body.style.width = '100%'
            body.style['overflow-x'] = 'scroll'
            setReadme(res.data.content);
         })
         .catch((error) => {
            // setErrorMsg(error.message);
            console.log(error.message);
         });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [repoName]);

   const readmeText = readme === '' ? <Spinner /> : null;
   return readmeText;
};

export default Readme;
