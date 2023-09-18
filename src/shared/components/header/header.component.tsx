import React from "react";
import * as Styled from "./header.styles";

const Header: React.FC = () => {
  // TODO: Use router config. routerConfig.map(...)
  return (
    <Styled.Header>
      <Styled.NavigationLink to="/blog">Home</Styled.NavigationLink>
      <Styled.NavigationLink to="/users">Users</Styled.NavigationLink>
      <Styled.NavigationLink to="/news">News</Styled.NavigationLink>
    </Styled.Header>
  );
};

export default Header;
