import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getPosts = async () => {
  const result = await prisma.post.findMany({
    include: {
      author: true,
      category: true,
    },
  });
  return result;
};
const getSinglePost = async (id: number) => {
  const result = await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      author: true,
      category: true,
    },
  });
  return result;
};

const createPost = async (data: Post) => {
  const result = await prisma.post.create({ data });
  return result;
};

const updatePost = async (id: number, data: Post) => {
  const result = await prisma.post.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

export const PostService = {
  getPosts,
  getSinglePost,
  createPost,
  updatePost,
};
