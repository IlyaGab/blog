import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiService } from "@core/services";
import { User } from "./users.types";
import { StoreMappedData } from "@core/types/store-mapped-data";
import { MyKnownError } from "@core/types/my-known-message";
import { mapListData } from "@core/helpers";

export const getAllUsersThunk = createAsyncThunk<
  StoreMappedData<User>,
  undefined,
  { rejectValue: MyKnownError }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
>("users/getAllUsers", async (data, { rejectWithValue }) => {
  try {
    const { data } = await ApiService.getAllUsers();
    return mapListData(data);
  } catch (error) {
    rejectWithValue({
      errorMessage: error,
    } as MyKnownError);
  }
});

export const getUsersByIdThunk = createAsyncThunk<
  User,
  string,
  { rejectValue: MyKnownError }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
>("users/getUserById", async (id, { rejectWithValue }) => {
  try {
    const { data } = await ApiService.getUserById(id);
    return data;
  } catch (error) {
    rejectWithValue({
      errorMessage: error,
    } as MyKnownError);
  }
});
