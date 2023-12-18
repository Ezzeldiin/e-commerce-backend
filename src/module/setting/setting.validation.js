import joi from "joi";
import JoiObjectId from "joi-objectid";
const myJoiObjectId = JoiObjectId(joi);
export const createSetting = {
  body: joi.object().keys({
    systemName: joi.string().required(),
    mainColor: joi.string().required(),
    secondaryColor: joi.string().required(),
  }),
  Headers: joi
    .object()
    .keys({
      authorization: joi.string().required(),
    })
    .options({ allowUnknown: true }),
};
export const updateSetting = {
  body: joi.object().keys({
    systemName: joi.string().required(),
    mainColor: joi.string().required(),
    secondaryColor: joi.string().required(),
  }),
  Headers: joi
    .object()
    .keys({
      authorization: joi.string().required(),
    })
    .options({ allowUnknown: true }),
  params: myJoiObjectId().required(),
};
