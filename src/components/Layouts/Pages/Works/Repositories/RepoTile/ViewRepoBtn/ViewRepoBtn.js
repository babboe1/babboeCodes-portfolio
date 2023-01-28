import React from 'react';
import classes from '../RepoTile.module.css';

const ViewRepoBtn = (props) => {
   return (
      <>
         <a
            target="_blank"
            rel="noreferrer"
            href={props.page}
            className={`${classes[props.sty]} ${
               props.page === '' || !props.page ? classes['disable'] : ''
            }`}
            onClick={props.page === '' ? (e) => e.preventDefault() : null}
         >
            {props.image}
            <span>{props.text}</span>
         </a>
      </>
   );
};

export default ViewRepoBtn;
