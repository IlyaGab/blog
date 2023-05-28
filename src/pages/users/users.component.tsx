import { useEffect } from "react";
import * as Styled from "./users.styles";
import { useUsersApi } from "@core/store";

const Users: React.FC = () => {
  const { getAllUsers, isLoading, usersIds, usersMap } = useUsersApi();

  useEffect(() => {
    getAllUsers();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  
  return (
    <Styled.Wrapper>
      {!!usersIds.length &&
        usersIds.map((id) => <div key={id}>{usersMap[id].name}</div>)}
    </Styled.Wrapper>
  );
};

export default Users;
