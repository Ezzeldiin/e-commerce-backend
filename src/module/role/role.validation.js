import joi from "joi";
import JoiObjectId from "joi-objectid";
const myJoiObjectId = JoiObjectId(joi);
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
        // .regex(/^ecommerce__ [[0-9a-zA-Z]*$/)
        .messages({
          "any.required": "authorization id is required",
          "any.empty": "authorization id must to be not empty",
        }),
    })
    .options({ allowUnknown: true }),
};
export const updateRole = {
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
    }),
  headers: joi
    .object()
    .required()
    .keys({
      authorization: joi
        .string()
        .required()
        //.regex(/^ecommerce__ [[0-9a-zA-Z]*$/)
        .messages({
          "any.required": "authorization id is required",
          "any.empty": "authorization id must to be not empty",
        }),
    })
    .options({ allowUnknown: true }),
  params: joi
    .object()
    .required()
    .keys({
      id: myJoiObjectId().required().messages({
        "any.required": "id is required",
        "any.empty": "id must to be not empty",
      }),
    }),
};
export const deleteRole = {
  headers: joi
    .object()
    .required()
    .keys({
      authorization: joi
        .string()
        .required()
        //.regex(/^ecommerce__ [[0-9a-zA-Z]*$/)
        .messages({
          "any.required": "authorization id is required",
          "any.empty": "authorization id must to be not empty",
        }),
    })
    .options({ allowUnknown: true }),
  params: joi
    .object()
    .required()
    .keys({
      id: myJoiObjectId().required().messages({
        "any.required": "id is required",
        "any.empty": "id must to be not empty",
      }),
    }),
};
export const getAllRole = {
  headers: joi
    .object()
    .required()
    .keys({
      authorization: joi
        .string()
        .required()
        //.regex(/^ecommerce__ [[0-9a-zA-Z]*$/)
        .messages({
          "any.required": "authorization id is required",
          "any.empty": "authorization id must to be not empty",
        }),
    })
    .options({ allowUnknown: true }),
  query: joi
    .object()
    .required()
    .keys({
      page: joi.string().required().messages({
        "any.required": "page is required",
        "any.empty": "page must to be not empty",
      }),
      size: joi.number().required().messages({
        "any.required": "size is required",
        "any.empty": "size must to be not empty",
      }),
    }),
};
