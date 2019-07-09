import React from "react";
import "./AppWrapper.css";
import { AppContext } from "./AppContext";
import { stat } from "fs";

export default props => (
  <AppContext.Consumer>
    {syktLameNavngivning => (
      <div
        className="AppWrapper"
        style={
          syktLameNavngivning.appState.theme === "dark"
            ? { backgroundColor: "#121212", color: "white" }
            : { backgroundColor: "white" }
        }
      >
        {props.children}
      </div>
    )}
  </AppContext.Consumer>
);
