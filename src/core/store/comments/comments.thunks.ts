import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiService } from "@core/services";
import { StoreMappedData } from "@core/types/store-mapped-data";
import { MyKnownError } from "@core/types/my-known-message";
import { mapListData } from "@core/helpers";
import { Comment } from "./comments.types";

export const getCommentsByIdThunk = createAsyncThunk<
  StoreMappedData<Comment>,
  string,
  { rejectValue: MyKnownError }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
>("comments/getCommentsById", async (id, { rejectWithValue }) => {
  try {
    const { data } = await ApiService.getCommentsById(id);
    return mapListData(data);
  } catch (error) {
    rejectWithValue({
      errorMessage: error,
    } as MyKnownError);
  }
});
