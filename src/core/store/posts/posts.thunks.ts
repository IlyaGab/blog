import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiService } from "@core/services";
import { Post } from "./posts.types";
import { StoreMappedData } from "@core/types/store-mapped-data";
import { MyKnownError } from "@core/types/my-known-message";
import { mapListData } from "@core/helpers";

export const getPostsByUserIdThunk = createAsyncThunk<
  StoreMappedData<Post>,
  string,
  { rejectValue: MyKnownError }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
>("posts/getPostsById", async (id, { rejectWithValue }) => {
  try {
    const { data } = await ApiService.getPostsByUserId(id);
    return mapListData(data);
  } catch (error) {
    rejectWithValue({
      errorMessage: error,
    } as MyKnownError);
  }
});
