import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding: 20px;
  background: ${({ theme }) => theme.backgrounds.primary};
  ${({ theme }) => theme.fonts.primary[60]};
`;
