import { Schema, model } from "mongoose";
import { Admin } from "../interface/Admin.interface";

const AdminSchema = new Schema<Admin>({
  name: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
});

const AdminModel = model<Admin>("Admin", AdminSchema);
export default AdminModel;
