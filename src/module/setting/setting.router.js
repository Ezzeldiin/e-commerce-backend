// imports section
import { Router } from "express";
import * as settingController from "./controller/setting.controller.js";

// create express router
const router = Router();

// get router section
// get All Setting
router.get("/getAllSetting", settingController.getAllSetting);

// export express router
export default router;
