import styled, { css } from "styled-components";
import { ButtonProps } from "./button.types";

const buttonColors = {
  colors: {
    primary: "#ffffff",
    secondary: "#000000",
  },
  backgrounds: {
    primary: "#f5f5f5",
    secondary: "#000000",
    transparent: "transparent",
  },
};

const buttonBoxShadow = css`
  box-shadow: 1px 1px 1px ${buttonColors.colors.secondary};
`;

const commonButtonStyles = css`
  font-size: 0.875rem; // rem or px.
  line-height: 1.75;
  letter-spacing: 0.03rem; // rem or px.
  text-transform: uppercase;
  min-width: 64px;
  border-radius: 4px;
  padding: 5px 20px;
  margin: 10px 20px auto;
  ${({ theme }) => theme.fonts.primary[20]};
`;

const buttonStylesMap = {
  text: css`
    background-color: ${buttonColors.backgrounds.transparent};
    color: ${buttonColors.backgrounds.secondary};
    border: 0;
    &:hover {
      background-color: ${buttonColors.backgrounds.primary};
      ${buttonBoxShadow}
    }
  `,
  outlined: css`
    background-color: ${buttonColors.backgrounds.transparent};
    border: 1px solid ${buttonColors.colors.secondary};
    color: ${buttonColors.colors.secondary};
    &:hover {
      background-color: ${buttonColors.backgrounds.primary};
      ${buttonBoxShadow}
    }
  `,
  contained: css`
    border: 0;
    color: ${buttonColors.colors.primary};
    background-color: ${buttonColors.backgrounds.secondary};
    &:hover {
      opacity: 0.9;
      ${buttonBoxShadow}
    }
  `,
};

//{variant: contained | outlined | text}
export const Button = styled.button<Pick<ButtonProps, "variant">>`
  ${commonButtonStyles}
  ${({ variant }) => buttonStylesMap[variant]}
`;
