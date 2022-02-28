import React, { useState } from "react";
import "./style.css";
import { Box, Grid, Card, Button, Container, TextField } from "@mui/material";
import customStyle from "./style";
import successImg from "../../assets/success.png";




function ThankYou () {

    const classes = customStyle();
    return(
        <>
         <Grid item container>
        <Grid item xs={12} md={12} mt={2} container justifyContent="center">
          {/* Page Title */}
          <Box
        component="img"
        sx={{
          height: 190,
          width: 190,
          maxHeight: { xs: 190, md: 190 },
          maxWidth: { xs: 190, md: 190 },
        }}
        style={{
            textAlign:"center"
        }}
        src={successImg}
      />
        </Grid>
        <Grid item xs={12} md={12} mt={2} container justifyContent="center">
        <h4 className="wd-checkout-text" >
        Your request placed successfully. Booking id is #1234567890. Thank you.
        </h4>
        center
        </Grid>
       {/*  */}
       
       {/*  */}
        </Grid>
        </>
    )

}

export default ThankYou;