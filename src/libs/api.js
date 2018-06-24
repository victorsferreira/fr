import axios from 'axios';
import config from '../config';

export const post = (url, data) => {
    return axios.post(config.server+url, data);
}

export const get = (url, data) => {
    return axios.get(config.server+url, data);
}