import { usePostsApi } from "@core/store/posts";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

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

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      {!!postsIds.length &&
        postsIds.map((id) => (
          <li key={id}>
            {postsMap[id].id} - {postsMap[id].body}
          </li>
        ))}
    </div>
  );
};

export default PostsPage;
