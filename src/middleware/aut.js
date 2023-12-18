import { userModel } from "../../DB/model/user.model.js";
import { apiError } from "./errorHandle.js";
import jwt from "jsonwebtoken";

export const userAut = () => {
  return (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization.split("__")[1];
    jwt.verify(token, process.env.tokenSignature, async (err, result) => {
      if (err || !result) {
        return next(new apiError("in-valid toke", 400));
      } else {
        const checkUser = await userModel.findById(result.id);
        if (!checkUser)
          return next(new apiError("in-valid user registration", 401));
        else if (!checkUser.isLogin)
          return next(new apiError("user not login", 401));
        else {
          const user = { userId: checkUser._id };
          req.user = user;
          next();
        }
      }
    });
  };
};
