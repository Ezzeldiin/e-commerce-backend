import { roleModel } from "../../../../DB/model/role.js";
import { apiError, asyncHandle } from "../../../middleware/errorHandle.js";
import { pagination } from "../../../utils/pagination.js";

export const getAllRole = asyncHandle(async (req, res, next) => {
  const { page, size } = req.query;
  const { limit, skip } = pagination(parseInt(page), parseInt(size));
  const role = await roleModel.find().limit(limit).skip(skip).populate({
    path: "updatedBy",
    select: "-_id userName",
  });
  if (role) res.status(200).json({ message: "welcome to role api", role });
});
export const createRole = asyncHandle(async (req, res, next) => {
  const { roleName, screen } = req.body;
  const { userId } = req.user;
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
  console.log(saveRole);
  res.status(200).json({
    message: "don",
    role: {
      _id: saveRole._id,
      roleName: saveRole.roleName,
      screen: saveRole.screen,
      createdAt: saveRole.createdAt,
      updatedAt: saveRole.updatedAt,
    },
  });
});
export const updateRole = asyncHandle(async (req, res, next) => {
  const { roleName, screen } = req.body;
  const { id } = req.params;
  const { userId } = req.user;
  const checkRole = await roleModel.findOne({
    $or: [
      { _id: { $ne: id }, roleName },
      { _id: id, roleName: process.env.roleName },
    ],
  });
  if (checkRole?.roleName == process.env.roleName)
    return next(
      new apiError(
        `can not update ${process.env.roleName} role or add this name role`,
        403
      )
    );
  if (checkRole) return next(new apiError("role name is exist"));
  const roleUpdate = await roleModel.findOneAndUpdate(
    { _id: id },
    {
      roleName,
      screen,
      updatedBy: userId,
    },
    {
      new: true,
    }
  );
  if (!roleUpdate) return next(new apiError("filed to update role"));
  res.status(200).json({
    message: "don",
    role: {
      _id: roleUpdate._id,
      roleName: roleUpdate.roleName,
      screen: roleUpdate.screen,
      updatedBy: roleUpdate.updatedBy,
      updatedAt: roleUpdate.updatedAt,
    },
  });
});
export const deleteRole = asyncHandle(async (req, res, next) => {
  const { id } = req.params;
  const checkRole = await roleModel.findByIdAndDelete({ _id: id });
  if (!checkRole) return next(new apiError("role id is exist"));
  res.status(200).json({
    message: "delete role successfully",
  });
});
