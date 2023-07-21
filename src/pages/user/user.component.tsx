import { useUsersApi } from "@core/store";
import PostsPage from "@pages/posts/posts.component";
import { TodosPage } from "@pages/todos";
import { Button } from "@shared/ui-kit/button";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as Styled from "./user.styles";

enum Tabs {
  Posts = "POSTS",
  Todos = "TODOS",
}

const UserPage: React.FC = () => {
  const { getUserById, cleanCurrentUser, isLoading, currentUser } = useUsersApi();
  const { id } = useParams();
  const [currentTab, setCurrentTab] = useState("");

  const onTabClick = (tab: Tabs) => () => {
    setCurrentTab(tab);
  };

  useEffect(() => {
    setCurrentTab(Tabs.Posts);
  }, []);

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
    <>
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
          <Button onClick={onTabClick(Tabs.Posts)} variant="text">
            Posts
          </Button>
          <Button onClick={onTabClick(Tabs.Todos)} variant="contained">
            Todos
          </Button>
          <Button onClick={onTabClick(Tabs.Todos)} variant="outlined">
            Todos
          </Button>
        </div>
      </Styled.Wrapper>
      {currentTab === Tabs.Posts && <PostsPage />}
      {currentTab === Tabs.Todos && <TodosPage />}
    </>
  );
};

export default UserPage;
