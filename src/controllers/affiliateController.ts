import { Request, Response } from "express";
import {
  getAllAffiliates,
  getAffiliateById,
  createAffiliateModel,
  updateAffiliateModel,
  deleteAffiliateModel,
  getDiscountByMembership,
} from "../models/affiliateModel";

export const listAffiliates = async (req: Request, res: Response) => {
  const affiliates = await getAllAffiliates();

  res.render("affiliates/list", {
    affiliates,
  });
};

export const showCreateForm = (req: Request, res: Response) => {
  res.render("affiliates/create");
};

export const createAffiliate = async (req: Request, res: Response) => {
  const { firstName, lastName, email, membershipType } = req.body;

  const affiliates = await getAllAffiliates();

  const existing = affiliates.find((affiliate) => affiliate.email === email);

  if (existing) {
    return res.send("Este email ya está registrado");
  }

  await createAffiliateModel({
    firstName,
    lastName,
    email,
    membershipType,
  });

  res.redirect("/affiliates");
};

export const showAffiliate = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const affiliate = await getAffiliateById(id);

  if (!affiliate) {
    return res.send("Afiliado no encontrado");
  }

  res.render("affiliates/detail", {
    affiliate,
  });
};

export const showEditForm = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const affiliate = await getAffiliateById(id);

  if (!affiliate) {
    return res.send("Afiliado no encontrado");
  }

  res.render("affiliates/edit", {
    affiliate,
  });
};

export const updateAffiliate = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const { firstName, lastName, email, membershipType } = req.body;

  await updateAffiliateModel(id, {
    firstName,
    lastName,
    email,
    membershipType,
  });

  res.redirect("/affiliates");
};

export const deleteAffiliate = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  await deleteAffiliateModel(id);

  res.redirect("/affiliates");
};

export const simulateDiscount = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const amount = Number(req.body.amount);

  const affiliate = await getAffiliateById(id);

  if (!affiliate) {
    return res.send("Afiliado no encontrado");
  }

  const discount = getDiscountByMembership(affiliate.membershipType);
  const discountPercent = discount * 100;
  const finalPrice = amount - amount * discount;

  res.render("affiliates/detail", {
    affiliate,
    amount,
    discountPercent,
    finalPrice,
  });
};

