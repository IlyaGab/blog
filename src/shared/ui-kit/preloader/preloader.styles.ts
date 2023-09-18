import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Preloader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 16px solid ${({ theme }) => theme.colors.backgrounds.primary};
  border-top: 16px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 1s linear infinite;
`;
