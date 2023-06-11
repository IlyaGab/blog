import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiService } from "@core/services";
import { User } from "./users.types";
import { StoreMappedData } from "@core/types/store-mapped-data";
import { MyKnownError } from "@core/types/my-known-message";
import { mapListData } from "@core/helpers";

export const cleanUsers = createAction("users/cleanUsers");

export const getAllUsersThunk = createAsyncThunk<
  StoreMappedData<User>,
  undefined,
  { rejectValue: MyKnownError }
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

export const getUsersWithIdThunk = createAsyncThunk<
  User,
  string | undefined,
  { rejectValue: MyKnownError }
  // @ts-ignore
>("users/getUserWithId", async (id, { rejectWithValue }) => {
  try {
    const data = await ApiService.getUserWithId(id);
    return data;
  } catch (error) {
    rejectWithValue({
      errorMessage: error,
    } as MyKnownError);
  }
});
