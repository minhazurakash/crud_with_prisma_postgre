import { PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

const getUsers = () => {
  const result = prisma.user.findMany({
    include: {
      profile: true,
    },
  });
  return result;
};
const getSingleUser = (id: number) => {
  const result = prisma.user.findUnique({
    where: { id },
    include: {
      profile: true,
    },
  });
  return result;
};

const createUser = (data: User): Promise<User> => {
  const result = prisma.user.create({ data });
  return result;
};

const createOrUpdateProfile = async (data: Profile): Promise<Profile> => {
  const isExisted = await prisma.profile.findUnique({
    where: {
      userId: data?.userId,
    },
  });

  if (isExisted) {
    const result = prisma.profile.update({
      where: {
        userId: data?.userId,
      },
      data: {
        bio: data?.bio,
      },
    });
    return result;
  } else {
    const result = prisma.profile.create({
      data: {
        bio: data?.bio,
        userId: data?.userId,
      },
    });
    return result;
  }
};

export const UserService = {
  getUsers,
  getSingleUser,
  createUser,
  createOrUpdateProfile,
};
