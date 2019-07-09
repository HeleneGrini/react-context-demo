import React, { useContext } from "react";
import ActionButton from "./ActionButton";
import { AppContext } from "./AppContext";

const Profile = () => {
  const { appState } = useContext(AppContext);

  return (
    <>
      <h1> Hei, {appState.user.name}</h1>
      <div> Din roll er: {appState.user.role}</div>
      <ActionButton>Bytt fargetema</ActionButton>
    </>
  );
};
export default Profile;
