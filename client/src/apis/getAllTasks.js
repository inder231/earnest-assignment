import { baseAPI } from "../config/axios";

export const getAllTasks = async () => {
    const response = await baseAPI.get("/tasks");
    return response;
}