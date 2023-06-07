import { initialState } from "./posts.initial-state";
import { createReducer } from "@reduxjs/toolkit";
import * as Actions from "./posts.action";

export const postsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(Actions.cleanPosts, () => initialState)
    .addCase(Actions.getAllPostsThunk.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(Actions.getAllPostsThunk.fulfilled, (state, { payload }) => {
      state.postsIds = payload.mapIds;
      state.postsMap = payload.mapData;
      state.isLoading = false;
    })
    .addCase(Actions.getAllPostsThunk.rejected, (state) => {
      state.isLoading = false;
    });
});
