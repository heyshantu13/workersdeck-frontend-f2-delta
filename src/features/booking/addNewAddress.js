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
  Stack
} from "@mui/material";
import "./style.css";
import MapPicker from "react-google-map-picker";
import customStyle from "../../assets/mui_style";

const DefaultLocation = { lat: 10, lng: 106 };
const DefaultZoom = 10;

function NewAddress() {
  const classes = customStyle();
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  const [address, setAddress] = useState("");

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevState) => ({ ...prevState, [name]: value }));
    console.log(address);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }
  const style = {
    maxWidth: 360,
  };
  

  return (
    <>
      <Grid container>
          <Grid item xs={12} md={12} mt={2}>
                  <Box xs={12} md={12} mb={2}>
                    <h4 className={classes.addressHead} sx={style}>
                        ENTER NEW ADDRESS
                    </h4>
                  </Box>
          </Grid>
          {/* Map and adress form */}

               <Grid xs={12} sm={12} md={7} lg={7}  item>
                   <Container maxWidth="xl">
                     <MapPicker
                    defaultLocation={defaultLocation}
                    zoom={zoom}
                    mapTypeId="roadmap"
                    style={{ height: "400px" }}
                    onChangeLocation={handleChangeLocation}
                    onChangeZoom={handleChangeZoom}
                    apiKey="AIzaSyDdsqeg18-XZruhMgPKdUiAyQxEqAZ5pWw"
                  />
                   </Container>
               </Grid>
               <Grid xs={12} sm={12} md={5} lg={5}  item>
                   <Container maxWidth="xl">
                     <form>
                      <Grid sm={12} xs={12} md={10} lg={10} item>
                          <TextField
                          required
                          id="address"
                          label="Your Address"
                          variant="outlined"
                          className="field-spacing"
                          fullWidth
                          name="user_address"
                        />
                      </Grid>

                      <Grid sm={12} xs={12} md={10} lg={10} item>
                          <TextField
                              required
                              id="fullname"
                              label="Full Name"
                              variant="outlined"
                              className="field-spacing"
                              fullWidth
                              name="fullname"
                              onChange={handleChange}
                          />
                      </Grid>
                      <Grid sm={12} xs={12} md={10} lg={10} item>
                     
                      <TextField
                          required
                          id="pincode"
                          label="Pin Code"
                          variant="outlined"
                          className="field-spacing"
                          fullWidth
                          name="pincode"
                          inputProps={{ maxLength: 6 }}
                          onChange={handleChange}
                        />
                      <FormGroup ml={6} className={"wd-radio-lft"}>
                          <RadioGroup
                            aria-label="addresstype"
                            defaultValue="home"
                            name="type"
                            onChange={handleChange}
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
                      </Grid>
                      <Grid sm={12} xs={12} md={10} lg={10} item>
                      <Stack direction="row" spacing={2} m={1} justifyContent="center"  >
                      <Button
                          variant="contained"
                          type="submit"
                          onClick = {(e)=>handleSubmit(e)}
                          className={classes.CheckoutBtn}
                      >
                        Continue
                      </Button>
                      </Stack>
                   
                      </Grid>
                     
                     </form>
                    </Container>
               </Grid>
          {/* End */}
      </Grid>
    </>
  );
}

export default NewAddress;