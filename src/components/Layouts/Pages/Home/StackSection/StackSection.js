import React, { useContext } from 'react';
import ThemeContext from '../../../../Store/ThemeContext/ThemeContext';
import Current from './Current/Current';
import Learning from './Learning/Learning';
import './StackSection.css';

const StackSection = () => {
   const { theme } = useContext(ThemeContext);

   return (
      <section className="stack-section">
         <h2 className="stack-section--title">Technical Skills</h2>
         <Current theme={theme} />
         <Learning theme={theme} />
      </section>
   );
};

export default StackSection;
