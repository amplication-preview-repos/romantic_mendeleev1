import { Cart } from "../cart/Cart";
import { Order } from "../order/Order";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  price: number | null;
  name: string | null;
  description: string | null;
  carts?: Array<Cart>;
  orders?: Array<Order>;
};
