import React from "react";
import Profile from "./Profile";

const Page = props => (
  <Profile
    user={props.user}
    theme={props.theme}
    onActionButtonClick={props.onActionButtonClick}
  />
);

export default Page;
