import { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useUsersApi } from "@core/store";
import { Input } from "@shared/ui-kit/input";
import { Preloader } from "@shared/ui-kit/preloader";
import { dataTable } from "./users.data";
import * as Styled from "./users.styles";

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

  if (isLoading) return <Preloader />;

  return (
    <>
      <Input
        placeholder="Search..."
        type="search"
        variant="outlined"
        defaultValue={inputValue}
        onChange={handleChange}
      />
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
              .filter((id) => usersMap[id].name.toLowerCase().includes(inputValue.toLowerCase()))
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
