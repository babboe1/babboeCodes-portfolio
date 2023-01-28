import React, { useContext, useRef } from 'react';
import AxiosContext from '../../../../Store/API/AxiosContext';
import ThemeContext from '../../../../Store/ThemeContext/ThemeContext';
import classNames from 'classnames'
import classes from './SearchBar.module.css';

const SearchBar = () => {
   const searchRef = useRef(null);
   const context = useContext(AxiosContext);
   const { userRepos } = useContext(AxiosContext);
   const { theme } = useContext(ThemeContext);
   let newPageItems = [];
   
   const onSearchHandler = ( e ) => {
      e.preventDefault();
      userRepos.forEach((item) => {
         if (
            item.name
               .toLowerCase()
               .includes(`${searchRef.current.value.toLowerCase()}`)
         ) {
            newPageItems.push(item);
         } 
      });
      context.setCurrentPageItems( newPageItems );
      newPageItems = [];
   };

   return (
      <div className={classes['search-bar']}>
         <label
            className={ classNames( classes[ 'label' ], classes[ `${ theme }` ] ) }
            htmlFor="search"
            // style={{ color: theme ? 'black' : '' }}
         >
            {' '}
            Search
         </label>
         <form onSubmit={onSearchHandler} className={classes['search-box']}>
            <input
               id="search-input"
               ref={searchRef}
               type="text"
               placeholder=" "
               className={classes[`${theme}`]}
            />
            <button type="reset"></button>
         </form>
      </div>
   );
};

export default SearchBar;
