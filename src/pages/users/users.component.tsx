import { useEffect } from "react";
import * as Styled from "./users.styles";
import { useUsersApi } from "@core/store";
import { dataTable } from "./users.data";

// TODO: add search input

const Users: React.FC = () => {
  const { getAllUsers, cleanUsers, isLoading, usersIds, usersMap } = useUsersApi();

  useEffect(() => {
    getAllUsers();
    return () => {
      cleanUsers();
    };
  }, [getAllUsers, cleanUsers]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Styled.Table>
      <thead>
        {dataTable.map((headerCell) => (
          <tr key={headerCell.id}>
            <Styled.Th>{headerCell.id}</Styled.Th>
            <Styled.Th>{headerCell.name}</Styled.Th>
            <Styled.Th>{headerCell.username}</Styled.Th>
            <Styled.Th>{headerCell.email}</Styled.Th>
            <Styled.Th>{headerCell.phone}</Styled.Th>
            <Styled.Th>{headerCell.website}</Styled.Th>
          </tr>
        ))}
      </thead>
      <tbody>
        {!!usersIds.length &&
          usersIds.map((id, index) => (
            <Styled.Tr even={index % 2 !== 0} key={id}>
              <Styled.Td>{usersMap[id].id}</Styled.Td>
              <Styled.Td>
                <Styled.UsersLink to={`${id}`}>{usersMap[id].name}</Styled.UsersLink>
              </Styled.Td>
              <Styled.Td>{usersMap[id].username}</Styled.Td>
              <Styled.Td>{usersMap[id].email}</Styled.Td>
              <Styled.Td>{usersMap[id].phone}</Styled.Td>
              <Styled.Td>{usersMap[id].website}</Styled.Td>
            </Styled.Tr>
          ))}
      </tbody>
    </Styled.Table>
  );
};

export default Users;
