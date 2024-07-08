import { JsonValue } from "type-fest";
import { Cart } from "../cart/Cart";
import { Order } from "../order/Order";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  carts?: Array<Cart>;
  orders?: Array<Order>;
};
