import { customerModel } from "../../../../DB/model/customer.js";
import { asyncHandle } from "../../../middleware/errorHandle.js";

export const getAllCustomer = asyncHandle(async (req, res, next) => {
  const customer = await customerModel.find();
  res.status(200).json({ message: "welcome in customer api", customer });
});
