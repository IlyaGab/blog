import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../users";
import { todosReducer } from "../todos";


export const store = configureStore({
  reducer: {
    users: usersReducer,
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
