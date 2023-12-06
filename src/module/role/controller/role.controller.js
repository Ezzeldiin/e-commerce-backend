import { roleModel } from "../../../../DB/model/role.js";
import { asyncHandle } from "../../../middleware/errorHandle.js";

export const getAllRole = asyncHandle(async (req, res, next) => {
  const role = await roleModel.find();
  res.status(200).json({ message: "welcome to role api", role });
});
