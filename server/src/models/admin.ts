import { Schema, model } from "mongoose";

interface Admin {
  name: string;
  role: string;
  email: string;
  phone: string;
  password: string;
}

const AdminSchema = new Schema<Admin>({
  name: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = model<Admin>("Admin", AdminSchema);
export default UserModel;
