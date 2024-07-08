import { CartCreateNestedManyWithoutProductsInput } from "./CartCreateNestedManyWithoutProductsInput";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  price?: number | null;
  name?: string | null;
  description?: string | null;
  carts?: CartCreateNestedManyWithoutProductsInput;
  orders?: OrderCreateNestedManyWithoutProductsInput;
};
