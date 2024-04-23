import express from "express";
import {
  createFood,
  deleteFood,
  getFoods,
  updateFood,
} from "../controllers/foodController.js";

const router = express.Router();

router.get("/", getFoods);
router.post("/create", createFood);
router.put("/update/:id", updateFood);
router.delete("/delete/:id", deleteFood);

export default router;
