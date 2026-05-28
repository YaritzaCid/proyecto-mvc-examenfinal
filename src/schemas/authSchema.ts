import { z } from "zod";

export const authSchema = z.object({
  email: z.string().trim().email("Debe ingresar un correo válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});