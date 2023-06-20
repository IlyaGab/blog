import { useCallback } from "react";
import { getPostsByUserIdThunk } from "./posts.thunks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@core/store";
import { postsSelector } from "./posts.selectors";
import { cleanPostsAction } from "./posts.actions";

export const usePostsApi = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, postsIds, postsMap } = useSelector(postsSelector);

  const getPostsByUserId = useCallback(
    (id: string) => {
      return dispatch(getPostsByUserIdThunk(id));
    },
    [dispatch]
  );

  const cleanPosts = useCallback(() => {
    return dispatch(cleanPostsAction());
  }, [dispatch]);

  return { getPostsByUserId, cleanPosts, isLoading, postsIds, postsMap };
};
