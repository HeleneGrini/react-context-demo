import React from "react";

const ActionButton = props => {
  return (
    <button
      type="button"
      className={`btn btn-${props.theme}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ActionButton;
