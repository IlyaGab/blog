import styled, { css } from "styled-components";
import { InputProps } from "./input.types";

const commonInputStyles = css`
  border-radius: 0.25rem;
  box-sizing: content-box;
  height: 1rem;
  margin: 1.2rem;
  padding: 1rem 1rem;
  ${({ theme }) => theme.fonts.primary[20]}
`;
const inputStylesMap = {
  outlined: css`
    border: 1px solid ${({ theme }) => theme.colors.primary};
  `,
  filled: css`
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.backgrounds.primary};
  `,
  standard: css`
    padding: 4px 0px 5px;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  `,
};

export const Input = styled.input<InputProps>`
  ${commonInputStyles};
  ${({ variant }) => inputStylesMap[variant]}
`;
