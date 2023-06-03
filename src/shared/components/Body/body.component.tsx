import HomePage from '@pages/homepage/homepage.component';
import NewsPage from '@pages/news/news.component';
import NotFounPage from '@pages/notfoundpage/notfoundpage';
import TodosPage from '@pages/todos/todos.component';
import { UsersPage } from '@pages/users';
import React from 'react';
import { Routes, Route } from 'react-router-dom';


const Body: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/todos" element={<TodosPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="*" element={<NotFounPage />} />
        </Routes>

    );
};

export default Body;