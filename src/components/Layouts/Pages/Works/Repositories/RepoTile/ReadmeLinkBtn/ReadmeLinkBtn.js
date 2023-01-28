import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../RepoTile.module.css';

const ReadmeLinkBtn = (props) => {
   return (
      <Link to={`${props.name}`} className={classes['flip-card__action']}>
         {props.act}
      </Link>
   );
};

export default ReadmeLinkBtn;
