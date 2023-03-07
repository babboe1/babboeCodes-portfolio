import repos from '../components/Packages/Axios/Axios';

export const magicLine = (value) => {
   const LINE = document.querySelector('.nav-bar__list--after');
   LINE.className = 'nav-bar__list--after';
   LINE.classList.add(`${value}`);
};

export const windowLoad = (repo, param, data) => {
   window.addEventListener('load', () => {
      repos
         .get('')
         .then((res) => {
            // console.log(res.data, 'repos');
            data = res.data;
            repo = res.data.filter((item) => item.name === param);
         })
         .catch((error) => {
            repo = error.message;
         });
   });
};
