import express from "express";
import { CategoryController } from "./category.controller";

const router = express.Router();

router
  .get("/", CategoryController.getCategories)
  .get("/:id", CategoryController.getSingleCategory)
  .post("/create", CategoryController.createCategory)
  .patch("/:id", CategoryController.updateCategory)
  .delete("/:id", CategoryController.deleteCategory);

export const CategoryRoutes = router;
