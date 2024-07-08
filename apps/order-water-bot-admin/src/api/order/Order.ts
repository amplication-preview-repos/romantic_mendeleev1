import { User } from "../user/User";
import { Product } from "../product/Product";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  orderTime: Date | null;
  user?: User | null;
  product?: Product | null;
};
