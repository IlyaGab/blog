import { useCallback } from "react";
import { getAllUsersThunk } from "./users.action";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, usersSelector } from "@core/store";

export const useUsersApi = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, usersIds, usersMap } = useSelector(usersSelector)

  const getAllUsers = useCallback(() => {
    dispatch(getAllUsersThunk());
  }, [dispatch]);

  return { getAllUsers, isLoading, usersIds, usersMap };
};
