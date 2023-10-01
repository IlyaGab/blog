import { CommentsState } from "./comments.types";

export const initialState: CommentsState = {
  commentsIds: [],
  commentsMap: {},
  isLoading: false,
};
