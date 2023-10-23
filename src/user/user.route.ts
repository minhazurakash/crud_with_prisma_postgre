import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router

  .get("/", UserController.getUsers)
  .get("/:id", UserController.getSingleUser)
  .post("/create", UserController.createUser)
  .post("/profile", UserController.createOrUpdateProfile);

export const UserRoutes = router;
