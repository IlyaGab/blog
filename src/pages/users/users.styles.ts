import styled, { css } from "styled-components"; //@shared-ui
import { Link } from "react-router-dom";

//TODO: add styles to users component

const evenStyles = css`
  background: ${({ theme }) => theme.colors.backgrounds.primary};
`;

const notEvenStyles = css``;

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

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  padding: 20px;
  ${({ theme }) => theme.fonts.primary[40]};
  font-weight: 700;
`;

export const Td = styled.td`
  word-wrap: break-word;
  text-align: center;
  padding: 5px;
  ${({ theme }) => theme.fonts.primary[20]};
`;

export const Tr = styled.tr<{ even?: boolean }>`
  ${({ even }) => (even ? evenStyles : notEvenStyles)}
`;
