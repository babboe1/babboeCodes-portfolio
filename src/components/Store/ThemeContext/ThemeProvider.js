import React from 'react';
import { useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }) => {
   const body = document.body;
   let modeValue = window.localStorage.getItem('Theme')
      ? window.localStorage.getItem('Theme')
      : true;
   const [ theme, setTheme ] = useState( modeValue );

   const toggleThemeHandler = () => {
      setTheme( ( prev ) => {
         if (prev) {
            body.classList.add('false');
            body.parentElement.classList.add('false');
         } else {
            body.classList.remove('false');
            body.parentElement.classList.remove('false');
         }
         window.localStorage.setItem('Theme', !prev);
         return !prev;
      });
   };
   const value = {
      theme,
      toggleThemeHandler,
      setTheme,
   };

   return (
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
   );
};

export default ThemeProvider;
