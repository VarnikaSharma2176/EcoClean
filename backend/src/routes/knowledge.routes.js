import express from "express";
import {
  getArticles,
  getFAQs,
} from "../controllers/knowledge.controller.js";

const router = express.Router();

router.get("/articles", getArticles);

router.get("/faqs", getFAQs);

export default router;