import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 9100;

app.use(express.json());
app.use(cors());

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}...`);
  });
};

startServer();

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("🚀 Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

export default app;
