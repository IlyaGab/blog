import { initialTodoState } from "./todos.initial-state";
import { createReducer } from "@reduxjs/toolkit";
import * as AsyncActions from "./todos.thunks";
import * as Actions from "./todos.actions";

export const todosReducer = createReducer(initialTodoState, (builder) => {
  builder
    .addCase(Actions.cleanTodosAction, () => initialTodoState)
    .addCase(AsyncActions.getTodosByUserIdThunk.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(AsyncActions.getTodosByUserIdThunk.fulfilled, (state, { payload }) => {
      state.todoIds = payload.mapIds;
      state.todoMap = payload.mapData;
      state.isLoading = false;
    })
    .addCase(AsyncActions.getTodosByUserIdThunk.rejected, (state) => {
      state.isLoading = false;
    });
});
