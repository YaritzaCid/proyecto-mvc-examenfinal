import prisma from "../prisma/client";

export const getAllAffiliates = async (userId: number) => {
  return await prisma.affiliate.findMany({
    where: { userId },
  });
};

export const getAffiliateById = async (id: number, userId: number) => {
  return await prisma.affiliate.findFirst({
    where: {
      id,
      userId,
    },
  });
};

export const createAffiliateModel = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  membershipType: string;
  userId: number;
}) => {
  return await prisma.affiliate.create({
    data,
  });
};

export const updateAffiliateModel = async (
  id: number,
  userId: number,
  data: {
    firstName: string;
    lastName: string;
    email: string;
    membershipType: string;
  }
) => {
  return await prisma.affiliate.updateMany({
    where: {
      id,
      userId,
    },
    data,
  });
};

export const deleteAffiliateModel = async (id: number, userId: number) => {
  return await prisma.affiliate.deleteMany({
    where: {
      id,
      userId,
    },
  });
};

export const getAffiliateByEmail = async (email: string, userId: number) => {
  return await prisma.affiliate.findFirst({
    where: {
      email,
      userId,
    },
  });
};

export const getDiscountByMembership = (membershipType: string) => {
  if (membershipType === "silver") return 0.05;
  if (membershipType === "gold") return 0.1;
  if (membershipType === "platinium") return 0.2;

  return 0;
};

