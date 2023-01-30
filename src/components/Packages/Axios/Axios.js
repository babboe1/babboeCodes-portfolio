import axios from 'axios';

const repos = axios.create({
   baseURL: 'https://api.github.com/users/babboe1/repos?per_page=100',
});

export const readMe = axios.create({
   baseURL: 'https://api.github.com/repos/babboe1',
});

export default repos;
