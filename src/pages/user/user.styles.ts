import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  margin: 20px auto;
  padding: 10px; // TODO: Use px or rem
  width: 80%; // TODO: Remove 80% value. Use pagging/margin instead.
  height: 30%; // TODO: Remove 30% value. Use pagging/margin instead.
  min-height: 10rem; // TODO: Use px or rem
  border: 2px solid ${({ theme }) => theme.colors.backgrounds.primary};
  border-radius: 5px;
  ${({ theme }) => theme.fonts.primary[20]}
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-around;
  ${({ theme }) => theme.fonts.primary[20]}
`;

export const Title = styled.div`
  padding: 10px 0px;
  text-align: center;
  ${({ theme }) => theme.fonts.primary[40]}
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
`;
