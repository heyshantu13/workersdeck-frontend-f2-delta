import React, { useState } from "react";
import {
  Box,
  Grid,
  Container,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import "./style.css";
import MapPicker from "react-google-map-picker";
import {useNavigate } from "react-router-dom";


const style = {
  maxWidth: 360,
};

const DefaultLocation = { lat: 10, lng: 106 };
const DefaultZoom = 10;

function NewAddress() {
    const navigate = useNavigate();
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  const handleNewAddress = () => {
    navigate("/select-address");
  }
  const [address, setAddress] = useState({
    address: "",
    pincode: "",
    fullname: "",
  });

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  return (
    <>
      <Grid item container>
        <Grid item xs={12} md={12} mt={1}>
          {/* Page Title */}
          <Box xs={12} md={12} mb={2}>
            <h4 className="address-head" sx={style}>
              ADD NEW ADDRESS
            </h4>
          </Box>
          {/* Page Title End */}
        </Grid>
        <Grid item xs={12} md={12} mt={1}>
          <hr className="divider"></hr>
          <Container maxWidth="xl" p={2}>
            <Grid item container>
              <Grid xs={12} sm={12} md={7} lg={7} ml={{ md: 4, lg: 4 }}>
                <MapPicker
                  defaultLocation={defaultLocation}
                  zoom={zoom}
                  mapTypeId="roadmap"
                  style={{ height: "500px" }}
                  onChangeLocation={handleChangeLocation}
                  onChangeZoom={handleChangeZoom}
                  apiKey="AIzaSyCjfzp0GubAY2gGeJJ789QTl-9D5h0xUsM"
                />
              </Grid>
              {/* Form here */}
              <Grid xs={12} sm={12} md={4} lg={4}>
                <form>
                  <Box textAlign="center">
                    <h3>Fill Address</h3>
                  </Box>
                  <TextField
                    required
                    id="address"
                    label="Your Location"
                    variant="outlined"
                    className="field-spacing"
                    fullWidth
                    name="address"
                  />
                  <TextField
                    required
                    id="pincode"
                    label="Pin Code"
                    variant="outlined"
                    className="field-spacing"
                    fullWidth
                    name="pincode"
                    inputProps={{ maxLength: 6 }}
                  />
                  <TextField
                    required
                    id="address"
                    label="Full Name"
                    variant="outlined"
                    className="field-spacing"
                    fullWidth
                    name="fullname"
                  />
                  <FormGroup ml={6} className={"wd-radio-lft"}>
                    <RadioGroup
                      aria-label="addresstype"
                      defaultValue="home"
                      name="type"
                    >
                      <FormControlLabel
                        value="home"
                        control={<Radio />}
                        label="Home"
                      />
                      <FormControlLabel
                        value="office"
                        control={<Radio />}
                        label="Office"
                      />
                    </RadioGroup>
                  </FormGroup>
                  <Button
                    variant="contained"
                    className={`wd-checkout-btn btn-lft`}
                    type="button"
                    onClick = {handleNewAddress}
                  >
                    Continue
                  </Button>
                </form>
              </Grid>

              {/* form end */}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default NewAddress;