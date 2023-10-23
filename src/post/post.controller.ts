import { Request, Response } from "express";
import { PostService } from "./post.service";

const getPosts = async (req: Request, res: Response) => {
  const options = req.query;
  const result = await PostService.getPosts(options);
  res.send({
    success: true,
    message: "Post fetch successful",
    total: result.total,
    data: result.data,
  });
};
const getSinglePost = async (req: Request, res: Response) => {
  const result = await PostService.getSinglePost(Number(req.params.id));
  res.send({
    success: true,
    message: "Post fetch successful",
    data: result,
  });
};

const createPost = async (req: Request, res: Response) => {
  const result = await PostService.createPost(req.body);
  res.send({
    success: true,
    message: "Post fetch successful",
    data: result,
  });
};
const updatePost = async (req: Request, res: Response) => {
  const result = await PostService.updatePost(Number(req.params.id), req.body);
  res.send({
    success: true,
    message: "Post fetch successful",
    data: result,
  });
};

const deletePost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.deletePost(Number(req.params.id));

    res.send({
      success: true,
      message: "user fetched successful",
      data: result,
    });
  } catch (error) {
    res.json(error);
  }
};

export const PostController = {
  getPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
};
