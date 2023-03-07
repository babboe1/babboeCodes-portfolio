import { useState } from 'react';

const useFetch = (instance) => {
   const [ data, setData ] = useState( null );
   const [errorMsg, setErrorMsg] = useState('');
   
   const fetchData = () => {
      if(!data) {
         instance.get('')
            .then((res) => {
               setData( res.data );
               // console.log(res.data);
            })
            .catch((error) => {
               console.log( error.message );
               setErrorMsg(error.message );
            } );
         }
      }
      fetchData();
   return [data, errorMsg];
};

export default useFetch;