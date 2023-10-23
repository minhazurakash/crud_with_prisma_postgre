import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router
  .get("/", PostController.getPosts)
  .get("/:id", PostController.getSinglePost)
  .post("/create", PostController.createPost)
  .patch("/:id", PostController.updatePost);

export const PostRoutes = router;
