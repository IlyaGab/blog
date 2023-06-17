import { useCallback } from "react";
import { getAllTodosThunk } from "./todos.thunks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, cleanTodosAction, todosSelector } from "@core/store";

export const useTodosApi = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, todoIds, todoMap } = useSelector(todosSelector);

  const getAllTodos = useCallback(() => {
    return dispatch(getAllTodosThunk());
  }, [dispatch]);

  const cleanTodos = useCallback(() => {
    dispatch(cleanTodosAction());
  }, [dispatch]);

  return { getAllTodos, cleanTodos, isLoading, todoIds, todoMap };
};
