import { useTodosApi } from "@core/store";
import React from "react";
import { useEffect } from "react";

const TodosPage: React.FC = () => {
  const { getAllTodos, cleanTodos, isLoading, todoIds, todoMap } = useTodosApi();

  useEffect(() => {
    getAllTodos();
    return () => {
      cleanTodos();
    };
  }, [getAllTodos, cleanTodos]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      {!!todoIds.length &&
        todoIds.map((id) => (
          <div key={id}>
            {todoMap[id].id} - {todoMap[id].title}
          </div>
        ))}
    </div>
  );
};

export default TodosPage;
