import { apiError } from "./errorHandle.js";
import jwt from "jsonwebtoken";

export const userAut = () => {
  return (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization.split("__")[1];
    jwt.verify(token, process.env.tokenSignature, (err, result) => {
      if (err) {
        next(new apiError("in-valid toke", 400));
      } else {
        console.log(result);
      }
    });
  };
};
