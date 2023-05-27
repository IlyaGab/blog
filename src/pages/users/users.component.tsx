import * as Styled from "./users.styles";
import type { UsersProps } from "./users.types";


const Users: React.FC<UsersProps> = () => {
  return (
    <Styled.Wrapper>
      <h1>Hello medved</h1>
    </Styled.Wrapper>
  )
};

export default Users;
