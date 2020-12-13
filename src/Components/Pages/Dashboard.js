import React from "react";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";
// import "./Dashboard.css";

import NotificationsIcon from "@material-ui/icons/Notifications";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import { yellow } from "@material-ui/core/colors";
import Meetings from "./Meetings";
import Notifications from "./Notifications";
import ListCourses from "./ListCourses";

export default function Dashboard() {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <Grid container spacing={3} justify="center">
          <Grid item>
            <Card className="card infected">
              <CardContent>
                <Typography color="primary" gutterBottom>
                  Courses
                  <br />
                  <ImportContactsIcon color="primary" />
                </Typography>
                <ListCourses />
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card className="card infected">
              <CardContent>
                <Typography color="primary" gutterBottom>
                  Notifications
                  <br />
                  <NotificationsIcon color="secondary" />
                </Typography>
                <Notifications />
                <Typography variant="h5"></Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div container style={{ justifyContent: "center" }}>
        <Meetings />
      </div>
    </div>
  );
}
