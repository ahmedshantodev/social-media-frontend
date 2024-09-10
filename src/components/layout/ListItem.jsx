import React from "react";

const ListItem = ({ key, className, children }) => {
  return (
    <li key={key} className={className}>
      {children}
    </li>
  );
};

export default ListItem;
