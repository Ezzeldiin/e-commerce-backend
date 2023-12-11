import { userModel } from "../../../../DB/model/user.model.js";
import { apiError, asyncHandle } from "../../../middleware/errorHandle.js";

export const createUser = asyncHandle(async (req, res, nex) => {
  const { userName, password, role } = req.body;
  const user = await userModel.findOne({ userName, isDeleted: true });
  if (user) return new apiError("this name is exist", 409);
  else {
    const newUser = new userModel({ userName, password, role });
    const saveUser = await newUser.save();
    if (!saveUser) return new apiError("filed to create user", 400);
    else
      res.status(200).json({
        message: "created user successfully",
        user: {
          id: saveUser._id,
          userName: saveUser.userName,
          role: saveUser.role,
        },
      });
  }
});
