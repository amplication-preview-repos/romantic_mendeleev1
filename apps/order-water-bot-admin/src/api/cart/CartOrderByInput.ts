import { SortOrder } from "../../util/SortOrder";

export type CartOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  quantity?: SortOrder;
  productId?: SortOrder;
  userId?: SortOrder;
};
