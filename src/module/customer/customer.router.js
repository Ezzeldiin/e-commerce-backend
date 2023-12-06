// imports section
import { Router } from "express";
import * as customerController from "./controller/customer.controller.js";

// create express router
const router = Router();

// get router section
// get All customer
router.get("/getAllCustomer", customerController.getAllCustomer);

// export express router
export default router;
