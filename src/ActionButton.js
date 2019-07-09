import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const ActionButton = props => {
  const [appState, dispatch] = useContext(AppContext);

  return (
    <button
      type="button"
      className={`btn btn-${appState.theme} mt-5`}
      onClick={() =>
        dispatch({
          type: "theme"
        })
      }
    >
      {props.children}
    </button>
  );
};

export default ActionButton;
