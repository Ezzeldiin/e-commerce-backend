import { apiError } from "./errorHandle.js";
const validationMethod = ["header", "params", "body"];
const validationError = [];

export const validation = (schema) => {
  return (req, res, next) => {
    // const validate = schema.body.validate(req.body, { abortEarly: false });
    validationMethod.forEach((key) => {
      if (schema[key]) {
        const validate = schema[key].validate(req[key], { abortEarly: false });
        if (validate?.error?.details) {
          if (process.env.mood == "dev") console.log(validationError);
          validate.error.details.forEach((key2, index) => {
            validationError.push(validate.error.details[index].message);
          });
        }
      }
    });

    if (validationError.length) {
      console.log(1);
      next(new apiError(validationError, 400));
    } else {
      console.log(2);
      next();
    }
  };
};
