import express from "express";
import cors from "cors";
import connectDB from "./config/dbConnection.js";
import { config } from "dotenv";
import errorMiddleware from "./middleware/errorMiddleware.js";

const PORT = process.env.PORT || 5000;
const app = express();
config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//error handler
app.use(errorMiddleware);

// db connection
connectDB();

// server listen
app.listen(PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
