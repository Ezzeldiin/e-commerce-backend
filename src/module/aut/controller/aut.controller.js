import { userModel } from "../../../../DB/model/user.model.js";
import { apiError, asyncHandle } from "../../../middleware/errorHandle.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const loginUser = asyncHandle(async (req, res, next) => {
  const { userName, password } = req.body;
  const user = await userModel.findOne({ userName });
  if (!user) return next(new apiError("in-valid user name", 404));
  else {
    bcrypt.compare(password, user.password, (err, result) => {
      if (err || !result) return next(new apiError("password mis match", 400));
      else {
        jwt.sign(
          {
            id: user._id,
            userName,
            isLogin: true,
          },
          process.env.tokenSignature,
          { expiresIn: process.env.tokenExpires },
          async (tokenErr, decoded) => {
            if (tokenErr) return next(new apiError("in-valid token", 400));
            else {
              await userModel.findByIdAndUpdate(
                { _id: user._id },
                { isLogin: true }
              );
              res.status(200).json({ message: "don", token: decoded });
            }
          }
        );
      }
    });
  }
});
