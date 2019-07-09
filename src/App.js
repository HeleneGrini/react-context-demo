import React, { useState, useReducer } from "react";
import AppWrapper from "./AppWrapper";
import Page from "./Page";
import { AppContext, reducer } from "./AppContext";

const initialAppState = {
  user: {
    name: "Navn Navnesen",
    role: "admin"
  },
  theme: "dark"
};

const App = () => (
  <AppContext.Provider value={useReducer(reducer, initialAppState)}>
    <AppWrapper>
      <Page />
    </AppWrapper>
  </AppContext.Provider>
);

export default App;
