export interface Todo {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

export type TodosResponse = Todo[];

export interface TodosState {
  isLoading: boolean;
  todoIds: string[];
  todoMap: { [key: string]: Todo };
}
