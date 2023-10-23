import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getPosts = async (options: any) => {
  const { sortBy, sortOrder, searchTerm, authorId, page, limit } = options;
  const take = parseInt(limit) || 10;
  const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0;

  return prisma.$transaction(async (tx) => {
    const result = await tx.post.findMany({
      take,
      skip,
      include: {
        author: true,
        category: true,
      },
      orderBy:
        sortBy && sortOrder ? { [sortBy]: sortOrder } : { createdAt: "desc" },
      where: {
        //   author: {
        //     id: {
        //       equals: authorId,
        //     },
        //   },
        OR: [
          {
            title: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            author: {
              name: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
        ],
      },
    });

    const total = await tx.post.count();

    return {
      total,
      data: result,
    };
  });
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
