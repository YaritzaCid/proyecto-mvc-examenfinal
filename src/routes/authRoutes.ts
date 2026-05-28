import { Router } from "express";
import {
  showRegisterForm,
  registerUser,
  showLoginForm,
  loginUser,
  logoutUser,
} from "../controllers/authController";

const router = Router();

router.get("/login/register", showRegisterForm);
router.post("/login/register", registerUser);

router.get("/login", showLoginForm);
router.post("/login", loginUser);

router.post("/logout", logoutUser);

export default router;