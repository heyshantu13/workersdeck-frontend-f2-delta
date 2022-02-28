import React, { useState } from "react";
import  "./style.css";
import { Box, Grid, Card, Button, Container, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import isWeekend from "date-fns/isWeekend";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import StaticTimePicker from "@mui/lab/StaticTimePicker";
import customStyle from "./style";
import * as moment from "moment";
import {useNavigate } from "react-router-dom";


const style = {
  maxWidth: 380,
};

function SelectTime() {
  const navigate = useNavigate();
  const classes = customStyle();
  const [booking, setBooking] = useState({
    time: new Date(),
    date: new Date(),
  });
  var maxdate = moment().add(5, "d").toDate();
  var mindate = moment().toDate();

const handleBooking = (data) => {
  navigate("/confirmation-booking");

}
  return (
    <>
      <Grid item container>
        <Grid item xs={12} md={12} mt={2}>
          {/* Page Title */}
          <Box xs={12} md={12} mb={2}>
            <h4 className="wd-checkout-text" sx={style}>
              WHEN WOULD YOU AVAILABLE?
            </h4>
          </Box>
        </Grid>

        <Container maxWidth="xl" className="wd-myprofile-layout">
          <Card
            lg={12}
            sm={12}
            className={classes.SecondaryCard}
            style={{
              overflow: "auto",
            }}
          >
            <Grid item container p={3}>
              <Grid sm={12} xs={12} md={6} lg={6} item mt={2}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <StaticTimePicker
                    ampm
                    orientation="landscape"
                    openTo="minutes"
                    value={booking.time}
                    minTime={new Date(0, 0, 0, 10, 30)}
                    maxTime={new Date(0, 0, 0, 19, 30)}
                    onChange={(newValue) => {
                      setBooking({
                        ...booking,
                        time: newValue,
                      });
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              {/* Time picker */}
              <Grid sm={12} xs={12} md={5} lg={6} item mt={2}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <StaticDatePicker
                    orientation="landscape"
                    maxDate={maxdate}
                    minDate={mindate}
                    openTo="day"
                    value={booking.date}
                    shouldDisableDate={isWeekend}
                    onChange={(newValue) => {
                      setBooking({
                        ...booking,
                        date: newValue,
                      });
                    }}
                    format={"YYYY/MM/DD"}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <Grid
                  container
                  direction="column"
                  alignItems="right"
                  justify="right"
                  mt={2}
                >
                  <Button variant="contained" onClick={() => handleBooking(booking)}>
                    Preview Booking
                  </Button>
                </Grid>
              </Grid>
              {/* Time Picker */}
            </Grid>
          </Card>
        </Container>
      </Grid>
    </>
  );
}

export default SelectTime;