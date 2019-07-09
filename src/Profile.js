import React from "react";
import ActionButton from "./ActionButton";

const Profile = props => (
  <>
    <div> {props.user.name}</div>
    <div> {props.user.role}</div>
    <ActionButton theme={props.theme} onClick={props.onActionButtonClick}>
      Swith theme
    </ActionButton>
  </>
);

export default Profile;
