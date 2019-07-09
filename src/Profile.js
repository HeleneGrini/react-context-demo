import React, { useContext } from "react";
import ActionButton from "./ActionButton";
import { AppContext } from "./AppContext";

const Profile = () => {
  const [appState, dispatch] = useContext(AppContext);
  return (
    <>
      <h1>
        Hei,
        <input
          value={appState.user.name}
          onChange={e => dispatch({ type: "name", payload: e.target.value })}
          style={
            appState.theme === "dark"
              ? { backgroundColor: "#121212", color: "white" }
              : { backgroundColor: "white" }
          }
        />
      </h1>
      <div> Din roll er: {appState.user.role}</div>
      <ActionButton>Bytt fargetema</ActionButton>
    </>
  );
};
export default Profile;
