import express from 'express';
import mongoose from "mongoose";

import { getNews, createNews, updateNews, deleteNews } from "../controllers/news.controller.js";
import News from '../models/news.model.js';


const router = express.Router();

router.get("/", getNews);

router.post("/", createNews);

router.put("/:id", updateNews);

router.delete("/:id", deleteNews);

export default router;