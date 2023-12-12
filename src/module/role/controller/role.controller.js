import { roleModel } from "../../../../DB/model/role.js";
import { apiError, asyncHandle } from "../../../middleware/errorHandle.js";

export const getAllRole = asyncHandle(async (req, res, next) => {
  const role = await roleModel.find();
  res.status(200).json({ message: "welcome to role api", role });
});
export const createRole = asyncHandle(async (req, res, next) => {
  const { roleName, screen, userId } = req.body;
  const checkRole = await roleModel.findOne({ roleName });
  if (checkRole) return next(new apiError("role name is exist"));
  const role = new roleModel({
    roleName,
    screen,
    createdBy: userId,
    updatedBy: userId,
  });
  const saveRole = await role.save();
  if (!saveRole) return next(new apiError("filed to create role"));
  res.status(200).json({
    message: "don",
    role: {
      _id: saveRole._id,
      roleName: saveRole.roleName,
      screen: saveRole.screen,
      createdBy: saveRole.createdBy,
      updatedBy: saveRole.updatedBy,
    },
  });
});
export const updateRole = asyncHandle(async (req, res, next) => {
  const { roleName, screen } = req.body;
  const checkRole = await roleModel.findOne({ roleName });
  if (!checkRole) return next(new apiError("role name is exist"));
  const role = new roleModel({
    roleName,
    screen,
  });
  const saveRole = await role.save();

  if (!checkRole) return next(new apiError("filed to create role"));

  res.status(200).json({
    message: "don",
    role: {
      _id: saveRole._id,
      roleName: saveRole.roleName,
      screen: saveRole.screen,
    },
  });
});
