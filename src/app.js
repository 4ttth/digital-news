import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";

import newsRoutes from "./routes/news.routes.js";

const app = express(); // Allows to accept JSON data in the req.body
const PORT = process.env.PORT;
const HOST = process.env.HOST;
app.use(express.json());

app.use("/api/news", newsRoutes);


app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});