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
  RadioGroup,
} from "@mui/material";
import { Link } from "react-router-dom";
import customStyle from "../../assets/mui_style";
import UserAddressService from "../../services/address-service";
import { toast } from "react-toastify";
import {useNavigate } from "react-router-dom";


const style = {
  maxWidth: 360,
};

const SelectAddress = () => {
  const navigate = useNavigate();
  const classes = customStyle();
  const [loading, setLoading] = useState(true);
  const [dataAvail,setDataAvail] = useState(false);
  const [userAddress, setUserAddress] = useState();
  const [selectedAddress,setSelectedAddress] = useState();
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
        UserAddressService.fetchUserAddress().then(response => {
        if(response.data.length > 0) {
          setDataAvail(true);
          setUserAddress(response.data);
        }else{
          notify("You don't have any address.Please add new one");
        }  
      }).catch(err => {
        notify(err);
      }).finally(() => {
        setLoading(false);
      })
  },[]); 

  const handleAddress = () =>{
    if(selectedAddress){
      navigate("/select-time");
    }else{
      notify("Please select address first.");
    }
  }

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
            userAddress.map((address) => (
              <Grid item xs={12} md={12} ml={3} key={address.id}>
                <FormControl >
                <RadioGroup
                        aria-label="addresstype"
                        defaultValue="home"
                        name="type"
                  >
                     <FormControlLabel
                      value={address.id}
                      control={<Radio />}
                      label={address.type}
                      onClick={() => setSelectedAddress(address.id)}
                    />
                  </RadioGroup>
                  </FormControl>
                   
                  <Typography ml={4} component="h4" className={classes.address_text}>
                    {address.name}, {address.address}, {address.pin_code}
                  </Typography>
                  <hr></hr>
                </Grid>
            ))
          ): (
            <Typography ml={4} component="h4" className={classes.address_text}>
              No Address Avaialble
          </Typography>
          )
        )}
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
                  <Button variant="contained" className={classes.CheckoutBtn} onClick={handleAddress}>
                    Continue with address
                  </Button>
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