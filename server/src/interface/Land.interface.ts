import { Assets } from "./Asset.interface";

export interface Land {
  name: string;
  email: string;
  phone: string;
  price: number;
  address: string;
  assets: Array<Assets>;
}
