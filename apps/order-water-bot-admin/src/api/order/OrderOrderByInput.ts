import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  orderTime?: SortOrder;
  userId?: SortOrder;
  productId?: SortOrder;
};
