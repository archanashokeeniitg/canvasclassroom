import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Box } from "@material-ui/core/";
import "./MakeAnnouncement.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  bgcolor: "background.paper",
}));

export default function MakeAnnouncement(props) {
  console.log("propsssss", props);
  const classes = useStyles();
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleChange = (event) => {
    setSelectedCourse(event.target.value);
    console.log("after selecting", selectedCourse);
  };
  const handleFormSubmit = (e) => {
    console.log("form submitted");
  };
  return (
    <div className="container  p-5  solid">
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        <div>
          <TextField
            label=" "
            id="Subject"
            defaultValue=" "
            size="small"
            helperText="Subject"
          />

          <TextField
            id="outlined-select-currency-native"
            select
            label=" "
            value={selectedCourse}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            helperText="Please select course "
          >
            {props.courses.map((course) => (
              <option key={course.id} value={course.value}>
                {course.coursename}
              </option>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="write here.."
            multiline
            rows={4}
            defaultValue=""
            variant="outlined"
          />
        </div>
        <div>
          <Button variant="contained" color="secondary">
            Make Announcement!!
          </Button>
        </div>
      </form>
    </div>
  );
}
