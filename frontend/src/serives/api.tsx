import axios from 'axios';
import { TaskDto } from "../dto/task.dto";

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


export const getAllTasks = async () => {
    try {
        return  await api.get('/tasks', buildHeaders());
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
};

export const createTask = async (taskDto: TaskDto) => {
    try {
        return await api.post('/tasks', taskDto, buildHeaders());
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
};

export const updateTask = async (taskDto: TaskDto) => {
    try {
        return await api.patch(`/tasks/${taskDto.id}`, taskDto, buildHeaders());
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
};

export const handleFinishTask = async (taskDto: TaskDto) => {
    try {
        return await api.patch(`/tasks/${taskDto.id}`, { completed: !taskDto.completed }, buildHeaders());
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
};

export const removeTask = async (id: string) => {
    try {
        return await api.delete(`/tasks/${id}`, buildHeaders());
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
};

function buildHeaders(): {} {
    const accessToken = localStorage.getItem('user-token') || '';
    return {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }
}