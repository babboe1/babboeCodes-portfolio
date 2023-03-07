import React from 'react';
import typescript from '../../../../../../assets/icons/typescript.svg';
import nodejs from '../../../../../../assets/icons/node.svg';
import jest from '../../../../../../assets/icons/jest.svg';
import mongodb from '../../../../../../assets/icons/mongodb.svg';
import StackItem from '../StackItem/StackItem';

const Learning = ({ theme }) => {
   const stackData = [
      {
         title: 'TypeScript',
         icon: typescript,
      },
      {
         title: 'Nodejs',
         icon: nodejs,
      },
      {
         title: 'jest',
         icon: jest,
      },
      {
         title: 'MongoDB',
         icon: mongodb,
      },
   ];
   const currentStack = stackData.map((item, index) => {
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
         <h3 className={`gap3 ${theme}`}>LEARNING:</h3>
         <div className="stack-section__content--list">{currentStack}</div>
      </div>
   );
};

export default Learning;
