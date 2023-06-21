import axios from "axios";
import { User } from "@core/store";
import { Todo } from "@core/store";
import { Post } from "@core/store/posts";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

const ApiService = {
  getAllUsers: () => axios.get<User[]>("/users"),
  getTodosByUserId: (id: string) => axios.get<Todo[]>(`/todos?userId=${id}`),
  getPostsByUserId: (id: string) => axios.get<Post[]>(`/posts?userId=${id}`),
  getUserById: (id: string) => axios.get<User>(`/users/${id}`),
};

export default ApiService;
