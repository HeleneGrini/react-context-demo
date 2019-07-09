import React from "react";

const ActionButton = props => {
  return (
    <button
      type="button"
      className={`btn btn-${props.theme} mt-5`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ActionButton;
