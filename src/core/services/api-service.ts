import axios from "axios";
import { User } from "@core/store";
import { Todo } from "@core/store";
import { Post } from "@core/store/posts";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

const ApiService = {
  getAllUsers: () => axios.get<User[]>("/users"),
  getAllTodos: () => axios.get<Todo[]>("/todos"),
  getAllPosts: () => axios.get<Post[]>("/posts"),
  getUserWithId: (id: string | undefined) => axios.get<User>(`/users/${id}`),
};

export default ApiService;
