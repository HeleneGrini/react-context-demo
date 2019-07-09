import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const ActionButton = props => {
  const context = useContext(AppContext);

  return (
    <button
      type="button"
      className={`btn btn-${context.appState.theme} mt-5`}
      onClick={context.onActionButtonClick}
    >
      {props.children}
    </button>
  );
};

export default ActionButton;
