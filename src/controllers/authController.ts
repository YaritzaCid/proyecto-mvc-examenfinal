import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { authSchema } from "../schemas/authSchema";
import { createUserModel, getUserByEmail } from "../models/userModel";

export const showRegisterForm = (req: Request, res: Response) => {
  res.render("auth/register");
};

export const registerUser = async (req: Request, res: Response) => {
  const result = authSchema.safeParse(req.body);

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return res.render("auth/register", {
      errors,
      old: req.body,
    });
  }

  const { email, password } = result.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return res.render("auth/register", {
      errors: {
        email: ["Este correo ya está registrado"],
      },
      old: req.body,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await createUserModel(email, hashedPassword);

  res.redirect("/login");
};

export const showLoginForm = (req: Request, res: Response) => {
  res.render("auth/login");
};

export const loginUser = async (req: Request, res: Response) => {
  const result = authSchema.safeParse(req.body);

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return res.render("auth/login", {
      errors,
      old: req.body,
    });
  }

  const { email, password } = result.data;

  const user = await getUserByEmail(email);

  if (!user) {
    return res.render("auth/login", {
      errors: {
        email: ["Usuario o contraseña incorrectos"],
      },
      old: req.body,
    });
  }

  const passwordOk = await bcrypt.compare(password, user.password);

  if (!passwordOk) {
    return res.render("auth/login", {
      errors: {
        password: ["Usuario o contraseña incorrectos"],
      },
      old: req.body,
    });
  }

  req.session.userId = user.id;

  res.redirect("/affiliates");
};

export const logoutUser = (req: Request, res: Response) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};