import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../users";
import { todosReducer } from "../todos";
import { postsReducer } from "../posts";
import { commentReducer } from "../comments";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    todos: todosReducer,
    posts: postsReducer,
    comments: commentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
