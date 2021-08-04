import { Schema, model } from "mongoose";

import { Assets } from "../interface/Asset.interface";

const AssetSchema = new Schema<Assets>({
  name: { type: String, required: true },
  type: { type: String, required: true },
  url: { type: String, required: true },
});

const AssetModel = model<Assets>("Asset", AssetSchema);
export default AssetModel;
