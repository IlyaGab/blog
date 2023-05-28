import { useEffect } from "react";
import * as Styled from "./users.styles";
import { useUsersApi } from "@store/users/user.hooks";

const Users: React.FC = () => {
  const { getAllUsers } = useUsersApi();
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <Styled.Wrapper>
      <h1>Hello medved</h1>
    </Styled.Wrapper>
  );
};

export default Users;
