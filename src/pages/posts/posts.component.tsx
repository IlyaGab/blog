import { usePostsApi } from "@core/store/posts";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PostsPage: React.FC = () => {
  const { getAllPosts, cleanAllPosts, isLoading, postsIds, postsMap } = usePostsApi();

  useEffect(() => {
    getAllPosts();
    return () => {
      cleanAllPosts();
    };
  }, [getAllPosts, cleanAllPosts]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      {!!postsIds.length &&
        postsIds.map((id) => (
          <Link key={id} to={`${postsMap[id].userId}`}>
            {postsMap[id].body}
          </Link>
        ))}
    </div>
  );
};

export default PostsPage;
