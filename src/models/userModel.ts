import prisma from "../prisma/client";

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};

export const createUserModel = async (email: string, hashedPassword: string) => {
  return await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });
};