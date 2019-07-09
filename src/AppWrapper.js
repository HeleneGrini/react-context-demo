import React, { useContext } from "react";
import "./AppWrapper.css";
import { AppContext } from "./AppContext";

export default props => {
  const [appState, dispatch] = useContext(AppContext);

  return (
    <div
      className="AppWrapper"
      style={
        appState.theme === "dark"
          ? { backgroundColor: "#121212", color: "white" }
          : { backgroundColor: "white" }
      }
    >
      {props.children}
    </div>
  );
};
