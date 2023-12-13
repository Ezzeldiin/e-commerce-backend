// imports section
import joi from "joi";
// create user validators , this's create user schema for validate input data
export const createUser = {
  body: joi
    .object()
    .required()
    .keys({
      userName: joi.string().min(4).max(8).required().messages({
        "any.required": "username is required",
        "any.empty": "username must to be not empty",
      }),
      password: joi.string().pattern(new RegExp()).required().messages({
        "any.required": "password is required",
        "any.empty": "password must to be not empty",
      }),
      role: joi.array().min(1).required().messages({
        "any.required": "role is required",
        "any.empty": "role must to be not empty",
        "array.min": "role can't be min of one limit",
        "array.base": "role must be array",
      }),
    }),
  headers: joi
    .object()
    .required()
    .keys({
      authorization: joi
        .string()
        .required()
        .regex(/^ecommerce__ [[0-9a-zA-Z]*$/)
        .messages({
          "any.required": "authorization id is required",
          "any.empty": "authorization id must to be not empty",
        }),
    })
    .options({ allowUnknown: true }),
};
