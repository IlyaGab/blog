import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@core/store";

const selectSelf = (state: RootState) => state.comments;

export const commentsSelector = createSelector(selectSelf, (state) => state);
