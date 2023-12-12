import joi from "joi";

export const createRole = {
  body: joi
    .object()
    .required()
    .keys({
      roleName: joi.string().required().messages({
        "any.required": "role name is required",
        "any.empty": "role name must to be not empty",
      }),
      screen: joi.array().min(1).required().messages({
        "any.required": "screen is required",
        "any.empty": "screen must to be not empty",
        "array.min": "screen can't be min of one limit",
        "array.base": "screen must be array",
      }),
      // userId: joi.string().min(24).max(24).required().messages({
      //   "any.required": "user id is required",
      //   "any.empty": "user id must to be not empty",
      // }),
    }),
  headers: joi
    .object()
    .required()
    .keys({
      authorization: joi
        .string()
        .required()
        .regex(/^3alama__ [[0-9a-zA-Z]*$/)
        .messages({
          "any.required": "authorization id is required",
          "any.empty": "authorization id must to be not empty",
        }),
    })
    .options({ allowUnknown: true }),
};
