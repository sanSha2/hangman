import React from "react";
import { show } from "../resources/moreFunctions";
//all imports

//function for notifications, diplays if a letter is already entered
const Notification = ({ showNotification }) => {
  let notiShow = "";
  if (showNotification) notiShow = "You have already entered this letter ";
  else notiShow = "";

  return (
    <div>
      <p id="notiShow">{notiShow}</p>
    </div>
  );
};

export default Notification;
