import React from "react";
import "./AppWrapper.css";

export default props => (
  <div
    className="AppWrapper"
    style={
      props.theme === "dark"
        ? { backgroundColor: "#121212", color: "white" }
        : { backgroundColor: "white" }
    }
  >
    {props.children}
  </div>
);
