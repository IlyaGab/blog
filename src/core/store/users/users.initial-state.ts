import { UsersState } from "./users.types";

export const initialState: UsersState = {
  usersIds: [],
  usersMap: {},
  userWithId: null,
  isLoading: false,
};
