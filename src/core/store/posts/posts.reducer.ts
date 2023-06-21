import { initialState } from "./posts.initial-state";
import { createReducer } from "@reduxjs/toolkit";
import * as AsyncActions from "./posts.thunks";
import * as Actions from "./posts.actions";

export const postsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(Actions.cleanPostsAction, () => initialState)
    .addCase(AsyncActions.getPostsByUserIdThunk.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(AsyncActions.getPostsByUserIdThunk.fulfilled, (state, { payload }) => {
      state.postsIds = payload.mapIds;
      state.postsMap = payload.mapData;
      state.isLoading = false;
    })
    .addCase(AsyncActions.getPostsByUserIdThunk.rejected, (state) => {
      state.isLoading = false;
    });
});
