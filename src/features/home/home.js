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
} from "@mui/material/";
import ServiceCard from "../../components/Card/ServiceCard";
import ServiceList from "../../constants/services";
import styles from "./home.module.css";
import customStyle from "./style";
import banner from "../../assets/wd_home_banner.jpg";
import Cities from "../../constants/cities";

const Home = () => {

  const [form, setForm] = useState({
    pincode: "",
    city: "",
    category_id: "",
    cityError:"",
    categoryidError:"",
  });

  const [valid, setValid] = useState({
    pincode: true,
    city: true,
    category_id:true,
  });

  const classes = customStyle();

  const getServiceCard = (serviceCardobj) => {
    return (
      <Grid item xs={12} sm={12} md={2} lg={2} ml={3}>
        <ServiceCard {...serviceCardobj} />
      </Grid>
    );
  };

  const handleSubmit = (e) => {

  };

  const validateCity = (value) => {
    console.log(value);
    if(value === ''){
      setValid((prevState) => ({
        ...prevState,
        city: false,
        cityError: "Plese select city"
      }));
    }else{
      setValid((prevState) => ({
        ...prevState,
        city: true,
        cityError: ""
      }));
    }

  } 
  const validateCategoty = (value) => {

    if(value === ''){
      setValid((prevState) => ({
        ...prevState,
        category_id: false,
        categoryidError: "Plese select Service"
      }));
    }else{
      setValid((prevState) => ({
        ...prevState,
        category_id: true,
        categoryidError: ""
      }));
    }

  } 

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
        {/* Home page top banner */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box
              sx={{ height: "600px" }}
              lg={{ height: "600px" }}
              style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(45, 45, 45, 0.55)",
              }}
            >
            </Box>
          </Grid>
        {/* Top Banner End */}
        {/* Select City,Zipcode and Service */}
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <form onSubmit={handleSubmit}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  className = {styles.form_position}
                  spacing={1}
                >
                  <Grid sm={12} xs={12} md={2} lg={2} mr={1} item>
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
                        error={!valid.city}
                        helperText={valid.cityError}
                      >
                        {Cities.map((cityObj) => (
                          <MenuItem value={cityObj.name} key={cityObj.id}>
                            {" "}
                            {cityObj.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid sm={12} xs={12} md={2} lg={2}  mr={1}  item>
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
                        error={!valid.category_id}
                        helperText={valid.categoryidError}
                        
                      >
                        {ServiceList.map((serviceObj) => (
                          <MenuItem value={serviceObj.id} key={serviceObj.id}>
                            {serviceObj.title}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid sm={12} xs={12} md={2} lg={2}  mr={1} item>
                    <FormControl fullWidth >
                      <TextField
                        id="outlined-basic"
                        label="Pin Code"
                        variant="outlined"
                        name={"pincode"}
                        value={form.pincode}
                        maxLength={6}
                        onChange={handleChange}
                        className={classes.wd_select}
                        error={!valid.pincode}
                        helperText={valid.pincodeError}
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid sm={12} xs={12} md={2} lg={1}  mr={1} item>
                  <Button variant="contained" className={`${classes.wd_go_btn} ${styles.btn_align}`} type="submit">Go</Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
        {/* End Select City,Zipcode and Service */}
        {/* Service Card Start */}
          <Grid  xs={12} sm={12} md={12} lg={12}  
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
          <Grid item >
          <Card className={classes.wd_service_card} >
              <Grid container >
                    {ServiceList.map((serviceObj) => getServiceCard(serviceObj))}
                  </Grid>
          </Card>
          </Grid>
          </Grid>
        {/* Service Card End */}
        {/* Offer Area */}
        <Grid sm={12} xs={12} md={12} lg={12} item mt={1}>
          <Card  className={classes.wd_offer_card} >
            <Grid item container>
            <Grid sm={12} xs={12} md={8} lg={8} item>
            <h3 className={classes.offetTextOne}>
              BOOK HOME CLEANING SERVICES
            </h3>
            <h4 className={classes.offetTextTwo}>AND GET FLAT 10% OFF</h4>
            <Box textAlign="center">
              <Button className={classes.bookNowBtn}>BOOK NOW</Button>
            </Box>
          </Grid>
            </Grid>
          </Card>
          {/* Left area of banner  */}
          {/* Left Area End Of Banner */}
        </Grid>
        {/* Offer Area End */}
      </Grid>
      {/* Home Page End */}
    </>
  );
};

export default Home;
