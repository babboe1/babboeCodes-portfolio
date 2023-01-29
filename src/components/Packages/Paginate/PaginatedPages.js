import React, { useState, useEffect, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import './Paginate.css';
import classes from '../../Layouts/Pages/Works/Repositories/Repos.module.css';
import AxiosContext from '../../Store/API/AxiosContext';
import Spinner from '../../Loader/Spinner/Spinner';
import Repositories from '../../Layouts/Pages/Works/Repositories/Repositories';
import useFetch from '../../../Hooks/useFetch';
import Repos from '../../Packages/Axios/Axios';

const PaginatedPages = ({ itemsPerPage }) => {
   const [currentItems, setCurrentItems] = useState(null);
   const [pageCount, setPageCount] = useState(0);
   const [itemOffset, setItemOffset] = useState(0);
   const context = useContext(AxiosContext);
   const fetchedData = useFetch(Repos)[0];
   const errorMsg = useFetch(Repos)[1];
   const [repoData, setRepoData] = useState(null);

   context.currentPageItems = currentItems;
   context.setCurrentPageItems = setRepoData;
   const repos = repoData ? repoData : '';
   const loader = errorMsg ? (
      <p className={classes.errorMsg}>{errorMsg}</p>
   ) : (
      <Spinner />
   );

   useEffect(() => {
      if (!repoData) setRepoData(fetchedData);

      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(repos.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(repos.length / itemsPerPage));
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [fetchedData, itemOffset, itemsPerPage, repos]);

   // Invoke when user click to request another page.
   const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % repos.length;
      // console.log(
      //    `User requested page number ${event.selected}, which is offset ${newOffset}`,
      // );
      setItemOffset(newOffset);
   };

   return !repoData ? (
      loader
   ) : (
      <>
         <Repositories currentItems={currentItems} />
         <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item prev"
            nextClassName="page-item next"
            breakClassName="page-item"
            activeClassName="active-page"
         />
      </>
   );
};

export default PaginatedPages;
