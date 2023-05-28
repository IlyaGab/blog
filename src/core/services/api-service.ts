import axios from "axios";
import { User } from "@core/store";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

const ApiService = {
  getAllUsers: () => axios.get<User[]>("/users"),
};

export default ApiService;
