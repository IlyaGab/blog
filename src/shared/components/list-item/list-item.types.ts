import { PropsWithChildren } from "react";

export interface ListItemProps extends PropsWithChildren {
  id: string;
  key: string;
}
