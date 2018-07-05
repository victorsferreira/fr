import axios from 'axios';
import config from '../config';
import { getToken } from '../redux/store';
import { resolve } from 'path';

export const post = (url, data, headers) => {
    headers = resolveHeaders(headers);
    return axios.post(config.server + url, data, { headers });
};

export const get = (url, headers) => {
    headers = resolveHeaders(headers);    
    return axios.get(config.server + url, { headers });
};

export const createFormData = (data) => { 
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
    });

    return formData;
};

function resolveHeaders(headers = {}){
    const token = getToken();

    if (token) headers['Authorization'] = `Bearer ${token}`;
    if (!('Content-Type' in headers)) headers['Content-Type'] = 'application/json';
    
    return headers;
}