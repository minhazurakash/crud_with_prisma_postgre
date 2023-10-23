import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const getCategories = async (req: Request, res: Response) => {
  const result = await CategoryService.getCategories();

  res.send({
    success: true,
    message: "Category fetch successful",
    data: result,
  });
};

const getSingleCategory = async (req: Request, res: Response) => {
  const result = await CategoryService.getSingleCategory(Number(req.params.id));

  res.send({
    success: true,
    message: "Category fetch successful",
    data: result,
  });
};

const createCategory = async (req: Request, res: Response) => {
  const result = await CategoryService.createCategory(req.body);

  res.send({
    success: true,
    message: "Category post successful",
    data: result,
  });
};

const updateCategory = async (req: Request, res: Response) => {
  const result = await CategoryService.updateCategory(
    Number(req.params.id),
    req.body
  );

  res.send({
    success: true,
    message: "Category update successful",
    data: result,
  });
};

export const CategoryController = {
  getCategories,
  getSingleCategory,
  createCategory,
  updateCategory,
};
