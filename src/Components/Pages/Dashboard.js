import React from "react";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";
// import "./Dashboard.css";

import NotificationsIcon from "@material-ui/icons/Notifications";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import MakeAnnouncement from "./MakeAnnouncement";
import { yellow } from "@material-ui/core/colors";

export default function Dashboard() {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <Grid container spacing={3} justify="center">
          <Grid item>
            <Card className="card infected">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Courses
                  <br />
                  <ImportContactsIcon color="primary" />
                </Typography>
                <Typography variant="h5"></Typography>
                <Typography color="textSecondary"></Typography>
                <Typography variant="body2">
                  Lorem Ipsum is simply dummy.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className="card infected">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Upcoming Meetings
                  <br />
                  <WatchLaterIcon style={{ color: yellow[500] }} />
                </Typography>
                <Typography variant="h5"></Typography>
                <Typography color="textSecondary"></Typography>
                <Typography variant="body2">
                  Lorem Ipsum is simply dummy.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className="card infected">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Notifications
                  <br />
                  <NotificationsIcon color="secondary" />
                </Typography>
                <Typography variant="h5"></Typography>
                <Typography></Typography>
                <Typography variant="body2">
                  Lorem Ipsum is simply dummy.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div container style={{ justifyContent: "center" }}>
        <MakeAnnouncement />
      </div>
    </div>
  );
}
