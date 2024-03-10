import { baseAPI } from "../config/axios";

export const createTask = async (payload) => {
    const response = await baseAPI.post(`/tasks`, payload);
    return response;
}