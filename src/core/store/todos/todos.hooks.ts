import { useCallback } from "react";
import { getTodosByUserIdThunk } from "./todos.thunks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, cleanTodosAction, todosSelector } from "@core/store";

export const useTodosApi = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, todoIds, todoMap } = useSelector(todosSelector);

  const getTodosByUserId = useCallback(
    (id: string) => {
      return dispatch(getTodosByUserIdThunk(id));
    },
    [dispatch]
  );

  const cleanTodos = useCallback(() => {
    dispatch(cleanTodosAction());
  }, [dispatch]);

  return { getTodosByUserId, cleanTodos, isLoading, todoIds, todoMap };
};
