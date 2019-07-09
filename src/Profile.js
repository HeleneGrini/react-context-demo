import React from "react";
import ActionButton from "./ActionButton";
import { AppContext } from "./AppContext";

const Profile = props => (
  <AppContext.Consumer>
    {({ appState }) => (
      <>
        <h1> Hei, {appState.user.name}</h1>
        <div> Din roll er: {appState.user.role}</div>
        <ActionButton>Bytt fargetema</ActionButton>
      </>
    )}
  </AppContext.Consumer>
);

export default Profile;
