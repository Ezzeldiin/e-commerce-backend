// imports section
import joi from "joi";
import JoiObjectId from "joi-objectid";
const myJoiObjectId = JoiObjectId(joi);

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
      role: joi.string().min(24).max(24).required().messages({
        "any.required": "role is required",
        "any.empty": "role must to be not empty",
      }),
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
          "any.required": "authorization is required",
          "any.empty": "authorization must to be not empty",
        }),
    }),
};
export const updateUser = {
  body: joi
    .object()
    .required()
    .keys({
      userName: joi.string().required().messages({
        "any.required": "username is required",
        "any.empty": "username must to be not empty",
      }),
      password: joi.string().pattern(new RegExp()).required().messages({
        "any.required": "password is required",
        "any.empty": "password must to be not empty",
      }),
      role: joi.string().min(24).max(24).required().messages({
        "any.required": "role is required",
        "any.empty": "role must to be not empty",
      }),
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
  params: joi
    .object()
    .required()
    .keys({
      id: myJoiObjectId()
        .required()
        // .regex(/^ecommerce__ [[0-9a-zA-Z]*$/)
        .messages({
          "any.required": "id is required",
          "any.empty": "id must to be not empty",
        }),
    }),
};
export const deleteUser = {
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
  params: joi
    .object()
    .required()
    .keys({
      id: myJoiObjectId()
        .required()
        // .regex(/^ecommerce__ [[0-9a-zA-Z]*$/)
        .messages({
          "any.required": "id is required",
          "any.empty": "id must to be not empty",
        }),
    }),
};
export const getAllUser = {
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
  query: joi
    .object()
    .required()
    .keys({
      page: joi.number().required().messages({
        "any.required": "page is required",
        "any.empty": "page must to be not empty",
      }),
      size: joi.number().required().messages({
        "any.required": "size is required",
        "any.empty": "size must to be not empty",
      }),
    }),
};
