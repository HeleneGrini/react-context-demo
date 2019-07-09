import React, { useState } from "react";
import AppWrapper from "./AppWrapper";
import Page from "./Page";
import { AppContext } from "./AppContext";

const initialAppState = {
  user: {
    name: "Navn Navnesen",
    role: "admin"
  },
  theme: "dark"
};

const App = () => {
  const [appState, setAppState] = useState(initialAppState);
  const onActionButtonClick = () =>
    setAppState(
      appState.theme === "light"
        ? { ...appState, theme: "dark" }
        : { ...appState, theme: "light" }
    );
  return (
    <AppContext.Provider value={{ appState, onActionButtonClick }}>
      <AppWrapper>
        <Page />
      </AppWrapper>
    </AppContext.Provider>
  );
};

export default App;
