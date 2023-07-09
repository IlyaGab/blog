import styled, { css } from "styled-components";
import { InputProps } from "./input.types";

const commonInputStyles = {};

const inputStylesMap = {
  outlined: css`
    border: 1px solid red;
  `,
  filled: css`
    border: none;
    background: ${({ theme }) => theme.colors.backgrounds.primary};
  `,
  standard: css``,
};

export const Input = styled.input<Pick<InputProps, "variant">>`
  ${({ variant }) => inputStylesMap[variant]}
`;
