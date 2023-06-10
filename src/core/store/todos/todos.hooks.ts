import { useCallback } from "react";
import { getAllTodosThunk } from "./todos.action";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, todosSelector } from "@core/store";

export const useTodosApi = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, todoIds, todoMap } = useSelector(todosSelector);

  const getAllTodos = useCallback(() => {
    dispatch(getAllTodosThunk());
  }, [dispatch]);

  return { getAllTodos, isLoading, todoIds, todoMap };
};
