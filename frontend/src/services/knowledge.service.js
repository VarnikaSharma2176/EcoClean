import api from "../api/axios";

export const getArticles = () => {
  return api.get("/knowledge/articles");
};

export const getFAQs = () => {
  return api.get("/knowledge/faqs");
};