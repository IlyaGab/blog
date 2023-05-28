import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const cleanUsers = createAction("users/cleanUsers");

export const getAllUsersThunk = createAsyncThunk(
  "users/getallUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );//axios
      const data = await response.json();
      
      return {
        keys: data.map(({ id }) => id),
        map: data.reduce((acc, val) => {
          return {
            ...acc,
            [val.id]: val,
          };
        }, {}),
      };
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
