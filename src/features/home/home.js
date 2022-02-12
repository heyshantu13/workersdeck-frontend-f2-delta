import React, { useState } from 'react';
import {Box,Grid,FormControl,InputLabel,Select,MenuItem,TextField } from '@mui/material/';
import styles from "./home.module.css";
import banner from '../../assets/wd_home_banner.jpg';
import Cities from '../../constants/cities';

const Home = () => {

    const [form,setForm] = useState({
        pincode: "",
        city : "",
        category_id: "",
    });

    const handleSubmit = (event) => {
         console.log(event);
         event.preventDefault();
    }

    const handleChange = e => {

      const { name, value } = e.target;
      setForm(prevState => ({
          ...prevState,
          [name]: value
      }));
  };
   

    return(
        <>
    <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} item>
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
              {/* Select City,Zipcode and Service */}
              <form onSubmit={handleSubmit}>
                <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                <Grid sm={12} xs={12} md={2} lg={2} item>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select City</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={form.city}
                    label="Select City"
                    name={"city"}
                    classname={styles.wd_select}
                    required
                    onChange={handleChange}
                    >
                    {Cities.map((cityObj) => (
                        <MenuItem value={cityObj.name} key={cityObj.id} > {cityObj.name}</MenuItem>
                    ))}
                </Select>
              </FormControl>
                </Grid>
                <Grid sm={12} xs={12} md={2} lg={2} item>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={form.category_id}
                  label="Select Category"
                  name={"category_id"}
                  onChange={handleChange}
                  required
                >
                    <MenuItem value={1}>Painter</MenuItem>
                    <MenuItem value={2}>Carpainter</MenuItem>
                    <MenuItem value={3}>Plumber</MenuItem>
                    <MenuItem value={4}>Electrician</MenuItem>
                    <MenuItem value={5}>Cleaning Service</MenuItem>
                </Select>
              </FormControl>
                </Grid>
                <Grid sm={12} xs={12} md={2} lg={2} item>
                <FormControl fullWidth className="pin-box">
                  <TextField
                    id="outlined-basic"
                    label="Pin Code"
                    variant="outlined"
                    name={"pincode"}
                    value={form.pincode}
                    maxLength={6}
                    required
                    onChange={handleChange}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                </FormControl>
                </Grid>
                </Grid>
              </form>
              {/* End Select City,Zipcode and Service */}
              {/* Services Card */}

              {/* Services Card End */}
          </Box>
        </Grid>
    </Grid>
        </>
    )
}

export default Home;