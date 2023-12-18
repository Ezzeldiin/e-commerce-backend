// imports section
import { Router } from "express";
import * as settingController from "./controller/setting.controller.js";
import { myMulter, HME, multerValidation } from "../../utils/multer.js";
import { deleteFile } from "../../utils/deletefile.js";

// create express router
const router = Router();

// get router section
// get All Setting
router.get("/getAllSetting", settingController.getAllSetting);

router.post(
  "/createSetting",
  myMulter(multerValidation.image).single("file"),
  HME(),
  deleteFile(),
  settingController.createSetting
);

// export express router
export default router;
