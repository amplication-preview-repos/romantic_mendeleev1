import { InputJsonValue } from "../../types";
import { CartCreateNestedManyWithoutUsersInput } from "./CartCreateNestedManyWithoutUsersInput";
import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  carts?: CartCreateNestedManyWithoutUsersInput;
  orders?: OrderCreateNestedManyWithoutUsersInput;
};
