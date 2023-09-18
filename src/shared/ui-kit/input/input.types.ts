import { HTMLAttributes } from "react";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  type: string;
  variant: "outlined" | "filled" | "standard";
}
