import { z } from "zod";

export const affiliateSchema = z.object({
  firstName: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: z.string().trim().min(2, "El apellido debe tener al menos 2 caracteres"),
  email: z.string().trim().email("Debe ingresar un correo válido"),
  membershipType: z.enum(["silver", "gold", "platinium"], {
    message: "Debe seleccionar una membresía válida",
  }),
});

export const simulateDiscountSchema = z.object({
  amount: z.coerce
    .number()
    .positive("El monto debe ser mayor a 0"),
});

