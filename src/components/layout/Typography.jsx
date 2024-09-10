import React from "react";

const Typography = (props) => {
  return props.variant ? (
    <props.variant key={props.key} className={props.className}>
      {props.children}
    </props.variant>
  ) : (
    <p key={props.key} className={props.className}>
      {props.children}
    </p>
  );
};

export default Typography;
