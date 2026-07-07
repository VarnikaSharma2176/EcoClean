import api from "../api/axios";

export const createPickup = (data) => {
  return api.post("/pickups", data);
};

export const getMyPickups = () => {
  return api.get("/pickups/my");
};

export const getPickup = (id) => {
  return api.get(`/pickups/${id}`);
};