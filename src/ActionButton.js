import React from "react";
import { AppContext } from "./AppContext";

const ActionButton = props => (
  <AppContext.Consumer>
    {({ appState, onActionButtonClick }) => (
      <button
        type="button"
        className={`btn btn-${appState.theme} mt-5`}
        onClick={onActionButtonClick}
      >
        {props.children}
      </button>
    )}
  </AppContext.Consumer>
);

export default ActionButton;
