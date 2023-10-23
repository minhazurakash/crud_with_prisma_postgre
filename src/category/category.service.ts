import { Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getCategories = async () => {
  const result = await prisma.category.findMany();
  return result;
};

const getSingleCategory = async (id: number) => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const createCategory = async (data: Category) => {
  const result = await prisma.category.create({
    data,
  });
  return result;
};
const updateCategory = async (id: number, data: Category) => {
  const result = await prisma.category.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

export const CategoryService = {
  getCategories,
  getSingleCategory,
  createCategory,
  updateCategory,
};
