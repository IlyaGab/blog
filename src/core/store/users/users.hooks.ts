import { useCallback } from "react";
import { getAllUsersThunk, getUsersByIdThunk } from "./users.thunks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, cleanCurrentUserAction, cleanUsersAction, usersSelector } from "@core/store";

export const useUsersApi = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, usersIds, usersMap, currentUser } = useSelector(usersSelector);

  const getAllUsers = useCallback(() => {
    return dispatch(getAllUsersThunk());
  }, [dispatch]);

  const getUserById = useCallback(
    (id: string) => {
      return dispatch(getUsersByIdThunk(id));
    },
    [dispatch]
  );

  const cleanUsers = useCallback(() => {
    return dispatch(cleanUsersAction());
  }, [dispatch]);

  const cleanCurrentUser = useCallback(() => {
    return dispatch(cleanCurrentUserAction());
  }, [dispatch]);

  return { getAllUsers, getUserById, cleanUsers, cleanCurrentUser, isLoading, usersIds, usersMap, currentUser };
};
