import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Typography } from "@material-ui/core";
import { API, graphqlOperation } from "aws-amplify";
import { createMeeting } from "../../graphql/mutations";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import { yellow } from "@material-ui/core/colors";
import awsExports from "../../aws-exports";
import "./Meetings.css";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "",
    flexWrap: "",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function Meetings(props) {
  const classes = useStyles();
  const [dateSelected, setDateSelected] = useState(new Date());
  const [meetingSubject, setMeetingSubject] = useState("");
  const [alert, setAlert] = useState(false);

  const handleDateSubmit = (e) => {
    e.preventDefault();
    console.log("date is ", { dateSelected }, { meetingSubject });

    const meeting = {
      meetingsubject: meetingSubject,
      meetingtime: dateSelected,
    };
    setAlert(true);
    sendMeetingToDB(meeting);
  };

  const sendMeetingToDB = async (meeting) => {
    console.log("inside db write", meeting);
    try {
      await API.graphql(graphqlOperation(createMeeting, { input: meeting }));
    } catch (err) {
      console.log("db write error");
    }
  };
  return (
    <div className="container  p-5 justify-content solid">
      {alert ? (
        <div className="alert alert-success alert-dismissible">
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            onClick={() => {
              setAlert(false);
            }}
          >
            &times;
          </button>
          <strong>Success!</strong> Meeting successfully created!!!
        </div>
      ) : null}
      <div>
        <Typography color="secondary" gutterBottom>
          Set Meetings/Reminders
          <br />
          <WatchLaterIcon style={{ color: yellow[500] }} />
        </Typography>
      </div>

      <div className="p-5  justifyContent  align-center">
        <center>
          <form
            onSubmit={handleDateSubmit}
            className={classes.container}
            noValidate
          >
            <TextField
              id="datetime-local"
              label="Time"
              type="datetime-local"
              // defaultValue={new Date()}
              value={dateSelected}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={({ target }) => setDateSelected(target.value)}
            />
            <TextField
              id="meetingSubject"
              label="Meeting Subject"
              type=""
              // defaultValue={new Date()}
              value={meetingSubject}
              //   className={classes.textField}
              //   InputLabelProps={{
              //     shrink: true,
              //   }}
              onChange={({ target }) => setMeetingSubject(target.value)}
            />
            <Button variant="contained" color="secondary" type="submit">
              Submit
            </Button>
          </form>
        </center>
      </div>
    </div>
  );
}
