import { RouteNames } from "@core/constants";
import HomePage from "@pages/homepage/homepage.component";
import NewsPage from "@pages/news/news.component";
import NotFoundPage from "@pages/not-found-page/not-found.component";
import PostsPage from "@pages/posts/posts.component";
import TodosPage from "@pages/todos/todos.component";
import { UserPage } from "@pages/user";
import { UsersPage } from "@pages/users";
import React from "react";
import { Routes, Route } from "react-router-dom";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={RouteNames.HOME} element={<HomePage />} />
      <Route path={RouteNames.NEWS} element={<NewsPage />} />
      <Route path={RouteNames.TODOS} element={<TodosPage />} />
      <Route path={RouteNames.USERS} element={<UsersPage />} />
      <Route path={`${RouteNames.USERS}/:id`} element={<UserPage />} />
      <Route path={RouteNames.POSTS} element={<PostsPage />} />
      <Route path={RouteNames.NOT_FOUND_PAGE} element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
