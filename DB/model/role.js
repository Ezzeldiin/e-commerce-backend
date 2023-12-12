// import section
import { Schema, Types, model } from "mongoose";
// in schema everting about fields in database
const roleSchema = new Schema(
  {
    roleName: String,
    screen: [],
    createdBy: {
      typeof: Types.ObjectId,
      // required: [true, "can't be blank"],
      //  ref: "role",
    },
    updatedBy: {
      typeof: Types.ObjectId,
      // required: [true, "can't be blank"],
      //  ref: "role",
    },
  },
  {
    timestamps: true,
  }
);
// in model tables name and integration with schema
export const roleModel = model("role", roleSchema);
