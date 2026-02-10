import api from "./api";

export const getAvailableRooms = async () => {
  // later this will hit Python backend
  const response = await api.get("/rooms");
  return response.data;
};
