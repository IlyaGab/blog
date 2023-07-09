import { ChangeEvent, useEffect, useState } from "react";
import * as Styled from "./users.styles";
import { useUsersApi } from "@core/store";
import { dataTable } from "./users.data";
import { useSearchParams } from "react-router-dom";

// TODO: add search input

const Users: React.FC = () => {
  const { getAllUsers, cleanUsers, isLoading, usersIds, usersMap } = useUsersApi();

  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearchParams({ userName: value });
    setInputValue(value);
  };

  useEffect(() => {
    const userName = searchParams.get("userName");
    if (userName) {
      setInputValue(userName);
    }
  }, [searchParams]);

  useEffect(() => {
    getAllUsers();
    return () => {
      cleanUsers();
    };
  }, [getAllUsers, cleanUsers]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <input type="search" name="search" value={inputValue} onChange={handleChange} />

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
            usersIds
              .filter((id) => usersMap[id].name.toLowerCase().includes(inputValue))
              .map((id, index) => (
                <Styled.Tr even={index % 2 === 0} key={id}>
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
    </>
  );
};

export default Users;
