import { useUsersApi } from "@core/store";
import PostsPage from "@pages/posts/posts.component";
import { TodosPage } from "@pages/todos";
import { Button } from "@shared/ui-kit/button";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as Styled from "./user.styles";
import { Preloader } from "@shared/ui-kit/preloader";

enum Tabs {
  Posts = "POSTS",
  Todos = "TODOS",
}

const UserPage: React.FC = () => {
  const { getUserById, cleanCurrentUser, isLoading, currentUser } = useUsersApi();
  const { id } = useParams();
  const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.Posts);

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

  if (isLoading) return <Preloader />;

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Title>User Information</Styled.Title>
        <Styled.Box>
          <Styled.Info>
            <div>User id - {currentUser?.id}</div>
            <div>User name - {currentUser?.name}</div>
            <div>User username - {currentUser?.username}</div>
            <div>User email - {currentUser?.email}</div>
          </Styled.Info>
          <Styled.Address>
            User Address:
            <div>City name - {currentUser?.address.city}</div>
            <div>Street name - {currentUser?.address.street}</div>
            <div>Zip-code - {currentUser?.address.zipcode}</div>
          </Styled.Address>
        </Styled.Box>
      </Styled.Container>
      <div>
        <Button onClick={onTabClick(Tabs.Posts)} variant={currentTab === Tabs.Posts ? "contained" : "outlined"}>
          Posts
        </Button>
        <Button onClick={onTabClick(Tabs.Todos)} variant={currentTab === Tabs.Todos ? "contained" : "outlined"}>
          Todos
        </Button>
      </div>
      {currentTab === Tabs.Posts && <PostsPage />}
      {currentTab === Tabs.Todos && <TodosPage />}
    </Styled.Wrapper>
  );
};

export default UserPage;
