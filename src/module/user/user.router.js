// imports section
import { Router } from "express";
import * as userController from "./controller/user.controller.js";

// create express router
const router = Router();

// start get router section
// get All User
router.get("/getAllUser", userController.getAllUser);
// end get router section
// export express router
export default router;
