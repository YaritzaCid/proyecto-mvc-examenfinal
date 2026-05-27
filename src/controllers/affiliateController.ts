import { Request, Response } from "express";
import {
  getAllAffiliates,
  getAffiliateById,
  getAffiliateByEmail,
  createAffiliateModel,
  updateAffiliateModel,
  deleteAffiliateModel,
  getDiscountByMembership
} from "../models/affiliateModel";
import { affiliateSchema, simulateDiscountSchema } from "../schemas/affiliateSchema";

export const listAffiliates = async (req: Request, res: Response) => {
  const affiliates = await getAllAffiliates();

  res.render("affiliates/list", {
    affiliates,
  });
};

export const showCreateForm = (req: Request, res: Response) => {
  res.render("affiliates/create");
};
/* Create Affiliate */
export const createAffiliate = async (req: Request, res: Response) => {
  const result = affiliateSchema.safeParse(req.body);

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return res.render("affiliates/create", {
      errors,
      old: req.body,
    });
  }

  const { firstName, lastName, email, membershipType } = result.data;

  const existing = await getAffiliateByEmail(email);

  if (existing) {
    return res.render("affiliates/create", {
      errors: {
        email: ["Este email ya está registrado"],
      },
      old: req.body,
    });
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

  const result = affiliateSchema.safeParse(req.body);

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return res.render("affiliates/edit", {
      errors,
      affiliate: {
        id,
        ...req.body,
      },
    });
  }

  const { firstName, lastName, email, membershipType } = result.data;

  const existing = await getAffiliateByEmail(email);

  if (existing && existing.id !== id) {
    return res.render("affiliates/edit", {
      errors: {
        email: ["Este email ya está registrado"],
      },
      affiliate: {
        id,
        ...req.body,
      },
    });
  }

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

  const result = simulateDiscountSchema.safeParse(req.body);

  const affiliate = await getAffiliateById(id);

  if (!affiliate) {
    return res.send("Afiliado no encontrado");
  }

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return res.render("affiliates/detail", {
      affiliate,
      errors,
    });
  }

  const amount = result.data.amount;
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

