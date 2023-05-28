import { initialState } from "./users.initial-state";
import { createReducer } from "@reduxjs/toolkit";
import * as Actions from "./users.action";

export const usersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(Actions.cleanUsers, () => initialState)
    .addCase(Actions.getAllUsersThunk.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(Actions.getAllUsersThunk.fulfilled, (state, { payload }) => {
      state.usersIds = payload.mapIds;
      state.usersMap = payload.mapData;
      state.isLoading = false;
    })
    .addCase(Actions.getAllUsersThunk.rejected, (state) => {
      state.isLoading = false;
    });
});
