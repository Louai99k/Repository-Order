import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com/search/repositories?q=created:>2020-12-07&sort=stars&order=desc'
});

export default instance;