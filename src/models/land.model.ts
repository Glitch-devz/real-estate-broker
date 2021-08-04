import { Schema, model } from "mongoose";

import { Assets } from "../interface/Asset.interface";
import { Land } from "../interface/Land.interface";

const LandSchema = new Schema<Land>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  price: { type: Number, required: true },
  address: { type: String, required: true },
  assets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Asset",
      required: true,
    },
  ],
});

const LandModel = model<Land>("Land", LandSchema);
export default LandModel;
