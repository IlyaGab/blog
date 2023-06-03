import HomePage from '@pages/homepage/homepage.component';
import NewsPage from '@pages/news/news.component';
import NotFounPage from '@pages/notfoundpage/notfoundpage';
import TodosPage from '@pages/todos/todos.component';
import { UsersPage } from '@pages/users';
import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

enum RouteNames {
    HOME = "/",
    NEWS = "/news",
    NOT_FOUND_PAGE = "/not-found-page",
    TODOS = "/todos",
    USERS = "/users"
}

interface IRoute {
    path: string;
    element: ReactElement;
}

const routes: IRoute[] = [
    {
        path: RouteNames.HOME,
        element: <HomePage />
    }
  , {
        path: RouteNames.NEWS,
        element: <NewsPage />
    }
,   
    {
        path: RouteNames.NOT_FOUND_PAGE,
        element: <NotFounPage />
    },
    {
        path: RouteNames.TODOS,
        element: <TodosPage />
    },
    {
        path: RouteNames.USERS,
        element: <UsersPage />
    }]

const Body: React.FC = () => {

    return (
        <Routes>
            {routes.map(route => (
                 <Route path={route.path} element={route.element} />   
            ))}
        </Routes>

    );
};

export default Body;