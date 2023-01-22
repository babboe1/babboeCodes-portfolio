import React, { useContext, useEffect } from 'react';
import ThemeContext from '../../../../Store/ThemeContext/ThemeContext';
import './ModeToggle.css';

const ModeToggle = () => {
   const themeContext = useContext(ThemeContext);
   const styleName = `light-mode ${themeContext.theme}`;

   useEffect(() => {
      if (styleName === 'light-mode false') {
            document.body.classList.add('false');
            document.body.parentElement.classList.add('false');
         }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   const style = {
      animation:
         styleName === 'light-mode false'
            ? 'dark-mode 0.5s ease-in forwards'
            : 'light-mode 0.5s ease-in forwards',
   };
   return (
      <div
         id="light-dark"
         className={ styleName }
         style={style}
         onClick={() => {
            themeContext.toggleThemeHandler();
         }}
      ></div>
   );
};

export default ModeToggle;
