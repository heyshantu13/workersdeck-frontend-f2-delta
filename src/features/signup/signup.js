import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  CircularProgress
} from "@mui/material/";
import styles from "../../assets/main.module.css";
import customStyle from "./style";
import registerBackground from "../../assets/auth_banner.png";
import muiStyle from "../../assets/mui_style";
import AuthService from "../../services/auth.service";
import {useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {

  const notify = () => toast("Successfully Registered",{
    position: "bottom-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    });

  
  const classes = customStyle();
  const muistyle = muiStyle();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    fullname:"",
    email: "",
    password: "",
    mobile_no:"",
    fullnameError:"",
    mobile_noError:"",
    passwordError: "",
    emailError: "",
    authError: "",
  });

  const [valid, setValid] = useState({
    email: true,
    password: true,
    disableButton: true,
    fullname:true,
    mobile_no:true,
    auth:true,
  });

  const  [bntloading, setBtnloading ] = useState(false);


  const handleSubmit = async (e) => {
    const {email, password,fullname,mobile_no} =  inputs;
    e.preventDefault();
    if(valid.email === true && valid.password === true && valid.fullname === true && valid.mobile_no === true){
          setBtnloading(true);
          setValid((prevState) => ({
            ...prevState,
            disableButton:true,
            auth:true,
            authError:"",
          }));
          // hit api login call
          await AuthService.register(fullname,email, password,mobile_no).then(response => { 
              if(response.data.status === true){
                setBtnloading(false);
                notify();
                setTimeout(() => {
                  //history.push("/");
                  navigate("/login");
               }, 2500);
               
              }else{
                setBtnloading(false);
                setValid((prevState) => ({ 
                  auth:false
                }));
                setInputs((prevState) => ({ 
                  authError: response.data.message
                }));

              }
          });
    }else{
      setBtnloading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    if (e.target.name === "email") {
      validateEmail(e.target.value);
    }
    if (e.target.name === "password") {
      validatePass(e.target.value);
    }
    if(e.target.name === "fullname") {
      if(inputs.fullname === "" || inputs.fullname.length < 6){
        setValid((valid) => ({ ...valid, fullname: false }));
      }else{
        setValid((valid) => ({ ...valid, fullname: true }));
      }
    }
    if(e.target.name === "mobile_no") {
      if(inputs.mobile_no === "" ){
        setValid((valid) => ({ ...valid, mobile_no: false }));
      }else{
        setValid((valid) => ({ ...valid, mobile_no: true }));
      }
    }
    if(valid.email === true && valid.password === true && valid.fullname === true && valid.mobile_no === true){
      setValid((prevState) => ({
        ...prevState,
        disableButton: false,
      }));
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

  const validatePass = (password) => {
    if (password.length < 8 || password.length > 14) {
      setValid((prevState) => ({
        ...prevState,
        password: false,
        passwordError: "Password Must be 8-14 Charecter",
      }));
    } else {
      setValid((prevState) => ({
        ...prevState,
        password: true,
        passwordError: "",
      }));
    }
  };

  return (
    <>  
      <Grid container>
      <ToastContainer />
        <Grid
          sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
          md={6}
          lg={6}
          item
        >
          <Box
            style={{
              height: "42rem",
              maxWidth: "44rem",
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
        <Grid sm={12} xs={12} md={12} lg={12} item m={3}>
        <Typography  variant="h4" className={classes.auth_head} ml={6} mt={8}>Create New Account</Typography>
        </Grid>
          <form onSubmit={handleSubmit} className={styles.form_align}>
          <Grid sm={12} xs={12} md={12} lg={12} item m={3}>
            <TextField
              required
              onChange={handleChange}
              id="fullname"
              label="Full Name"
              variant="outlined"
              className={`field-spacing`}
              fullWidth
              value={inputs.fullname}
              name="fullname"
              error={!valid.fullname}
              helperText={valid.fullnameError}
            />
            </Grid>
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
            <Grid sm={12} xs={12} md={12} lg={12} item m={3}>
            <TextField
              required
              onChange={handleChange}
              id="mobile_no"
              label="Mobile Number"
              variant="outlined"
              className={`field-spacing`}
              fullWidth
              value={inputs.mobile_no}
              name="mobile_no"
              error={!valid.mobile_no}
              helperText={valid.mobile_noError}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              inputProps={{ maxLength: 10 }}
            />
            </Grid>
         
            <Grid sm={12} xs={12} md={12} lg={12} item m={3}>
            <TextField
              required
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              className={`field-spacing `}
              fullWidth
              onChange={handleChange}
              value={inputs.password}
              name="password"
              error={!valid.password}
              helperText={valid.passwordError}
              inputProps={{ maxLength: 14 }}
            />
            </Grid>
            <Grid sm={12} xs={12} md={12} lg={12} item m={3}>
                 {!valid.auth
                  ?  <Typography
                  variant="string"
                  align="center"
                  className={` ${muistyle.wd_text} ${muistyle.wd_danger_text}`}
                >
                  {inputs.authError}
                </Typography>
                : ""
                 }
            </Grid>
            <Grid sm={12} xs={12} md={12} lg={12} item m={3}>
            <Typography
              variant="string"
              align="center"
              className={`field-spacing ${classes.forget_pass_text}`}
            >
               By Registration you accept TnC
            </Typography>
            </Grid>
            <Grid sm={12} xs={12} md={12} lg={12} item m={3}  >
            <Button
              variant="contained"
              className="auth-btn"
              type="submit"
              disabled={valid.disableButton}
              className={`${classes.login_btn} ${classes.centerBox}`}
            >
              {bntloading 
                    ? <CircularProgress  size={30} thickness={6}  sx={{
                      color: '#ffffff',
                    }}/> 
                    : "Create Account"
                    }
            </Button>
            </Grid>
          </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
