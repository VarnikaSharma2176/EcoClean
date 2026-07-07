import api from "../api/axios";

export const getDashboardStats = () => {
  return api.get("/admin/dashboard");
};

export const getUsers = () => {
  return api.get("/admin/users");
};

export const getPickups = () => {
  return api.get("/admin/pickups");
};