import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@core/store";

const selectSelf = (state: RootState) => state.users;

export const usersSelector = createSelector(selectSelf, (state) => state);
