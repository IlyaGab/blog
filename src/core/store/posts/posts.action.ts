import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiService } from "@core/services";
import { Post } from "./posts.types";
import { StoreMappedData } from "@core/types/store-mapped-data";
import { MyKnownError } from "@core/types/my-known-message";
import { mapListData } from "@core/helpers";

export const cleanPosts = createAction("posts/cleanPosts");

export const getAllPostsThunk = createAsyncThunk<
  StoreMappedData<Post>,
  undefined,
  { rejectValue: MyKnownError }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
>("posts/getAllPosts", async (data, { rejectWithValue }) => {
  try {
    const { data } = await ApiService.getAllPosts();
    return mapListData(data);
  } catch (error) {
    rejectWithValue({
      errorMessage: error,
    } as MyKnownError);
  }
});
