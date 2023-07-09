import React from "react";
import { InputProps } from "./input.types";
import * as Styled from "./input.styles";

const Input: React.FC<InputProps> = ({ ...restProps }) => {
  return <Styled.Input {...restProps} />;
};

export default Input;
