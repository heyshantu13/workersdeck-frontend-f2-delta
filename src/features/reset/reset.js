import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
} from "@mui/material/";
import styles from "../../assets/main.module.css";
import customStyle from "../reset/style";
import registerBackground from "../../assets/auth_banner.png";

const ResetPass = () => {
  
  const classes = customStyle();

  const [inputs, setInputs] = useState({
    email: "",
    emailError: "",
  });

  const [valid, setValid] = useState({
    email: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    if (e.target.name === "email") {
      validateEmail(e.target.value);
    }

  };

  const validateEmail = (email) => {
    const pattern =
      /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    if (result === false) {
      setValid((prevState) => ({
        ...prevState,
        email: false,
        emailError: "Enter Valid Email",
      }));
    } else {
      setValid((prevState) => ({ ...prevState, email: true, emailError: "" }));
    }
  };


  return (
    <>
      <Grid container>
        <Grid
          sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
          md={6}
          lg={6}
          item
        >
          <Box
            style={{
              height: 680,
              width: 720,
              maxHeight: { xs: 233, md: 680 },
              maxWidth: { xs: 408, md: 720 },
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(45, 45, 45, 0.55)",
              backgroundImage: `url(${registerBackground})`,
            }}
          />
        </Grid>
        <Grid sm={12} xs={12} md={6} lg={6} item >
        <Box component="span" className={classes.authform} sx={{
              "& > :not(style)": { m: 1, maxWidth: "65ch"},
            }}>
        <Grid sm={12} xs={12} md={12} lg={12} item m={4}>
        <Typography  variant="h4" className={classes.auth_head} ml={6} mt={8}>Login to your account</Typography>
        </Grid>
          <form onSubmit={handleSubmit} className={styles.form_align}>
          <Grid sm={12} xs={12} md={12} lg={12} item m={3}>
            <TextField
              required
              onChange={handleChange}
              id="email"
              label="Email"
              variant="outlined"
              className={`field-spacing`}
              fullWidth
              value={inputs.email}
              name="email"
              error={!valid.email}
              helperText={valid.emailError}
            />
            </Grid>
           
            <Grid sm={12} xs={12} md={12} lg={12} item m={3}  >
            <Button
              variant="contained"
              type="submit"
              className={`${classes.login_btn} ${classes.centerBox} auth-btn`}
            >
              Reset Password
            </Button>
            </Grid>
          </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ResetPass;
