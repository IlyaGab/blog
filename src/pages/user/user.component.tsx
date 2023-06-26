import { useUsersApi } from "@core/store";
import PostsPage from "@pages/posts/posts.component";
import { TodosPage } from "@pages/todos";
import { Button } from "@shared/ui-kit/button";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

enum Tabs {
  Posts = "POSTS",
  Todos = "TODOS",
}

const UserPage: React.FC = () => {
  const { getUserById, cleanCurrentUser, isLoading } = useUsersApi();
  const { id } = useParams();
  const [currentTab, setCurrentTab] = useState(Tabs.Posts);

  const onTabClick = (tab: Tabs) => () => {
    setCurrentTab(tab);
  };

  useEffect(() => {
    if (id) {
      getUserById(id);
    }
    return () => {
      cleanCurrentUser();
    };
  }, [getUserById, cleanCurrentUser, id]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <Button onClick={onTabClick(Tabs.Posts)} variant="text">
        Posts
      </Button>
      <Button onClick={onTabClick(Tabs.Todos)} variant="contained">
        Todos
      </Button>
      {currentTab === Tabs.Posts && <PostsPage />}
      {currentTab === Tabs.Todos && <TodosPage />}
    </div>
  );
};

export default UserPage;
