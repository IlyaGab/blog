import React from "react";
import { ButtonType } from "./button.types";

const Button: React.FC<ButtonType> = ({ name, onClick }) => {
  return <button onClick={onClick}>{name}</button>;
};

export default Button;
