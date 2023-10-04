import axios from "axios";
import { User } from "@core/store";
import { Todo } from "@core/store";
import { Post } from "@core/store/posts";
import { Comment } from "@core/store/comments";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

const ApiService = {
  getAllUsers: () => axios.get<User[]>("/users"),
  getTodosByUserId: (id: string) => axios.get<Todo[]>(`/todos?userId=${id}`),
  getCommentsById: (id: string) => axios.get<Comment[]>(`/comments?postId=${id}`),
  getPostsByUserId: (id: string): AxiosRespose<Post[]> => axios.get<Post[]>(`/posts?userId=${id}`), // TODO: Rewrite another methods
  getUserById: (id: string) => axios.get<User>(`/users/${id}`),
};

export default ApiService;
