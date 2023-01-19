import React from 'react';
import FooterItem from './FooterItem';

const FooterList = () => {
   const listData = [
      {
         title: 'Home',
         path: '',
         id: 1,
      },
      {
         title: 'Works',
         path: 'works',
         id: 2,
      },
      {
         title: 'Contact',
         path: 'contact',
         id: 3,
      },
   ];

   const FooterList = listData.map((item) => (
      <FooterItem key={item.id} title={item.title} path={item.path} />
   ));
   return <ul className="footer__list">{FooterList}</ul>;
};

export default FooterList;
