import { useCommentsApi } from "@core/store/comments";
import React, { useEffect } from "react";
import * as Styled from "./comments.styles";
import { Preloader } from "@shared/ui-kit/preloader";

interface CommentsPropsTypes {
  id: string;
}

const Comments: React.FC<CommentsPropsTypes> = ({ id }) => {
  const { getCommentsById, cleanComments, isLoading, commentsIds, commentsMap } = useCommentsApi();

  useEffect(() => {
    getCommentsById(id);
    return () => {
      cleanComments();
    };
  }, [getCommentsById, cleanComments, id]);

  if (isLoading) return <Preloader />;

  return (
    <Styled.Wrapper>
      {!!commentsIds.length &&
        commentsIds.map((id) => (
          <Styled.Body key={id}>
            {commentsMap[id].postId} -{commentsMap[id].body}
          </Styled.Body>
        ))}
    </Styled.Wrapper>
  );
};

export default Comments;
