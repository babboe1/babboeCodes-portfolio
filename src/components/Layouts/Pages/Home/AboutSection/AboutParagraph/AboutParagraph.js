import React from 'react';

const AboutParagraph = () => {
   return (
      <>
         <p className="about-section__text animate">
            My name is Abiola Ayodele, I'm a first year Frontend Engineering
            student at AltSchool Africa School of Engineering in Lagos, Nigeria.{' '}
            <br />
            I am a software engineer; certified by I4GxZURI and SideHustle in
            web application development. I am adept in HTML5, CSS, JavaScript,
            React.js, and Git. <br /> I have invested 3 years into software
            development and developed technical leadership skills along the way.
         </p>
         <p className="about-section__text animate">
            I have contributed to various Open source projects; <br /> 1
            Open-source library: <br />
            <a
               target="_blank"
               rel="noreferrer"
               href="https://www.npmjs.com/package/should-render"
            >
               <strong>
                  <em>Should-Render</em>
               </strong>
            </a>{' '}
            <br />
            and I am a maintainer for an Open source project: <br />
            <a
               target="_blank"
               rel="noreferrer"
               href="https://github.com/Cloudlordd/Cloudlord-and-pals"
            >
               <strong>
                  <em>Altschool's Student Profile</em>
               </strong>
            </a>
            <br />
            In the space of 3 years, I have built a range of apps from Landing
            pages to e-commerce web applications. I have worked in diverse
            teams; I have led a team.
         </p>
         <p className="about-section__text animate">
            I desire to attain and maintain a high degree of professionalism and
            contribute significantly to organizational growth and development
            through diverse skills while providing innovative solutions capable
            of satisfying and maintaining the corporate interest of my employer
            and customers.
         </p>
      </>
   );
};

export default AboutParagraph;