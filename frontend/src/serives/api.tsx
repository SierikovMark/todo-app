import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const api = axios.create({
    baseURL: BASE_URL,
});

export const register = async (userData: any) => {
    try {
        const response = await api.post('/users/', userData);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
};

export const login = async (userData: any) => {
    try {
        const response = await api.post('/auth/login', userData);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
};