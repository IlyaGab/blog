import { useCallback } from "react";
import { getAllUsersThunk, getUsersWithIdThunk } from "./users.action";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, usersSelector } from "@core/store";

export const useUsersApi = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, usersIds, usersMap, userWithId } = useSelector(usersSelector);

  const getAllUsers = useCallback(() => {
    dispatch(getAllUsersThunk());
  }, [dispatch]);

  const getUserWithId = useCallback(
    (id: string | undefined) => {
      dispatch(getUsersWithIdThunk(id));
    },
    [dispatch]
  );

  return { getAllUsers, getUserWithId, isLoading, usersIds, usersMap, userWithId };
};
