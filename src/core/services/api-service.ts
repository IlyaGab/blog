import axios from "axios";
import { User } from "@core/store";
import { Todo } from "@core/store";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

const ApiService = {
  getAllUsers: () => axios.get<User[]>("/users"),
  getAllTodos: () => axios.get<Todo[]>("/todos"),
};

export default ApiService;
