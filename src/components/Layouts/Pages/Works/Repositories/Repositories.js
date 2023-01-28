import React from 'react';
import classes from './Repos.module.css';
import ReadmeLinkBtn from './RepoTile/ReadmeLinkBtn/ReadmeLinkBtn';
import RepoTile from './RepoTile/RepoTile';

const Repositories = ( { currentItems } ) => {
   const repos = currentItems;
   // console.log(repos);

   const repoTiles =
      repos &&
      repos.map((repo, index) => (
         <RepoTile
            name={currentItems[index].name}
            about={currentItems[index].description}
            key={currentItems[index].id}
         >
            <ReadmeLinkBtn name={currentItems[index].name} act="More Info!!!" />
         </RepoTile>
      ));

   return (
      <>
         <div className={classes.test}>
            <section className={classes.repositories}>{repoTiles}</section>
         </div>
      </>
   );
};

export default Repositories;
