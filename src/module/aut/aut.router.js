// imports section
import { Router } from "express";
import * as autController from "./controller/aut.controller.js";
import * as autValidator from "./aut.validation.js";
import { validation } from "../../middleware/validationMiddleware.js";

// create express router
const router = Router();

// start get router section
// get create user
router.post(
  "/loginUser",
  validation(autValidator.loginUser),
  autController.loginUser
);
// end get router section
// export express router
export default router;

//this is a comment