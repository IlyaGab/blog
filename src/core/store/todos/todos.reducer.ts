import { initialTodoState } from "./todos.initial-state";
import { createReducer } from "@reduxjs/toolkit";
import * as Actions from "./todos.action";

export const todosReducer = createReducer(initialTodoState, (builder) => {
  builder
    .addCase(Actions.cleanTodos, () => initialTodoState)
    .addCase(Actions.getAllTodosThunk.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(Actions.getAllTodosThunk.fulfilled, (state, { payload }) => {
      state.todoIds = payload.mapIds;
      state.todoMap = payload.mapData;
      state.isLoading = false;
    })
    .addCase(Actions.getAllTodosThunk.rejected, (state) => {
      state.isLoading = false;
    });
});
