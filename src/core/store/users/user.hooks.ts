import { useCallback } from "react";
import { getAllUsersThunk } from "./users.action";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/store";

export const useUsersApi = () => {
  const dispatch = useDispatch<AppDispatch>();
  const getAllUsers = useCallback(() => {
    dispatch(getAllUsersThunk());
  }, [dispatch]);

  return { getAllUsers };
};
