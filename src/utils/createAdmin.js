import { roleModel } from "../../DB/model/role.js";
import { userModel } from "../../DB/model/user.model.js";
import { asyncHandle } from "../middleware/errorHandle.js";

export const createUserRole = asyncHandle(async () => {
  const role = await roleModel.findOne({ roleName: process.env.roleName });
  if (!role) {
    const createAdminRole = new roleModel({
      roleName: process.env.roleName,
    });
    const newRole = await createAdminRole.save();
    console.log({
      _id: newRole._id,
      roleName: newRole.roleName,
    });
  }
  createAdmin();
});
export const createAdmin = asyncHandle(async () => {
  const user = await userModel.findOne({
    userName: process.env.adminName,
    isDeleted: false,
  });
  if (!user) {
    const role = await roleModel.findOne({ roleName: process.env.roleName });
    if (role) {
      const createUser = new userModel({
        userName: process.env.adminName,
        password: process.env.userPassword,
        role: role._id,
      });
      const createdUser = await createUser.save();
      console.log({
        _id: createdUser._id,
        userName: createdUser.userName,
      });
    }
  }
});
