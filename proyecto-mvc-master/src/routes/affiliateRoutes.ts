import { Router } from "express";

import {
  listAffiliates,
  showCreateForm,
  createAffiliate,
  showAffiliate,
  showEditForm,
  updateAffiliate,
  deleteAffiliate,
  simulateDiscount
} from "../controllers/affiliateController";

const router = Router();

router.get("/", listAffiliates);

router.get("/create", showCreateForm);
/* Edición de afiliados */
router.get("/edit/:id", showEditForm);
router.post("/edit/:id", updateAffiliate);
/*Eliminar Afiliado*/
router.post("/delete/:id", deleteAffiliate);
/* Simulador de descuento*/
router.post("/:id/simulate", simulateDiscount);
/* Ruta para afiliado por id*/
router.get("/:id", showAffiliate);

router.post("/create", createAffiliate);

export default router;



