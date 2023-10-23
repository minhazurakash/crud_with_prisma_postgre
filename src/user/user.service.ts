import { PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

const getUsers = async () => {
  const result = await prisma.user.findMany({
    include: {
      profile: true,
    },
  });
  return result;
};
const getSingleUser = async (id: number) => {
  const result = await prisma.user.findUnique({
    where: { id },
    include: {
      profile: true,
    },
  });
  return result;
};

const createUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({ data });
  return result;
};

const createOrUpdateProfile = async (data: Profile): Promise<Profile> => {
  const isExisted = await prisma.profile.findUnique({
    where: {
      userId: data?.userId,
    },
  });

  if (isExisted) {
    const result = await prisma.profile.update({
      where: {
        userId: data?.userId,
      },
      data: {
        bio: data?.bio,
      },
    });
    return result;
  } else {
    const result = await prisma.profile.create({
      data: {
        bio: data?.bio,
        userId: data?.userId,
      },
    });
    return result;
  }
};

const deleteUser = async (id: number) => {
  const result = await prisma.user.delete({
    where: { id },
  });
  return result;
};

export const UserService = {
  getUsers,
  getSingleUser,
  createUser,
  createOrUpdateProfile,
  deleteUser,
};
