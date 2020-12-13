import React from "react";
import { Typography } from "@material-ui/core";

export default function NotificationGallery(props) {
  return (
    <div>
      {props.notifications.map((notification, i) => (
        <div className="" key={notification.id}>
          <Typography variant="h5"></Typography>
          <Typography variant="body2">
            You have set a meeting at {notification.time} for &nbsp;
            {notification.subject}
          </Typography>
        </div>
      ))}
    </div>
  );
}
