import React from 'react';
import maleCartoon from '../../../../../../assets/mobile/leGNIwyP_male_2_cartoon20.png';
import interior from '../../../../../../assets/mobile/interior.jpg';
import loopstudio from '../../../../../../assets/mobile/loopstudio.jpg';
import crowdfund from '../../../../../../assets/mobile/crowdfund.jpg';
import foodApp from '../../../../../../assets/mobile/mobile-preview.png';
import ProjectItem from './projectItem/ProjectItem';

const ProjectList = () => {
   const projectData = [
      {
         id: 1,
         title: 'Interior Design Landing PageProject 1',
         description: `This is Shady-Rymes, an Interior design Landing page that displays a collection of carpentry works used for interiors designs.  Users can browse through to pick a design of their choice.   This webpage also packs quite a number of features that makes the user experience awesome </p>`,
         preview: interior,
         href: 'https://interior-design-landing-page.netlify.app/',
      },
      {
         id: 2,
         title: 'Loopstudio Landing Page',
         description: `This is a solution to the Loopstudios landing page challenge on Frontend Mentor.This webpage is a landing page of a studio that gives users immersive experience in Interactive VR.   Built with wonderful animation that immerses the user and serve is purpose as a center of attraction.`,
         preview: loopstudio,
         href: 'https://loopstudio-landings-page.netlify.app/',
      },
      {
         id: 3,
         title: 'Burger Builder',
         description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
         preview: crowdfund,
         href: 'https://app-burgers-builder.netlify.app/',
      },
      {
         id: 4,
         title: 'Crowdfunding Product page',
         description: `This is a client-side crowdfunding Landing page. A solution to the Crowdfunding product page challenge on Frontend Mentor. This webpage was designed to seek funding for a bamboo monitor riser project.  It was built with quite a lot of features that makes it very interactive and serves its purpose for crowdfunding.`,
         preview: crowdfund,
         href: ' https://babboe1-crowdfunding-product-page.netlify.app/ ',
      },
      {
         id: 5,
         title: 'Food Order App',
         description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
         preview: foodApp,
         href: ' https://foood-order-app.netlify.app/',
      },
      {
         id: 6,
         title: 'Zuri Website',
         description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
         preview: interior,
         href: 'https://babboe1.github.io/Zuri-Website/  ',
      },
   ];

   //map through the projectData array and return the projectItem component with props
   const projectList = projectData.map((project) => (
      <ProjectItem
         key={project.id}
         id={project.id}
         title={project.title}
         description={project.description}
         preview={project.preview}
         href={project.href}
      />
   ));

   return (
      <>
         <div className="project-section__sample">
            {projectList}
            <div className="cartoon-pic">
               <img src={maleCartoon} alt="male cartoon" />
            </div>
         </div>
      </>
   );
};

export default ProjectList;
