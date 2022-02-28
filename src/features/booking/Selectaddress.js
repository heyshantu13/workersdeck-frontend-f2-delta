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
} from "@mui/material";
import { Link } from "react-router-dom";
import customStyle from "../../assets/mui_style";
import UserAddressService from "../../services/address-service";
import { useDispatch, useSelector, } from "react-redux";



const style = {
  maxWidth: 360,
};

function SelectAddress() {

  const classes = customStyle();
  let myaddress = null;

  const initAddressVal = {
    uid: "",
    type: "",
    address: "",
    pincode: "",
  };

  const [address, setAddress] = useState(initAddressVal);
  const [addressId, setAddressId] = useState(0);

  function handleClick(e) {
    setAddressId(e.target.value);
    console.log(addressId);
  }

  const getData = async () => {  
    await UserAddressService.fetchUserAddress()
    .then(res => {  
      console.log(res)  
    })  
    .catch(err => {  
      console.log(err)  
    });  
  }  


  return (
    <>
      <Grid item container>
        <Grid item xs={12} md={12} mt={2}>
          {/* Page Title */}
          <Box xs={12} md={12} mb={2}>
            <h4 className={classes.addressHead} sx={style}>
              SELECT ADDRESS
            </h4>
          </Box>
          {/* Page Title End */}
        </Grid>

        <Grid item xs={12} md={12} mt={1}>
          <hr className="divider"></hr>
          <Container maxWidth="xl" p={2}>
            {/* Address box here */}
            <Box component="span" sx={{ p: 2 }}>
            <Grid item xs={12} md={12} ml={3}>
<FormControl component="fieldset">
  <FormControlLabel
    value="11"
    control={<Radio />}
    label="Home"
    onClick={handleClick}
  />
</FormControl>

<Typography ml={4} component="h3" className={classes.address_text}>
  123 Demo Address,Nagpur
</Typography>
</Grid>
<hr className="divider"></hr>
            </Box>
            {/* Address box end here */}

            <Box component="span" sx={{ p: 4 }}>
              <Link to="/checkout/new-address">
                <Typography
                  ml={4}
                  component="h3"
                  className={classes.wd_address_new_text}
                >
                  + ADD NEW ADDRESS
                </Typography>
              </Link>
            </Box>

            <Box component="span" sx={{ p: 4 }} textAlign="center">
              <Grid item xs={12} md={12} mt={3}>
                <Link to="/select-time" >
                  <Button variant="contained" className={classes.wd_primary_btn-classes.btn_md}>
                    Continue with this address
                  </Button>
                </Link>
              </Grid>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default SelectAddress;