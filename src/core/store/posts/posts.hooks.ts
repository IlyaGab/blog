import { useCallback } from "react";
import { getAllPostsThunk } from "./posts.action";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, } from "@core/store";
import { postsSelector } from "./posts.selectors";

export const usePostsApi = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, postsIds, postsMap } = useSelector(postsSelector);

  const getAllPosts = useCallback(() => {
    dispatch(getAllPostsThunk());
  }, [dispatch]);

  return { getAllPosts, isLoading, postsIds, postsMap };
};
