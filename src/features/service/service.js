import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Card,
} from "@mui/material/";
import styles from "../../assets/main.module.css";
import customStyle from "./style";
import muistyle from "../../assets/mui_style";


const ServiceList = () => {
  const custommui = muistyle;
    return(
        <>
        <Grid container justifyContent="center" alignItems="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} mt={4} >
          <Card className={custommui.wd_card} sx={{
            height: '68px',
          }}>
           <Grid item xs={12} sm={12} md={12}  mt={1} ml={2}>
           <Button variant="contained" className={custommui.sub_cat_btn}>Contained</Button>
           <Button variant="contained" className={custommui.sub_cat_btn}>Contained</Button>
           <Button variant="contained" className={custommui.sub_cat_btn}>Contained</Button>
            <Button variant="contained" className={custommui.sub_cat_btn}>Contained</Button>
           </Grid>
           

          </Card>
        </Grid>
        </Grid>
        </>
    )
}

export default ServiceList;