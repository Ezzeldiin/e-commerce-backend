// import section
import { Schema, Types, model } from "mongoose";
// in schema everting about fields in database
const roleSchema = new Schema(
  {
    roleName: String,
    screen: [],
    createdBy: {
      type: Types.ObjectId,
      ref: "user",
    },
    updatedBy: {
      type: Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);
// in model tables name and integration with schema
export const roleModel = model("role", roleSchema);
