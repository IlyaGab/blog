import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  ${({ theme }) => theme.fonts.primary[20]};
`;

export const ListItem = styled.li`
  list-style-type: none;
`;
