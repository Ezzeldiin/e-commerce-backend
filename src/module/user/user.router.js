// imports section
import { Router } from "express";
import * as userController from "./controller/user.controller.js";
import { validation } from "../../middleware/validationMiddleware.js";
import * as validators from "./user.validation.js";
import { userAut } from "../../middleware/aut.js";

// create express router
const router = Router();

// start get router section
// get create user
router.post(
  "/createUser",
  validation(validators.createUser),
  userAut(),
  userController.createUser
);
// end get router section
// export express router
export default router;
