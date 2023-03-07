import React from 'react';
import { Link } from 'react-router-dom';
import './RecentProject.css';
import GithubIcon from '../../../../../assets/icons/github.svg';
import ProjectList from './ProjectLists/ProjectList';

const RecentProject = () => {
   return (
      <section className="project-section">
         {/* <!-- project section header --> */}
         <div className="project-section__content">
            <h2 className="project-section__title">Check out my Recent Projects</h2>
            {/* <!-- container link to project page and github --> */}
            <div className="project-section__nav">
               <div className="project-section__nav__btn">
                  <Link to="/work" className="project-section__btn-link">
                     More works
                  </Link>
               </div>

               <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/babboe1"
                  className="project-section__btn-link__sub"
               >
                  <img
                     src={GithubIcon}
                     alt="Github"
                     className="social-media__image"
                  />
                  <span className="">view on GitHub</span>
               </a>
            </div>
         </div>
         <ProjectList />
      </section>
   );
};

export default RecentProject;
