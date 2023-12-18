import { roleModel } from "../../DB/model/role.js";
import { userModel } from "../../DB/model/user.model.js";
import { apiError, asyncHandle } from "../middleware/errorHandle.js";
import bcrypt from "bcryptjs";

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
    const role = await roleModel.findOne({
      roleName: process.env.roleName,
      isDeleted: false,
    });
    if (role) {
      bcrypt.hash(
        process.env.userPassword,
        parseInt(process.env.saltRand),
        async (err, result) => {
          if (err || !result) {
            return console.log("in-valid hash Password");
          } else {
            const createUser = new userModel({
              userName: process.env.adminName,
              password: result,
              role: role._id,
            });
            const createdUser = await createUser.save();
            console.log({
              _id: createdUser._id,
              userName: createdUser.userName,
            });
          }
        }
      );
    }
  }
});
