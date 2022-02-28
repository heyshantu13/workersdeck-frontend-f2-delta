import React,{ useState} from "react";
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  Card,
  CircularProgress
} from "@mui/material";
import { Link } from "react-router-dom";
import "./style.css";
import customStyle from "./style";
import {useNavigate } from "react-router-dom";

const style = {
    maxWidth: 360,
  };

function BookingConfirmation () {
  const navigate = useNavigate();

    const handleConfirmBooking = () => {
        setBtnloading(true);
        setTimeout(() => {
          //history.push("/");
          navigate("/confirmed");
       }, 500);
    }

    const [bntloading, setBtnloading] = useState(false);

   
    const classes = customStyle();
    return(
    <>
     <Grid item container>
        <Grid item xs={12} md={12} mt={2}>
          {/* Page Title */}
          <Box xs={12} md={12} mb={2}>
            <h4 className="address-head" sx={style}>
              CONFIRM BOOKING
            </h4>
          </Box>
          {/* Page Title End */}
        </Grid>
        {/* End Page TITLE GRID */}
        <Grid item container>

        <Grid sm={12} xs={12} md={12} lg={12} item mt={2} pl={12}>
            Booking Summary
        </Grid>

        <Grid sm={12} xs={12} md={6} lg={6}  mt={2} item ml={12}>
    <Card
      lg={12}
      sm={12}
      className={classes.CheckoutCard}
      >
        <Grid item container>
        <Grid sm={3} xs={12} md={3} lg={3} item mt={4} ml={3} >Booking Date</Grid>
        <Grid sm={3} xs={12} md={3} lg={3} item mt={3} ml={3} className={'wd-pages-summary-h1'}>7th Nov 2021 (Monday)</Grid>
        </Grid>
        <Grid item container>
        <Grid sm={3} xs={12} md={3} lg={3} item mt={4} ml={3} >Booking Time</Grid>
        <Grid sm={3} xs={12} md={3} lg={3} item mt={3} ml={3} className={'wd-pages-summary-h1'}>10:00 AM (Monday)</Grid>
        </Grid>
        <Grid item container>
        <Grid sm={3} xs={12} md={3} lg={3} item mt={4} ml={3} >Worker Info</Grid>
        <Grid sm={3} xs={12} md={3} lg={3} item mt={3} ml={3} className={'wd-pages-summary-h1'}>XYZ Cleaning Company</Grid>
        </Grid>
    </Card>
    
  </Grid>
  {/* total */}
  <Grid sm={12} xs={12} md={5} lg={5}  mt={2} item >
    <Card
      lg={12}
      sm={12}
      className={classes.CheckoutCard}
      >
        <Grid item container>
        <Grid sm={3} xs={12} md={3} lg={3} item mt={4} ml={3} >Service Charge</Grid>
        <Grid sm={3} xs={12} md={3} lg={3} item mt={3} ml={3} className={'wd-pages-summary-h1'}>₹1299</Grid>
        </Grid>
        <Grid item container>
        <Grid sm={3} xs={12} md={3} lg={3} item mt={4} ml={3} >Booking Fees</Grid>
        <Grid sm={3} xs={12} md={3} lg={3} item mt={3} ml={3} className={'wd-pages-summary-h1'}>₹49</Grid>
        </Grid>
        <Grid item container>
        <Grid sm={3} xs={12} md={3} lg={3} item mt={4} ml={3} >GST (18%)</Grid>
        <Grid sm={3} xs={12} md={3} lg={3} item mt={3} ml={3} className={'wd-pages-summary-h1'}>₹49</Grid>
        </Grid>
        <Grid item container>
        <Grid sm={3} xs={12} md={3} lg={3} item mt={4} ml={3} className={'wd-pages-summary-h1'} style={{textAlign:'left'}}>Total</Grid>
        <Grid sm={3} xs={12} md={3} lg={3} item mt={3} ml={3} className={'wd-pages-summary-h1'}>₹49</Grid>
        </Grid>
    </Card>
    <Grid container direction="column" alignItems="right" justify="right" mt={3}>
        <Button variant="contained" className={"wd-pages-card-view-btn"} onClick={handleConfirmBooking}>
        {bntloading ? (
                    <CircularProgress
                      size={30}
                      thickness={6}
                      sx={{
                        color: "#ffffff",
                      }}
                    />
                  ) : (
                    "Book Now"
                  )}
        </Button>
        </Grid>
  </Grid>
  {/* total end */}
        </Grid>
        
        </Grid>
    </>
    )
}

export default BookingConfirmation;