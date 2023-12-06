// import section
import { Schema, model } from "mongoose";
// in schema everting about fields in database
const customerSchema = new Schema(
  {
    userName: {
      type: String,
      require: [true, "can't be blank"],
      unique: true,
    },
    firstName: {
      type: String,
      unique: true,
    },
    lastName: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      require: [true, "can't be blank"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "can't be blank"],
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    placeOfResidence: {
      type: String,
    },
    personalInterests: [],
    isLogin: {
      type: Boolean,
      default: false,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
// in model tables name and integration with schema
export const customerModel = model("customer", customerSchema);
