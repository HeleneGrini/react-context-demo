import React from "react";
import ActionButton from "./ActionButton";

const Profile = props => (
  <>
    <h1> Hei, {props.user.name}</h1>

    <div> Din roll er: {props.user.role}</div>
    <ActionButton theme={props.theme} onClick={props.onActionButtonClick}>
      Bytt fargetema
    </ActionButton>
  </>
);

export default Profile;
