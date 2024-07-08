import { Product } from "../product/Product";
import { User } from "../user/User";

export type Cart = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  quantity: number | null;
  product?: Product | null;
  user?: User | null;
};
