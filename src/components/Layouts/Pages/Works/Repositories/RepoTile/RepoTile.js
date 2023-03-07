import React from 'react';

import classes from './RepoTile.module.css';

const RepoTile = (props) => {
   return (
      <>
         <div className={classes['project-content']}>
            <div
               className={classes['project-blur']}
            ></div>
            <div className={classes['project-tile']}>
               <h3 className={classes['project-tile__title']}>{props.name}</h3>
               <p className={classes['project-tile__text']}>{props.about}</p>
            </div>
            <div className={classes['project-tile__nav']}>
               {props.children}
            </div>
         </div>
      </>
   );
};

export default RepoTile;
