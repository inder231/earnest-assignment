import { baseAPI } from "../config/axios";

export const deleteTask = async (id,) => {
    const response = await baseAPI.delete(`/tasks/${id}`);
    return response;
}