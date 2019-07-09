import React, { useState } from "react";
import AppWrapper from "./AppWrapper";
import Page from "./Page";

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
    <AppWrapper theme={appState.theme}>
      <Page
        user={appState.user}
        onActionButtonClick={onActionButtonClick}
        theme={appState.theme}
      />
    </AppWrapper>
  );
};

export default App;
