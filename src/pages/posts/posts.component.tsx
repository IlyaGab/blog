import { usePostsApi } from "@core/store/posts";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PostsPage = () => {
  const { getAllPosts, isLoading, postsIds, postsMap } = usePostsApi();

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

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
