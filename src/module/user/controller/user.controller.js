import { userModel } from "../../../../DB/model/user.model.js";
import { asyncHandle } from "../../../middleware/errorHandle.js";
export const getAllUser = asyncHandle(async (req, res, next) => {
  const user = await userModel.find();
  res.status(200).json({ message: "welcome to user api", user });
});
