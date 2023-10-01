import { useCallback } from "react";
import { getCommentsByIdThunk } from "./comments.thunks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@core/store";
import { commentsSelector } from "./comments.selectors";
import { cleanCommentsAction } from "./comments.actions";

export const useCommentsApi = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, commentsIds, commentsMap } = useSelector(commentsSelector);

  const getCommentsById = useCallback(
    (id: string) => {
      return dispatch(getCommentsByIdThunk(id));
    },
    [dispatch]
  );

  const cleanComments = useCallback(() => {
    return dispatch(cleanCommentsAction());
  }, [dispatch]);

  return { getCommentsById, cleanComments, isLoading, commentsIds, commentsMap };
};
