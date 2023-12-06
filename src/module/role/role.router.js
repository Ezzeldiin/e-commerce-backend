// imports section
import { Router } from "express";
import * as roleController from "./controller/role.controller.js";

// create express router
const router = Router();

// get router section
// get All role
router.get("/getAllRole", roleController.getAllRole);

// export express router
export default router;
