import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding: 20px;
  background: ${({ theme }) => theme.colors.backgrounds.primary};
  ${({ theme }) => theme.fonts.primary[60]};
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    text-decoration: underline;
  }
`;
