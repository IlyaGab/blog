import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiService } from "@core/services";
import { Todo } from "./todos.types";
import { StoreMappedData } from "@core/types/store-mapped-data";
import { MyKnownError } from "@core/types/my-known-message";
import { mapListData } from "@core/helpers";

export const getAllTodosThunk = createAsyncThunk<
  StoreMappedData<Todo>,
  undefined,
  { rejectValue: MyKnownError }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
>("todos/getAllTodos", async (data, { rejectWithValue }) => {
  try {
    const { data } = await ApiService.getAllTodos();
    return mapListData(data);
  } catch (error) {
    rejectWithValue({
      errorMessage: error,
    } as MyKnownError);
  }
});
