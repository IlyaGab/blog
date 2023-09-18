import { HTMLAttributes, PropsWithChildren } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  variant: "text" | "contained" | "outlined";
}
