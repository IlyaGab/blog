import styled, { css } from "styled-components";
import { ButtonProps } from "./button.types";

const commonStyles = css`
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.03rem;
  text-transform: uppercase;
  min-width: 64px;
  border-radius: 4px;
  padding: 5px 20px;
  ${({ theme }) => theme.fonts.primary[20]}
`;

const buttonStylesMap = {
  text: css`
    background-color: transparent;
    color: #1976d2;
    border: 0;
    &:hover {
      background-color: ${({ theme }) => theme.colors.backgrounds.primary};
    }
  `,
  outlined: css`
    border: 1px solid green;
  `,
  contained: css`
    border: 1px solid blue;
  `,
};

//{variant: contained | outlined | text}
export const Button = styled.button<Pick<ButtonProps, "variant">>`
  ${commonStyles}
  ${({ variant }) => buttonStylesMap[variant]}
`;
