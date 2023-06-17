import { UsersState } from "./users.types";

export const initialState: UsersState = {
  usersIds: [],
  usersMap: {},
  currentUser: null,
  isLoading: false,
};
