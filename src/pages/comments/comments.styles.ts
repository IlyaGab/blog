import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  ${({ theme }) => theme.fonts.primary[20]};
`;

export const Body = styled.div`
  &:hover {
    text-decoration: none;
  }
`;
