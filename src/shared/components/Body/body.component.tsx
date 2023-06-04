import HomePage from '@pages/homepage/homepage.component';
import NewsPage from '@pages/news/news.component';
import NotFoundPage from '@pages/notfoundpage/not-found.component';
import TodosPage from '@pages/todos/todos.component';
import { UsersPage } from '@pages/users';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

enum RouteNames {
    HOME = "/",
    NEWS = "/news",
    NOT_FOUND_PAGE = "/*",
    TODOS = "/todos",
    USERS = "/users"
}

const Body: React.FC = () => {

    return (
        <Routes>
            <Route path={RouteNames.HOME} element={<HomePage />} />
            <Route path={RouteNames.NEWS} element={<NewsPage />} />
            <Route path={RouteNames.TODOS} element={<TodosPage />} />
            <Route path={RouteNames.USERS} element={<UsersPage />} />
            <Route path={RouteNames.NOT_FOUND_PAGE} element={<NotFoundPage />} />
        </Routes>

    );
};

export default Body;