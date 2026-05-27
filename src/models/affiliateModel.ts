import prisma from "../prisma/client";

export const getAllAffiliates = async () => {
  return await prisma.affiliate.findMany();
};

export const getAffiliateById = async (id: number) => {
  return await prisma.affiliate.findUnique({
    where: { id },
  });
};

export const createAffiliateModel = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  membershipType: string;
}) => {
  return await prisma.affiliate.create({
    data,
  });
};

export const updateAffiliateModel = async (
  id: number,
  data: {
    firstName: string;
    lastName: string;
    email: string;
    membershipType: string;
  }
) => {
  return await prisma.affiliate.update({
    where: { id },
    data,
  });
};

export const deleteAffiliateModel = async (id: number) => {
  return await prisma.affiliate.delete({
    where: { id },
  });
};

export const getDiscountByMembership = (membershipType: string) => {
  if (membershipType === "silver") return 0.05;
  if (membershipType === "gold") return 0.10;
  if (membershipType === "platinium") return 0.20;

  return 0;
};