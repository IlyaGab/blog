import { initialState } from "./users.initial-state";
import { createReducer } from "@reduxjs/toolkit";
import * as AsyncActions from "./users.thunks";
import * as Actions from "./users.actions";

export const usersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(Actions.cleanUsersAction, () => initialState)
    .addCase(Actions.cleanCurrentUserAction, (state) => {
      state.currentUser = initialState.currentUser;
    })
    .addCase(AsyncActions.getAllUsersThunk.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(AsyncActions.getAllUsersThunk.fulfilled, (state, { payload }) => {
      state.usersIds = payload.mapIds;
      state.usersMap = payload.mapData;
      state.isLoading = false;
    })
    .addCase(AsyncActions.getAllUsersThunk.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(AsyncActions.getUsersByIdThunk.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(AsyncActions.getUsersByIdThunk.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
      state.isLoading = false;
    })
    .addCase(AsyncActions.getUsersByIdThunk.rejected, (state) => {
      state.isLoading = false;
    });
});
