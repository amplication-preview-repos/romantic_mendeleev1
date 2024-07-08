import { InputJsonValue } from "../../types";
import { CartUpdateManyWithoutUsersInput } from "./CartUpdateManyWithoutUsersInput";
import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  carts?: CartUpdateManyWithoutUsersInput;
  orders?: OrderUpdateManyWithoutUsersInput;
};
