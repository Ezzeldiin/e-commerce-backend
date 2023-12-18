import joi from "joi";

export const loginUser = {
  body: joi.object().keys({
    userName: joi.string().required(),
    password: joi.string().required(),
  }),
};
