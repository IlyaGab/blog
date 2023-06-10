import React from "react";
import * as Styled from "./header.styles";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Styled.Header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/todos">Todos</NavLink>
      <NavLink to="/news">News</NavLink>
    </Styled.Header>
  );
};

export default Header;
