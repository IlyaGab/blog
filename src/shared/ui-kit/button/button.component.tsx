import React from "react";
import { ButtonProps } from "./button.types";
import * as Styled from "./button.styles";

const Button: React.FC<ButtonProps> = ({ children, ...restProps }) => {
  return <Styled.Button {...restProps}>{children}</Styled.Button>;
};

export default Button;
