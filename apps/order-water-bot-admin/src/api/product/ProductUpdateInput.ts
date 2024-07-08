import { CartUpdateManyWithoutProductsInput } from "./CartUpdateManyWithoutProductsInput";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  price?: number | null;
  name?: string | null;
  description?: string | null;
  carts?: CartUpdateManyWithoutProductsInput;
  orders?: OrderUpdateManyWithoutProductsInput;
};
