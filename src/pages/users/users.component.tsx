import { useEffect } from "react";
import * as Styled from "./users.styles";
import { useUsersApi } from "@core/store";
import { Link } from "react-router-dom";

const Users: React.FC = () => {
  const { getAllUsers, isLoading, usersIds, usersMap } = useUsersApi();

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Styled.Wrapper>
      {!!usersIds.length &&
        usersIds.map((id) => (
          <Styled.UsersLink key={id} to={`/users/${id}`}>
            {usersMap[id].name}
          </Styled.UsersLink>
        ))}
    </Styled.Wrapper>
  );
};

export default Users;
