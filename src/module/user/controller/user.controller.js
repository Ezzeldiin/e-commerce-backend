import { userModel } from "../../../../DB/model/user.model.js";
import { apiError, asyncHandle } from "../../../middleware/errorHandle.js";
import { pagination } from "../../../utils/pagination.js";

export const createUser = asyncHandle(async (req, res, next) => {
  const { userName, password, role } = req.body;
  const user = await userModel.findOne({ userName, isDeleted: false });
  if (user) {
    return next(new apiError("this name is exist", 409));
  } else {
    const newUser = new userModel({ userName, password, role });
    const saveUser = await newUser.save();
    if (!saveUser) return next(new apiError("filed to create user", 400));
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
export const updateUser = asyncHandle(async (req, res, next) => {
  const { userName, password, role } = req.body;
  const { id } = req.params;
  const user = await userModel.findByIdAndUpdate(
    { id },
    { userName, password, role },
    { new: true }
  );
  if (!user) {
    return next(new apiError("in-valid user Id ", 404));
  } else {
    res.status(200).json({
      message: "update user successfully",
      user: {
        id: user._id,
        userName: user.userName,
        role: user.role,
      },
    });
  }
});
export const deleteUser = asyncHandle(async (req, res, next) => {
  const { id } = req.params;
  const user = await userModel.findByIdAndUpdate(
    { id },
    { isDeleted: true },
    { new: true }
  );
  if (!user) {
    return next(new apiError("in-valid user Id ", 404));
  } else {
    res.status(200).json({
      message: "update user successfully",
    });
  }
});
export const getAllUser = asyncHandle(async (req, res, nex) => {
  const { page, size } = req.params;
  const { limit, skip } = pagination(parseInt(page), parseInt(size));
  let users = await userModel
    .find({ isDeleted: false })
    .limit(limit)
    .skip(skip);
  res.status(200).json(users);
});
