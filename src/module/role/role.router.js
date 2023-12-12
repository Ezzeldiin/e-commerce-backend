// imports section
import { Router } from "express";
import * as roleController from "./controller/role.controller.js";
import { validation } from "../../middleware/validationMiddleware.js";
import * as validators from "./role.validation.js";

// create express router
const router = Router();

// get router section
// get All role router
router.get("/getAllRole", roleController.getAllRole);
// create Role router
router.post(
  "/createRole",
  validation(validators.createRole),
  roleController.createRole
);

// export express router
export default router;
