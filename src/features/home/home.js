import React, { useState } from "react";
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Card,
  Button,
  Stack
} from "@mui/material/";
import {
  ServiceCard,
  Footer,
  Loader,
  HowItWorks
} from "../../components";

import { services } from "../../constants/services";
import styles from "./home.module.css";
import {Style} from "../";
import banner from "../../assets/wd_home_5.jpg";
import OfferBanner from "../../assets/offerbanner.png";
import { cities } from "../../constants/cities";
import { ServiceListNew } from "./homeSlice";
import scrollToTop from "../../util/scrollToTop";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = Style();

  const [form, setForm] = useState({
    pincode: "123456",
    city: "Nagpur",
    category_id: "5",
    pincodeError: "",
  });
  const [bntloading, setBtnloading] = useState(false);

  const notify = () =>
    toast.error("No Workers Avaialble Right Now For Your Location ", {
      position: "bottom-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });

  const handleSubmit = (e) => {
    const { pincode, city, category_id } = form;
    if (
      form.pincode.length === 0 ||
      form.city.length === 0 ||
      form.category_id.length === 0
    ) {
      e.preventDefault();
    } else {
      e.preventDefault();
      setBtnloading(true);
      dispatch(ServiceListNew({ city, pincode, category_id }))
        .then((data) => {
          if (data.payload.data.data.services.length !== 0) {
            navigate("/services");
          } else {
            notify();
            setBtnloading(false);
          }
        })
        .catch((err) => {
          notify();
          setBtnloading(false);
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  return (
    <>
      {/* Home Page Start */}
      <Grid container>
          {/* Home Page Banner */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box
                    sx={{ height: "580px" }}
                    lg={{ height: "580px" }}
                    style={{
                      backgroundImage: `url(${banner})`,
                      backgroundSize: "cover",
                      backgroundBlendMode: "overlay",
                      backgroundColor: "rgba(45, 45, 45, 0.55)",
                      marginTop:"-5px",
                      backgroundAttachment : "fixed",
                    }}
                  />
                
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <form onSubmit={handleSubmit} className={styles.form_position}>
            <Grid container justifyContent="center" >
                <Grid sm={12} xs={12} md={2} lg={2} mr={1} mb={2} item>
                    <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Select City
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={form.city}
                            label="Select City"
                            name={"city"}
                            className={classes.wd_select}
                            onChange={handleChange}
                            required
                          >
                            {cities.map((cityObj) => (
                              <MenuItem
                                value={cityObj.name}
                                key={cityObj.id}
                                selected={cityObj.name === "Nagpur" ? true : false}
                              >
                                {" "}
                                {cityObj.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                </Grid>
                <Grid sm={12} xs={12} md={2} lg={2} mr={1} mb={2} item>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={form.category_id}
                        label="Select Category"
                        name={"category_id"}
                        onChange={handleChange}
                        className={classes.wd_select}
                        required
                      >
                        {services.map((serviceObj) => (
                          <MenuItem
                            value={serviceObj.id}
                            key={serviceObj.id}
                            selected={serviceObj.id === 5 ? true : false}
                          >
                            {serviceObj.title}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                </Grid>
                <Grid sm={12} xs={12} md={2} lg={2} mr={1} mb={2} item>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    label="Pin Code"
                    variant="outlined"
                    name={"pincode"}
                    value={form.pincode}
                    onChange={handleChange}
                    className={classes.wd_select}
                    required
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                </FormControl>
                </Grid>
                <Grid sm={12} xs={12} md={2} lg={1} mr={1} mb={2} item>
                <Stack direction="row"  justifyContent="center"  >
                <Button
                  variant="contained"
                  className={`${classes.wd_go_btn} ${styles.btn_align}`}
                  type="submit"
                >
                  {bntloading ? (
                    <Loader size={25} thickness={6} color={"#ffffff"}/>
                  ) : (
                    "GO"
                  )}
                </Button>
                </Stack>
              </Grid>
              </Grid>

            
            </form>
          </Grid>
        {/* Home Page Banner End */}

        {/* Services Card */}

          <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Card className={classes.wd_service_card}>
              <Grid container key={1}>
                {services.map((serviceObj) => (
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={2}
                    lg={2}
                    key={serviceObj.id}
                  >
                    <ServiceCard {...serviceObj} />
                  </Grid>
                ))}
              </Grid>
            </Card>

        </Grid>
        </Grid>
        {/* Services Card End */}
        <Grid sm={12} xs={12} md={12} lg={12} item >
        </Grid>

        {/* Offer Area */}
        <Grid sm={12} xs={12} md={12} lg={12} item >
          <Card className={classes.wd_offer_card}>
            <Grid item container>
              <Grid sm={12} xs={12} md={8} lg={8} item>
                <h3 className={classes.offetTextOne}>
                  BOOK HOME CLEANING SERVICES
                </h3>
                <h4 className={classes.offetTextTwo}>AND GET FLAT 10% OFF</h4>
                <Box textAlign="center">
                  <Button className={classes.bookNowBtn} onClick={scrollToTop}>
                    Book Now
                  </Button>
                </Box>
              </Grid>
              <Grid sm={12} xs={12} md={4} lg={4} item>
                <Box
                  component="img"
                  sx={{
                    height: 370,
                    width: 370,
                    maxHeight: { xs: 455, md: 370 },
                    maxWidth: { xs: 370, md: 370 },
                  }}
                  mt={2}
                  alt="The house from the offer."
                  src={OfferBanner}
                  className="img-box-effect"
                />
              </Grid>
            </Grid>
          </Card>
          {/* Left area of banner  */}
          {/* Left Area End Of Banner */}
        </Grid>
        {/* Offer Area End */}
        <Footer />
      </Grid>
      {/* Home Page end */}
    </>
  );
};

export default Home;
