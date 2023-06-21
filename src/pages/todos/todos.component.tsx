import { useTodosApi } from "@core/store";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import * as Styled from "./todos.styles";

const TodosPage: React.FC = () => {
  const { getTodosByUserId, cleanTodos, isLoading, todoIds, todoMap } = useTodosApi();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getTodosByUserId(id);
    }
    return () => {
      cleanTodos();
    };
  }, [getTodosByUserId, cleanTodos, id]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Styled.Wrapper>
      {!!todoIds.length &&
        todoIds.map((id) => (
          <div key={id}>
            {todoMap[id].id} - {todoMap[id].title}
          </div>
        ))}
    </Styled.Wrapper>
  );
};

export default TodosPage;
