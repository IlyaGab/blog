import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@core/store";

const selectSelf = (state: RootState) => state.posts;

export const postsSelector = createSelector(selectSelf, (state) => state);
