import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  FormControl,
  Radio,
  FormControlLabel,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import customStyle from "../../assets/mui_style";
import UserAddressService from "../../services/address-service";
import { useDispatch, useSelector, } from "react-redux";
import { toast } from "react-toastify";

const style = {
  maxWidth: 360,
};

const SelectAddress = () => {

  const dispatch = useDispatch();
  const classes = customStyle();
  const [loading, setLoading] = useState(true);
  const [dataAvail,setDataAvail] = useState(false);
  const notify = (msg) =>
  toast.error(msg, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
  });

  useEffect(() => {
    UserAddressService.fetchUserAddress().then((result) => {
      console.log(result);
      if('data' in result ) {
        setDataAvail(true);
      }else{
        notify("You don't have any address.Please add new one");
      }     
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
      notify(error);
    });
  },[]);


 

  return (
    <>
      <Grid item container>
      <Grid item xs={12} md={12} mt={2}>
              <Box xs={12} md={12} mb={2}>
              <h4 className={classes.addressHead} sx={style}>
                  SELECT ADDRESS
               </h4>
              </Box>
      </Grid>
        <Grid item xs={12} md={12} mt={1}>
        <Container maxWidth="lg" >
        <hr></hr>
        <Box component="span" sx={{ p: 2 }}>
        {loading ? (
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <CircularProgress
            size={60}
            thickness={4}
            sx={{
              color: "#3f51b5",
            }}
          />
          </div>
        ) : (
          (dataAvail) ? (
            <h1>data avail</h1>
          ): (
            <h1>data not avail</h1>
          )
        )}
        <hr></hr>
        </Box>
        {/* Add New Address section */}
        <Box component="span" sx={{ p: 4 }}>
              <Link to="/new-address">
                <Typography
                  ml={4}
                  component="h3"
                  className={classes.wd_address_new_text}
                >
                  + ADD NEW ADDRESS
                </Typography>
              </Link>
            </Box>
        {/* End */}
        {/* Checkout Button */}
        <Box component="span" sx={{ p: 4 }} textAlign="center">
              <Grid item xs={12} md={12} mt={3}>
                <Link to="/select-time" >
                  <Button variant="contained" className={classes.wd_primary_btn}>
                    Continue with this address
                  </Button>
                </Link>
              </Grid>
        </Box>
        {/* End Checkout  button */}
        </Container>
        </Grid>
      </Grid> 
      {/* End Griud */}
    </>
  );
}

export default SelectAddress;