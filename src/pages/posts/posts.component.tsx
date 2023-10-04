import { usePostsApi } from "@core/store/posts";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as Styled from "./posts.styles";
import { Preloader } from "@shared/ui-kit/preloader";
import { ListItem } from "@shared/components/list-item";

const PostsPage: React.FC = () => {
  const { getPostsByUserId, cleanPosts, isLoading, postsIds, postsMap } = usePostsApi();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getPostsByUserId(id);
    }
    return () => {
      cleanPosts();
    };
  }, [getPostsByUserId, cleanPosts, id]);

  if (isLoading) return <Preloader />;

  return (
    <Styled.Wrapper>
      {!!postsIds.length &&
        postsIds.map((id) => (
          <ListItem key={id} id={id}>
            {postsMap[id].id} - {postsMap[id].body}
          </ListItem>
        ))}
    </Styled.Wrapper>
  );
};

export default PostsPage;
