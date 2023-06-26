import styled from "styled-components"; //@shared-ui
import { Link } from "react-router-dom";

//TODO: add styles to users component

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${({ theme }) => theme.fonts.primary[20]};
`;

export const UsersLink = styled(Link)`
  margin: 5px;
  width: fit-content;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    text-decoration: underline;
  }
`;
