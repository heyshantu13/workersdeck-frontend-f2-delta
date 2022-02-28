import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Card,
  Container,
  Paper,
  Stack,
  Rating,
} from "@mui/material/";
import styles from "../../assets/main.module.css";
import customStyle from "./style";
import muistyle from "../../assets/mui_style";
import { styled } from "@mui/material/styles";
import {useSelector,useDispatch} from "react-redux";
import  "./style.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate } from "react-router-dom";
import { bookingServiceSlice } from "./serviceSlice";


const ServiceList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const notify = (msg) => toast.error(msg,{
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    });

  const custommui = muistyle;
  const classes = customStyle();
  const serviceResult = useSelector((state) => state.services.data);
  const userdata = localStorage.getItem("user");
  console.log(userdata,"userdata");

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleBooking = (service) => {
    if(!isLoggedIn){
      notify("Please Login First To Complete Booking");
      navigate("/login");
    }else{
      navigate("/select-address");
    }
  };

    return(
        <>
        <ToastContainer />
        <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
            {/* Sub categories */}
                <Grid item xs={12} sm={12} md={12} mt={2}>
                <Container maxWidth="xl">
                  <Card lg={12} sm={12}  className={classes.ThirdCard}>
                    <Stack direction="row" spacing={2} mt={2}>
                    {serviceResult.subcategories.map((subcat,i) => (
                       <Item spacing={2} key={i} className={`${classes.wdSubcategories} ${!i ? classes.wdSubcategoriesActive : ""}`  }>{subcat.name}</Item>
                    ))}
                      
                    </Stack>
                  </Card>
                </Container>
              </Grid>
              {/* Subcategories end */}
        </Grid>
        </Grid>

         <Grid container>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            {/* Show service Card Here */}
            {serviceResult.services.map((service,i) => (
              
               <Container maxWidth="xl" className={classes.wd_myprofile_layout}  key={i}>
                 <Card lg={12} sm={12} className={classes.ServiceCard}>
                 <Grid container>
                   {/* Image  */}
                   <Grid item xs={12} sm={12} md={5} lg={5}>
                   <Box
                component="img"
                mt={3}
                sx={{
                  height: 180,
                  width: 300,
                  maxHeight: { xs: 233, md: 182 },
                  maxWidth: { xs: 350, md: 300 },
                  marginLeft: "2rem",
                }}
                src={service.service_image}
              />
                   </Grid>
                   <Grid item xs={12} sm={12} md={7} lg={7}>
                   <Typography
                    varient="h4"
                    className={classes.wdServiceCardh1}
                    mt={2}
                    ml={5}
                  >
                    {service.service_name}
                  </Typography>
                  <Typography
                    varient="subtitle1"
                    className={classes.wdServiceCardSubtitle}
                    mt={2}
                    ml={5}
                  >
                    {service.service_description}
                  </Typography>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      className={classes.wdRating}
                    />
                    
                                     
                  <span
                    className={classes.servicePricing}
                  >
                     &#x20B9; {service.service_charge}
                  </span>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Button
                    variant="contained"
                    className={classes.bookService}
                    onClick={()=> handleBooking(service)}
                  >
                    Book Service
                  </Button>
                  </Grid>
                  {/* end book button */}
                   </Grid>
                   {/* Image end */}
                 </Grid>
                 </Card>
               </Container>
            ))}
            {/* End Service Card Here */}
              
          </Grid>
         <Grid item xs={12} sm={12}  md={4} lg={4}>

         </Grid>
        </Grid>
        </>
    )
}

export default ServiceList;