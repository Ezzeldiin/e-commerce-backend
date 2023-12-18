// imports section
import { Router } from "express";
import * as roleController from "./controller/role.controller.js";
import { validation } from "../../middleware/validationMiddleware.js";
import * as validators from "./role.validation.js";
import { userAut } from "../../middleware/aut.js";

// create express router
const router = Router();

// get router section
// get All role router
router.get(
  "/getAllRole",
  validation(validators.getAllRole),
  userAut(),
  roleController.getAllRole
);
//start post create Role router
router.post(
  "/createRole",
  validation(validators.createRole),
  userAut(),
  roleController.createRole
);
//end post create Role router
//start patch update Role router
router.patch(
  "/updateRole/:id",
  validation(validators.updateRole),
  userAut(),
  roleController.updateRole
);
//end patch update Role router
//start delete Role router
router.delete(
  "/deleteRole/:id",
  validation(validators.deleteRole),
  userAut(),
  roleController.deleteRole
);
//end delete Role router
// export express router
export default router;
