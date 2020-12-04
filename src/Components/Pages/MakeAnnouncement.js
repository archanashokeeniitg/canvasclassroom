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
const handleChange = (event) => {
  //setCurrency(event.target.value);
};

export default function MakeAnnouncement() {
  const classes = useStyles();
  const [currency, setCurrency] = useState("EUR");
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  return (
    <div className="container  p-5  solid">
      <form className={classes.root} noValidate autoComplete="off">
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
            value={currency}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            helperText="Please select course "
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
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
