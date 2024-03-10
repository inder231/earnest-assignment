import { baseAPI } from "../config/axios";

export const changeCompleteStatus = async (id, currentStatus) => {
    const response = await baseAPI.patch(`/tasks/${id}`, { completed: !currentStatus });
    return response;
}