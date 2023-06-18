import { useCallback } from "react";
import { getAllPostsThunk } from "./posts.thunks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@core/store";
import { postsSelector } from "./posts.selectors";
import { cleanPosts } from "./posts.actions";

export const usePostsApi = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, postsIds, postsMap } = useSelector(postsSelector);

  const getAllPosts = useCallback(() => {
    return dispatch(getAllPostsThunk());
  }, [dispatch]);

  const cleanAllPosts = useCallback(() => {
    return dispatch(cleanPosts());
  }, [dispatch]);

  return { getAllPosts, cleanAllPosts, isLoading, postsIds, postsMap };
};
