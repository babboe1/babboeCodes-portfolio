import React from 'react';
import html from '../../../../../../assets/icons/HTML5.svg';
import css from '../../../../../../assets/icons/CSS.svg';
import tailwind from '../../../../../../assets/icons/tailwind.svg';
import javascript from '../../../../../../assets/icons/javascript.svg';
import react from '../../../../../../assets/icons/react.svg';
import redux from '../../../../../../assets/icons/redux.svg';
import vue from '../../../../../../assets/icons/vue.svg';
import next from '../../../../../../assets/icons/next.svg';
import '../StackSection.css';
import StackItem from '../StackItem/StackItem';

const Current = ({ theme }) => {
   const stackData = [
      {
         title: 'HTML',
         icon: html,
      },
      {
         title: 'CSS',
         icon: css,
      },
      {
         title: 'Tailwind',
         icon: tailwind,
      },
      {
         title: 'JavaScript',
         icon: javascript,
      },
      {
         title: 'React',
         icon: react,
      },
      {
         title: 'Redux',
         icon: redux,
      },
      {
         title: 'Vue',
         icon: vue,
      },
      {
         title: 'Nextjs',
         icon: next,
      },
   ];
   const currentStack = [...stackData].slice(0, 4).map((item, index) => {
      return (
         <StackItem
            theme={theme}
            key={index}
            title={item.title}
            icon={item.icon}
         />
      );
   });
   const currentStack2 = [...stackData].slice(4, 8).map((item, index) => {
      return (
         <StackItem
            theme={theme}
            key={index}
            title={item.title}
            icon={item.icon}
         />
      );
   });

   return (
      <div className="stack-section__content">
         <h3 className={`gap3 ${theme}`}>USING NOW:</h3>
         <div className="stack-section__content--list">{currentStack}</div>
         <div className="stack-section__content--list">{currentStack2}</div>
      </div>
   );
};

export default Current;
