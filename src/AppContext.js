import React from "react";

export const AppContext = React.createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload
        }
      };
    case "role":
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload
        }
      };

    case "theme":
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };

    default:
      return state;
  }
};
