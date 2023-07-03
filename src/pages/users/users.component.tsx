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
    <table>
      <thead>
        {dataTable.map((headerCell) => (
          <tr key={headerCell.id}>
            <th>{headerCell.id}</th>
            <th>{headerCell.name}</th>
            <th>{headerCell.username}</th>
            <th>{headerCell.email}</th>
            <th>{headerCell.phone}</th>
            <th>{headerCell.website}</th>
          </tr>
        ))}
      </thead>
      <tbody>
        {!!usersIds.length &&
          usersIds.map((id) => (
            <tr key={id}>
              <td>{usersMap[id].id}</td>
              <td>
                <Styled.UsersLink to={`${id}`}>{usersMap[id].name}</Styled.UsersLink>
              </td>
              <td>{usersMap[id].username}</td>
              <td>{usersMap[id].email}</td>
              <td>{usersMap[id].phone}</td>
              <td>{usersMap[id].website}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Users;
