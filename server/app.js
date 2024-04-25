import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

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
  .connect('mongodb+srv://mustafa1:80808080@cluster0.df2mint.mongodb.net/')
  // .connect('mongodb://localhost:27017/lmss')
  .then(() => {
    console.log("🚀 Database connected");
  })
  .catch((err) => {
    console.log(err);
  });




  app.use(express.static('../dist'));

  // Add React Front End Routing
  app.get('*',function (req,res) {
      res.sendFile(path.resolve('../dist'))
  })
  


export default app;
