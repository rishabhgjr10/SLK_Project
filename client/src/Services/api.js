// src/services/api.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerUser = (userData) => {
    return axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = (userData) => {
    return axios.post(`${API_URL}/auth/login`, userData);
};

export const createDocument = (documentData, token) => {
    return axios.post(`${API_URL}/documents/create`, documentData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const getDocuments = (token) => {
    return axios.get(`${API_URL}/documents`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
