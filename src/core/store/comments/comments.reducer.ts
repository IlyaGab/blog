import { initialState } from "./comments.initial-state";
import { createReducer } from "@reduxjs/toolkit";
import * as AsyncActions from "./comments.thunks";
import * as Actions from "./comments.actions";

export const commentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(Actions.cleanCommentsAction, () => initialState)
    .addCase(AsyncActions.getCommentsByIdThunk.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(AsyncActions.getCommentsByIdThunk.fulfilled, (state, { payload }) => {
      state.commentsIds = payload.mapIds;
      state.commentsMap = payload.mapData;
      state.isLoading = false;
    })
    .addCase(AsyncActions.getCommentsByIdThunk.rejected, (state) => {
      state.isLoading = false;
    });
});
