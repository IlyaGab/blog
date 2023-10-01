import React, { useState } from "react";
import * as Styled from "./list-item.styles";
import { Comments } from "@pages/comments";
import { ListItemProps } from "./list-item.types";

const ListItem: React.FC<ListItemProps> = ({ children, ...restProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((value) => !value);
  };

  return (
    <Styled.ListItem onClick={handleClick}>
      {children}
      {isOpen && <Comments {...restProps} />}
    </Styled.ListItem>
  );
};

export default ListItem;
