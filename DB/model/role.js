// import section
import { Schema, model } from "mongoose";
// in schema everting about fields in database
const roleSchema = new Schema(
  {
    roleName: String,
    screen: [],
  },
  {
    timestamps: true,
  }
);
// in model tables name and integration with schema
export const roleModel = model("role", roleSchema);
