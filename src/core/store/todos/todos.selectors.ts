import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@core/store";

const selectSelf = (state: RootState) => state.todos;

export const todosSelector = createSelector(selectSelf, (state) => state);
