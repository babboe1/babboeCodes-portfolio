import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Image from '../../../../../Utility/Image/Image';
import classes from './Repo.module.css';
import githubImage from '../../../../../../assets/icons/github.svg';
import RepoTile from '../RepoTile/RepoTile';
import ViewRepoBtn from '../RepoTile/ViewRepoBtn/ViewRepoBtn';
import ReadmeLinkBtn from '../RepoTile/ReadmeLinkBtn/ReadmeLinkBtn';
import Repos from '../../../../../Packages/Axios/Axios';
import Spinner from '../../../../../Loader/Spinner/Spinner';
import useFetch from '../../../../../../Hooks/useFetch';

const Repo = (props) => {
   const { repoName } = useParams();
   const [load, setLoad] = useState(false);

   const repos = useFetch(Repos)[0];
   let repo = repos ? repos.filter((item) => item.name === repoName) : '';

   useEffect(() => {
      if (repos) {
         setLoad(true);
      }
   }, [repos]);

   return load ? (
      <div className={classes['repositories']}>
         <Link to="/works" className={classes['myButton']}>
            ↩ Go Back
         </Link>
         <RepoTile
            name={repo ? repo[0].name : ''}
            about={repo ? repo[0].description : ''}
         >
            <ViewRepoBtn
               sty="flip-card__action"
               text="Live Link"
               page={repo ? repo[0].homepage : ''}
            />
            <ViewRepoBtn
               sty="project-tile__link"
               image={
                  <Image
                     src={githubImage}
                     radius="50%"
                     maxWidth="30px"
                     alt="github icon"
                  />
               }
               text="Github"
               page={repo ? repo[0].url : ''}
            />
            <ReadmeLinkBtn
               port={props.port}
               setPort={props.setPort}
               act="README.md"
               name="readme"
            />
         </RepoTile>
         <Outlet />
         <div id="readme" className={classes['readmeBox']}></div>
      </div>
   ) : (
      <Spinner />
   );
};

export default Repo;
